/**
 * effects.js — Unified 3D Portfolio Effects ("The Workshop")
 *
 * Single Three.js scene with:
 * - Entry animation (particles coalesce from chaos)
 * - Particle constellation in hero with mouse repulsion
 * - Themed floating wireframe objects per section
 * - Scroll-driven camera journey
 * - Project card 3D tilt + spotlight (CSS/JS)
 * - Ambient cursor glow (CSS/JS)
 * - Theme-aware colors via MutationObserver
 */
(function () {
    'use strict';

    // ========== CONFIG ==========
    const CFG = {
        particle: { count: 500, radius: 6, size: 1.8, entryMs: 2200, repelR: 4, repelStr: 2, drift: 0.12, offsetX: 8, offsetY: -2 },
        cam: { fov: 60, z: 28, travel: 80, lerp: 0.08 },
        obj: { opLight: 0.18, opDark: 0.45 },
        glow: { size: 350, lerp: 0.12 },
        tilt: { deg: 10, persp: 800, scale: 1.02 },
    };

    // ========== STATE ==========
    let scene, camera, renderer;
    let pMesh, pGeo, pMat, startP, targetP;
    let objs = [];
    let objBasePositions = []; // Store original positions to prevent drift
    let mx = 0, my = 0;
    let scrollSmooth = 0;
    let entryStart = -1, entryDone = false;
    let isMobile = false;
    let theme = 'dark';
    let accent;
    let glowEl, glowX = 0, glowY = 0, glowTX = 0, glowTY = 0, glowActive = false, glowTimer;
    let t0 = 0;

    // ========== UTILS ==========
    const lerp = (a, b, t) => a + (b - a) * t;
    const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    function fibSphere(n, r) {
        const a = new Float32Array(n * 3), g = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < n; i++) {
            const y = 1 - (i / (n - 1)) * 2, rad = Math.sqrt(1 - y * y), th = g * i;
            a[i * 3] = Math.cos(th) * rad * r;
            a[i * 3 + 1] = y * r;
            a[i * 3 + 2] = Math.sin(th) * rad * r;
        }
        return a;
    }

    function scatter(n, range) {
        const a = new Float32Array(n * 3);
        for (let i = 0; i < n * 3; i++) a[i] = (Math.random() - 0.5) * range;
        return a;
    }

    function glowTex() {
        const s = 64, c = document.createElement('canvas');
        c.width = s; c.height = s;
        const ctx = c.getContext('2d'), g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
        g.addColorStop(0, 'rgba(255,255,255,1)');
        g.addColorStop(0.2, 'rgba(255,255,255,0.6)');
        g.addColorStop(0.5, 'rgba(255,255,255,0.1)');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g; ctx.fillRect(0, 0, s, s);
        const tex = new THREE.CanvasTexture(c); tex.needsUpdate = true;
        return tex;
    }

    function getTheme() { return document.documentElement.getAttribute('data-theme') || 'light'; }
    function wireOp() { return theme === 'dark' ? CFG.obj.opDark : CFG.obj.opLight; }
    function partOp() { return theme === 'dark' ? 0.45 : 0.18; }

    // ========== SCENE ==========
    function initScene() {
        const cv = document.getElementById('bg-canvas');
        if (!cv) return false;
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(CFG.cam.fov, innerWidth / innerHeight, 0.1, 200);
        camera.position.set(0, 0, CFG.cam.z);
        renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
        renderer.setSize(innerWidth, innerHeight);
        renderer.setClearColor(0x000000, 0);
        accent = new THREE.Color('#c8a97e');
        theme = getTheme();
        return true;
    }

    // ========== PARTICLES ==========
    function createParticles() {
        const n = CFG.particle.count;
        targetP = fibSphere(n, CFG.particle.radius);
        startP = scatter(n, 60);
        const curP = new Float32Array(startP);
        pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(curP, 3));
        pMat = new THREE.PointsMaterial({
            size: CFG.particle.size, map: glowTex(), transparent: true,
            blending: THREE.AdditiveBlending, depthWrite: false,
            sizeAttenuation: true,
            color: accent, opacity: partOp(),
        });
        pMesh = new THREE.Points(pGeo, pMat);
        // Offset particles to the right so they don't cover hero text
        pMesh.position.set(CFG.particle.offsetX, CFG.particle.offsetY, 0);
        scene.add(pMesh);
    }

    function tickParticles(t) {
        const n = CFG.particle.count, pos = pGeo.attributes.position.array;
        if (!entryDone) {
            if (entryStart < 0) entryStart = t;
            const p = Math.min((t - entryStart) / (CFG.particle.entryMs / 1000), 1), e = easeOutExpo(p);
            for (let i = 0; i < n * 3; i++) pos[i] = lerp(startP[i], targetP[i], e);
            if (p >= 1) entryDone = true;
        } else {
            const d = t * CFG.particle.drift, mw = { x: mx * 15, y: my * 10 };
            for (let i = 0; i < n; i++) {
                const j = i * 3;
                // Compute oscillation target around the fibonacci position
                let px = targetP[j] + Math.sin(d + i * 0.1) * 0.3;
                let py = targetP[j + 1] + Math.cos(d + i * 0.07) * 0.2;
                let pz = targetP[j + 2] + Math.sin(d + i * 0.13) * 0.15;
                // Mouse repulsion
                const dx = px - mw.x, dy = py - mw.y, dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CFG.particle.repelR && dist > 0.01) {
                    const f = (1 - dist / CFG.particle.repelR) * CFG.particle.repelStr;
                    px += (dx / dist) * f; py += (dy / dist) * f;
                }
                // Smooth interpolation — faster lerp for snappier feel
                pos[j] = lerp(pos[j], px, 0.12);
                pos[j + 1] = lerp(pos[j + 1], py, 0.12);
                pos[j + 2] = lerp(pos[j + 2], pz, 0.12);
            }
        }
        pGeo.attributes.position.needsUpdate = true;
    }

    // ========== THEMED OBJECTS ==========
    function wMat() {
        return new THREE.MeshBasicMaterial({
            color: accent.clone(), wireframe: true, transparent: true, opacity: wireOp(),
        });
    }

    function createObjects() {
        const defs = [];

        // 1 — Minecraft Voxel Cluster (Projects zone)
        (() => {
            const g = new THREE.Group(), b = new THREE.BoxGeometry(1, 1, 1);
            [[0, 0, 0], [1.15, 0, 0], [0, 1.15, 0], [0, 0, 1.15], [-1.15, 0, 0], [0, -1.15, 0]].forEach(p => {
                const m = new THREE.Mesh(b, wMat()); m.position.set(...p); g.add(m);
            });
            g.position.set(12, -32, -8);
            g.userData = { ph: Math.random() * 6.28, ax: 'y', rotSpeed: 0.003 };
            defs.push(g);
        })();

        // 2 — Code Chevrons </> (Skills zone)
        (() => {
            const g = new THREE.Group(), bar = new THREE.BoxGeometry(0.1, 1.6, 0.1);
            const make = (rz, x, y) => { const m = new THREE.Mesh(bar, wMat()); m.rotation.z = rz; m.position.set(x, y, 0); g.add(m); };
            make(Math.PI / 4, -0.55, 0.5); make(-Math.PI / 4, -0.55, -0.5);
            make(Math.PI / 6, 0, 0);
            make(-Math.PI / 4, 0.55, 0.5); make(Math.PI / 4, 0.55, -0.5);
            g.position.set(-10, -18, -5);
            g.userData = { ph: Math.random() * 6.28, ax: 'z', rotSpeed: 0.002 };
            defs.push(g);
        })();

        // 3 — Camera Lens (Interests zone)
        (() => {
            const g = new THREE.Group();
            g.add(new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.5, 16), wMat()));
            const ring = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.08, 8, 24), wMat());
            ring.rotation.x = Math.PI / 2; g.add(ring);
            g.position.set(8, -58, -12);
            g.userData = { ph: Math.random() * 6.28, ax: 'x', rotSpeed: 0.002 };
            defs.push(g);
        })();

        // 4 — Terminal Window (Skills zone)
        (() => {
            const g = new THREE.Group();
            g.add(new THREE.Mesh(new THREE.BoxGeometry(3, 2, 0.06), wMat()));
            const cur = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.07, 0.06), wMat());
            cur.position.set(-0.7, -0.5, 0.05); g.add(cur);
            g.position.set(-13, -13, -6);
            g.userData = { ph: Math.random() * 6.28, ax: 'y', rotSpeed: 0.0015 };
            defs.push(g);
        })();

        // 5 — Orbit Rings / Atom (Vibe Coding / Projects zone)
        (() => {
            const g = new THREE.Group();
            g.add(new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), wMat()));
            const tr = (rx, ry) => { const m = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.04, 8, 32), wMat()); m.rotation.x = rx; m.rotation.y = ry; g.add(m); };
            tr(0, 0); tr(Math.PI / 3, 0); tr(-Math.PI / 3, Math.PI / 4);
            g.position.set(14, -44, -10);
            g.userData = { ph: Math.random() * 6.28, ax: 'y', rotSpeed: 0.004 };
            defs.push(g);
        })();

        // 6 — Hexagonal Prism (Workflow zone)
        (() => {
            const g = new THREE.Group();
            g.add(new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.5, 6), wMat()));
            g.position.set(-11, -26, -15);
            g.userData = { ph: Math.random() * 6.28, ax: 'z', rotSpeed: 0.002 };
            defs.push(g);
        })();

        // 7 — Server Network (Community zone)
        (() => {
            const g = new THREE.Group(), sb = new THREE.BoxGeometry(0.55, 0.55, 0.55);
            [[-1.4, 0, 0], [0, 0, 0], [1.4, 0, 0], [0, 1.1, 0]].forEach(p => {
                const m = new THREE.Mesh(sb, wMat()); m.position.set(...p); g.add(m);
            });
            const lm = new THREE.LineBasicMaterial({ color: accent.clone(), transparent: true, opacity: wireOp() * 0.6 });
            const lv = new Float32Array([-1.4, 0, 0, 0, 0, 0, 0, 0, 0, 1.4, 0, 0, 0, 0, 0, 0, 1.1, 0]);
            const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.BufferAttribute(lv, 3));
            g.add(new THREE.LineSegments(lg, lm));
            g.position.set(-8, -50, -7);
            g.userData = { ph: Math.random() * 6.28, ax: 'y', rotSpeed: 0.002 };
            defs.push(g);
        })();

        // 8 — Icosahedron (ambient far background)
        (() => {
            const g = new THREE.Group();
            g.add(new THREE.Mesh(new THREE.IcosahedronGeometry(1.6, 0), wMat()));
            g.position.set(6, -68, -18);
            g.userData = { ph: Math.random() * 6.28, ax: 'x', rotSpeed: 0.003 };
            defs.push(g);
        })();

        defs.forEach(g => {
            // Store base position so drift is oscillation, not accumulation
            objBasePositions.push({ x: g.position.x, y: g.position.y, z: g.position.z });
            scene.add(g);
            objs.push(g);
        });
    }

    // FIX: Objects oscillate around base position instead of drifting away
    function tickObjects(t) {
        objs.forEach((o, i) => {
            const ph = o.userData.ph, ax = o.userData.ax;
            const base = objBasePositions[i];
            // Oscillate around base — never accumulate
            o.position.x = base.x + Math.sin(t * 0.4 + ph) * 1.2;
            o.position.y = base.y + Math.cos(t * 0.3 + ph * 1.3) * 0.8;
            // Slow rotation
            const rs = o.userData.rotSpeed || 0.002;
            if (ax === 'x') o.rotation.x += rs;
            else if (ax === 'y') o.rotation.y += rs;
            else o.rotation.z += rs;
        });
    }

    // ========== SCROLL CAMERA ==========
    // FIX: Single lerp for smooth, responsive camera
    function tickCamera() {
        const dh = document.documentElement.scrollHeight - innerHeight;
        const scrollTarget = dh > 0 ? scrollY / dh : 0;
        scrollSmooth = lerp(scrollSmooth, scrollTarget, CFG.cam.lerp);
        camera.position.y = -scrollSmooth * CFG.cam.travel;
        camera.lookAt(0, camera.position.y, 0);
        // Fade particles as camera moves away from hero
        if (pMat) {
            const d = Math.abs(camera.position.y);
            let op = partOp();
            if (d > 10) op *= Math.max(0, 1 - (d - 10) / 15);
            pMat.opacity = op;
        }
    }

    // ========== THEME ==========
    function initThemeObs() {
        new MutationObserver(() => {
            const nt = getTheme();
            if (nt !== theme) { theme = nt; onThemeChange(); }
        }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }

    function onThemeChange() {
        const op = wireOp();
        objs.forEach(o => o.traverse(c => {
            if (c.isMesh && c.material) c.material.opacity = op;
            if (c.isLineSegments && c.material) c.material.opacity = op * 0.6;
        }));
        if (pMat) pMat.opacity = partOp();
        updateGlowTheme();
    }

    // ========== CURSOR GLOW ==========
    function initGlow() {
        glowEl = document.getElementById('cursor-glow');
        if (!glowEl) return;
        document.addEventListener('mousemove', e => {
            glowTX = e.clientX; glowTY = e.clientY;
            glowActive = true;
            clearTimeout(glowTimer);
            glowTimer = setTimeout(() => glowActive = false, 3000);
        });
        document.addEventListener('mouseleave', () => glowActive = false);
        updateGlowTheme();
    }

    function updateGlowTheme() {
        if (!glowEl) return;
        if (theme === 'dark') {
            glowEl.style.background = 'radial-gradient(circle, rgba(200,169,126,0.12) 0%, rgba(200,169,126,0.04) 40%, transparent 70%)';
            glowEl.style.mixBlendMode = 'screen';
        } else {
            glowEl.style.background = 'radial-gradient(circle, rgba(200,169,126,0.06) 0%, rgba(200,169,126,0.015) 40%, transparent 70%)';
            glowEl.style.mixBlendMode = 'soft-light';
        }
    }

    function tickGlow() {
        if (!glowEl) return;
        glowX = lerp(glowX, glowTX, CFG.glow.lerp);
        glowY = lerp(glowY, glowTY, CFG.glow.lerp);
        glowEl.style.transform = `translate(${glowX - CFG.glow.size / 2}px, ${glowY - CFG.glow.size / 2}px)`;
        glowEl.style.opacity = glowActive ? '1' : '0';
    }

    // ========== TILT CARDS ==========
    function initTilt() {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const r = card.getBoundingClientRect();
                const x = e.clientX - r.left, y = e.clientY - r.top;
                const cx = r.width / 2, cy = r.height / 2;
                const ry = ((x - cx) / cx) * CFG.tilt.deg;
                const rx = ((cy - y) / cy) * CFG.tilt.deg;
                card.style.transform = `perspective(${CFG.tilt.persp}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${CFG.tilt.scale})`;
                card.style.setProperty('--spot-x', x + 'px');
                card.style.setProperty('--spot-y', y + 'px');
                card.style.setProperty('--spot-op', '1');
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.setProperty('--spot-op', '0');
            });
        });
    }

    // ========== LOOP ==========
    function animate() {
        requestAnimationFrame(animate);
        if (document.hidden) return;
        const now = performance.now() / 1000;
        if (t0 === 0) t0 = now;
        const t = now - t0;
        tickCamera();
        if (!isMobile) { tickParticles(t); tickObjects(t); }
        tickGlow();
        renderer.render(scene, camera);
    }

    // ========== EVENTS ==========
    function initEvents() {
        document.addEventListener('mousemove', e => {
            mx = (e.clientX / innerWidth) * 2 - 1;
            my = -(e.clientY / innerHeight) * 2 + 1;
        });
        let rto;
        addEventListener('resize', () => {
            clearTimeout(rto);
            rto = setTimeout(() => {
                camera.aspect = innerWidth / innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(innerWidth, innerHeight);
            }, 150);
        });
    }

    // ========== INIT ==========
    function init() {
        isMobile = innerWidth < 768 || 'ontouchstart' in window;
        const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (isMobile || reduced) { initTilt(); if (!isMobile) initGlow(); return; }
        if (typeof THREE === 'undefined') { console.warn('[effects] Three.js not loaded'); initTilt(); initGlow(); return; }
        if (!initScene()) return;
        createParticles();
        createObjects();
        initThemeObs();
        initGlow();
        initTilt();
        initEvents();
        animate();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
