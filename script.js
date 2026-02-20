// ===== Translations =====
const translations = {
  en: {
    // Nav
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navCommunity: 'Community',
    navInterests: 'Interests',
    navContact: 'Contact',

    // Hero
    heroGreeting: '> hello, world',
    heroName: "I'm GA24",
    heroTagline: 'Builder. Tinkerer. Creator.',
    heroDesc: "16-year-old student at Deutsche Schule Shanghai, building at the intersection of technology, creativity, and problem-solving. From Minecraft mods to AI-powered apps — I turn ideas into things that work.",
    heroBtnProjects: 'View Projects',
    heroBtnContact: 'Get in Touch',
    heroMetaLangs: '3',
    heroMetaLangsLabel: 'Languages',
    heroMetaProjects: '6+',
    heroMetaProjectsLabel: 'Projects',
    heroMetaGrade: '10th',
    heroMetaGradeLabel: 'Grade at DSS',

    // About
    aboutLabel: 'About Me',
    aboutTitle: 'Bridging Cultures & Code',
    aboutP1: "I'm a 16-year-old student at Deutsche Schule Shanghai (DSS), Yangpu Campus, currently in the 10th grade. Growing up in Shanghai in a fully international school environment, I've become fluent in three languages — German, English, and Chinese — which has shaped the way I think, communicate, and collaborate across cultures.",
    aboutP2: "My passion lives at the intersection of technology, creativity, and problem-solving. I'm an active builder, tinkerer, and creator — whether I'm setting up a modded Minecraft server, developing a screen-time analysis app, leading a programming club, or capturing a shot with my camera.",
    aboutPhotoAlt: 'Your photo here',
    langDE: 'German',
    langEN: 'English',
    langZH: 'Chinese',

    // Skills
    skillsLabel: 'Skills',
    skillsTitle: 'What I Work With',
    skillsDesc: 'A blend of hands-on experience, self-taught exploration, and AI-assisted development.',

    skillProgTitle: 'Programming',
    skillProgDesc: 'Actively learning JavaScript and Python, building real projects with AI-assisted development. Java experience from Minecraft modding with Fabric API.',
    skillSysTitle: 'Systems & Environment',
    skillSysDesc: 'Daily driving Arch Linux (Omarchy) with Hyprland Wayland compositor. Managing end-to-end Linux systems — from audio pipelines to desktop portals.',
    skillWorkflowTitle: 'Workflow & Tools',
    skillWorkflowDesc: 'Structured workflows using Obsidian, LaTeX, Blender, and AI-assisted development for rapid prototyping and shipping.',
    skillVibeTitle: 'Vibe Coding',
    skillVibeDesc: "Using AI tools to bring ideas to life rapidly, even in unfamiliar languages and frameworks. Understanding what to build matters more than memorizing how.",

    // Projects
    projectsLabel: 'Projects',
    projectsTitle: 'Things I\'ve Built',
    projectsDesc: 'From Minecraft mods to AI-powered apps — each project solves a real problem.',

    projLitematicaTag: 'Minecraft Mod',
    projLitematicaTitle: 'Litematica Sync',
    projLitematicaDesc: 'A Fabric-based mod that synchronizes schematic data across a team in real time, enabling large-scale collaborative building with complex server-side coordination logic.',

    projSelfObserverTag: 'AI Tool',
    projSelfObserverTitle: 'SelfObserver',
    projSelfObserverDesc: 'AI-powered screen time analyzer that surfaces meaningful insights about digital habits. Full web UI making data accessible and readable.',

    projSchemTag: '3D Tool',
    projSchemTitle: '.schem to 3D Converter',
    projSchemDesc: 'Converts Minecraft .schem schematic files into universal 3D object formats for import into Blender and other 3D software.',

    projRobloxTag: 'Game Dev',
    projRobloxTitle: 'Roblox Experiences',
    projRobloxDesc: 'Built several Roblox games including Escape the Brainrot Factory — custom gacha mechanics, rarity tiers, and visual effects.',

    projThreeTag: '3D Web',
    projThreeTitle: 'Three.js Visualizations',
    projThreeDesc: 'Browser-based interactive 3D projects including a physics-based bridge simulation. Focus on concept and outcome.',

    projPresentTag: 'AI Content',
    projPresentTitle: 'AI-Powered Presentations',
    projPresentDesc: 'Full presentation decks on technical topics like alcohol chemistry — polished, structured content produced rapidly with AI assistance.',

    // Community
    communityLabel: 'Community',
    communityTitle: 'Beyond the Classroom',

    commServerTitle: 'Minecraft Server',
    commServerDetail: 'mc.dssy.fun',
    commServerDesc: "Running the official Fabric-modded Minecraft server for Deutsche Schule Shanghai. Real infrastructure, real users — Java configuration, mod curation, and keeping things stable for the school community.",

    commAGTitle: 'Programmieren mit JAVA in Minecraft',
    commAGDetail: 'School Working Group (AG)',
    commAGDesc: "Leading a working group where students learn Java programming through Minecraft modding. Teaching others is one of the best ways to deepen your own understanding.",

    // Academics
    academicsLabel: 'Academics',
    academicsTitle: 'Academic Profile',
    academicsDesc: 'Strong STEM focus with comprehensive LaTeX-documented study materials for ZK exam preparation.',

    acadMathTitle: 'Mathematics',
    acadMathDesc: 'Polynomial functions, calculus applications, analytical problem-solving',
    acadChemTitle: 'Chemistry',
    acadChemDesc: 'Organic chemistry, alcohol metabolism, detection reactions, lab methodology',
    acadBioTitle: 'Biology',
    acadBioDesc: 'Genetics, inheritance models, molecular biology',
    acadPhysTitle: 'Physics',
    acadPhysDesc: 'Dynamics, circular motion, applied problem-solving',

    // Interests
    interestsLabel: 'Interests',
    interestsTitle: 'Beyond Code',
    tabPhotography: '📷 Photography',
    tabGaming: '🎮 Gaming',
    tabFilm: '🎬 Film & Anime',
    tabMusic: '🎵 Music',

    photoContent: "I'm a photographer by hobby. I'm drawn to the craft of capturing a moment — the composition, the light, the timing. It's a creative discipline that complements the more system-oriented side of my work and gives me a reason to look at the world differently.",
    musicContent: "Currently on repeat: 恶魔之子 (Son of the Devil). My taste leans toward music with atmosphere and edge.",
    gamingIntro: 'Gaming is a core part of how I engage with interactive media.',

    gameCS2: 'CS2',
    gameCS2Desc: 'Precise mechanics & deep game sense',
    gameMC: 'Minecraft',
    gameMCDesc: 'Player, developer & server admin',
    gameRoblox: 'Roblox',
    gameRobloxDesc: 'Platform for game development',
    gameRacing: 'F1 23 / Forza',
    gameRacingDesc: 'Motorsport itch, scratched',
    gameSH: 'Silent Hill f',
    gameSHDesc: 'Horror that builds genuine dread',
    gameITT: 'It Takes Two',
    gameITTDesc: 'Co-op masterclass — loved it',

    filmIntro: 'My current favourites across film and anime.',
    filmF1: 'F1: The Movie',
    filmF1Desc: 'Motorsport meets cinematography',
    filmAdol: 'Adolescence',
    filmAdolDesc: 'Thoughtful storytelling',
    filmKpop: 'Kpop Demon Hunters',
    filmKpopDesc: 'Unique genre blend',
    filmAOT: 'Attack on Titan',
    filmAOTDesc: 'The definitive anime — nothing comes close',

    // Contact
    contactLabel: 'Get in Touch',
    contactTitle: "Let's Connect",
    contactDesc: "Based in Shanghai. Open to collaboration — whether it's a project, an idea, or just a conversation.",
    contactGithub: 'GitHub',
    contactDiscord: 'Discord Server',
    contactEmail: 'Personal Email',
    contactSchoolEmail: 'School Email',
    contactPhone: 'Phone',
    contactWechat: 'WeChat',

    // Footer
    footerText: '© 2026 GA24. Built with pure HTML, CSS & JS.',
  },

  de: {
    navAbout: 'Über mich',
    navSkills: 'Fähigkeiten',
    navProjects: 'Projekte',
    navCommunity: 'Gemeinschaft',
    navInterests: 'Interessen',
    navContact: 'Kontakt',

    heroGreeting: '> hallo, welt',
    heroName: "Ich bin GA24",
    heroTagline: 'Entwickler. Tüftler. Macher.',
    heroDesc: "16-jähriger Schüler an der Deutschen Schule Shanghai — ich arbeite an der Schnittstelle von Technologie, Kreativität und Problemlösung. Von Minecraft-Mods bis hin zu KI-gesteuerten Apps.",
    heroBtnProjects: 'Projekte ansehen',
    heroBtnContact: 'Kontakt aufnehmen',
    heroMetaLangs: '3',
    heroMetaLangsLabel: 'Sprachen',
    heroMetaProjects: '6+',
    heroMetaProjectsLabel: 'Projekte',
    heroMetaGrade: '10.',
    heroMetaGradeLabel: 'Klasse an der DSS',

    aboutLabel: 'Über mich',
    aboutTitle: 'Kulturen & Code verbinden',
    aboutP1: "Ich bin ein 16-jähriger Schüler an der Deutschen Schule Shanghai (DSS), Campus Yangpu, in der 10. Klasse. In einem internationalen Schulumfeld in Shanghai aufgewachsen, spreche ich fließend drei Sprachen — Deutsch, Englisch und Chinesisch — was mein Denken und meine Zusammenarbeit geprägt hat.",
    aboutP2: "Meine Leidenschaft liegt an der Schnittstelle von Technologie, Kreativität und Problemlösung. Ich baue, bastle und erschaffe — ob ich einen Minecraft-Server aufsetze, eine Screen-Time-App entwickle, eine Programmier-AG leite oder fotografiere.",
    aboutPhotoAlt: 'Dein Foto hier',
    langDE: 'Deutsch',
    langEN: 'Englisch',
    langZH: 'Chinesisch',

    skillsLabel: 'Fähigkeiten',
    skillsTitle: 'Womit ich arbeite',
    skillsDesc: 'Eine Mischung aus praktischer Erfahrung, Selbststudium und KI-gestützter Entwicklung.',
    skillProgTitle: 'Programmierung',
    skillProgDesc: 'JavaScript und Python lernend, echte Projekte mit KI-gestützter Entwicklung. Java-Erfahrung durch Minecraft-Modding mit der Fabric API.',
    skillSysTitle: 'Systeme & Umgebung',
    skillSysDesc: 'Arch Linux (Omarchy) mit Hyprland Wayland Compositor als tägliches System. End-to-End Linux-Systemverwaltung.',
    skillWorkflowTitle: 'Workflow & Tools',
    skillWorkflowDesc: 'Strukturierte Arbeitsabläufe mit Obsidian, LaTeX, Blender und KI-gestützter Entwicklung.',
    skillVibeTitle: 'Vibe Coding',
    skillVibeDesc: 'KI-Tools nutzen, um Ideen schnell umzusetzen. Verstehen, was man bauen will, ist wichtiger als auswendig zu wissen, wie.',

    projectsLabel: 'Projekte',
    projectsTitle: 'Was ich gebaut habe',
    projectsDesc: 'Von Minecraft-Mods bis KI-Apps — jedes Projekt löst ein echtes Problem.',
    projLitematicaTag: 'Minecraft Mod',
    projLitematicaTitle: 'Litematica Sync',
    projLitematicaDesc: 'Ein Fabric-Mod, der Schematic-Daten in Echtzeit über ein Team synchronisiert und groß angelegtes kollaboratives Bauen ermöglicht.',
    projSelfObserverTag: 'KI-Tool',
    projSelfObserverTitle: 'SelfObserver',
    projSelfObserverDesc: 'KI-gesteuerte Bildschirmzeit-Analyse mit aussagekräftigen Einblicken. Volle Web-Oberfläche für die Daten.',
    projSchemTag: '3D-Tool',
    projSchemTitle: '.schem zu 3D Konverter',
    projSchemDesc: 'Konvertiert Minecraft .schem-Dateien in universelle 3D-Formate für Blender und andere 3D-Software.',
    projRobloxTag: 'Spieleentwicklung',
    projRobloxTitle: 'Roblox-Erfahrungen',
    projRobloxDesc: 'Mehrere Roblox-Spiele gebaut — individuelle Gacha-Mechaniken, Seltenheitsstufen und visuelle Effekte.',
    projThreeTag: '3D Web',
    projThreeTitle: 'Three.js Visualisierungen',
    projThreeDesc: 'Browserbasierte interaktive 3D-Projekte, darunter eine physikbasierte Brückensimulation.',
    projPresentTag: 'KI-Inhalte',
    projPresentTitle: 'KI-Präsentationen',
    projPresentDesc: 'Vollständige Präsentationen zu technischen Themen wie Alkoholchemie — mit KI-Unterstützung erstellt.',

    communityLabel: 'Gemeinschaft',
    communityTitle: 'Über den Unterricht hinaus',
    commServerTitle: 'Minecraft Server',
    commServerDetail: 'mc.dssy.fun',
    commServerDesc: 'Betrieb des offiziellen Fabric-Minecraft-Servers der Deutschen Schule Shanghai. Echte Infrastruktur, echte Nutzer.',
    commAGTitle: 'Programmieren mit JAVA in Minecraft',
    commAGDetail: 'Arbeitsgemeinschaft (AG)',
    commAGDesc: 'Leitung einer AG, in der Schüler Java-Programmierung durch Minecraft-Modding lernen. Lehren vertieft das eigene Verständnis.',

    academicsLabel: 'Akademisches',
    academicsTitle: 'Akademisches Profil',
    academicsDesc: 'Starker MINT-Fokus mit umfassenden LaTeX-Lernmaterialien zur ZK-Vorbereitung.',
    acadMathTitle: 'Mathematik',
    acadMathDesc: 'Polynomfunktionen, Analysis-Anwendungen, analytisches Problemlösen',
    acadChemTitle: 'Chemie',
    acadChemDesc: 'Organische Chemie, Alkoholstoffwechsel, Nachweisreaktionen, Labormethodik',
    acadBioTitle: 'Biologie',
    acadBioDesc: 'Genetik, Vererbungsmodelle, Molekularbiologie',
    acadPhysTitle: 'Physik',
    acadPhysDesc: 'Dynamik, Kreisbewegung, angewandtes Problemlösen',

    interestsLabel: 'Interessen',
    interestsTitle: 'Jenseits des Codes',
    tabPhotography: '📷 Fotografie',
    tabGaming: '🎮 Gaming',
    tabFilm: '🎬 Film & Anime',
    tabMusic: '🎵 Musik',
    photoContent: "Fotografie ist mein Hobby. Mich fasziniert es, einen Moment einzufangen — Komposition, Licht, Timing. Eine kreative Disziplin, die die systemorientierte Seite meiner Arbeit ergänzt.",
    musicContent: "Aktuell auf Repeat: 恶魔之子 (Son of the Devil). Mein Geschmack geht in Richtung Musik mit Atmosphäre und Kante.",
    gamingIntro: 'Gaming ist ein zentraler Teil davon, wie ich interaktive Medien erlebe.',
    gameCS2: 'CS2', gameCS2Desc: 'Präzise Mechanik & tiefes Spielverständnis',
    gameMC: 'Minecraft', gameMCDesc: 'Spieler, Entwickler & Server-Admin',
    gameRoblox: 'Roblox', gameRobloxDesc: 'Plattform für Spieleentwicklung',
    gameRacing: 'F1 23 / Forza', gameRacingDesc: 'Motorsport-Leidenschaft',
    gameSH: 'Silent Hill f', gameSHDesc: 'Horror, der echte Angst aufbaut',
    gameITT: 'It Takes Two', gameITTDesc: 'Koop-Meisterwerk — geliebt',
    filmIntro: 'Meine aktuellen Favoriten aus Film und Anime.',
    filmF1: 'F1: The Movie', filmF1Desc: 'Motorsport trifft Kinematografie',
    filmAdol: 'Adolescence', filmAdolDesc: 'Durchdachtes Erzählen',
    filmKpop: 'Kpop Demon Hunters', filmKpopDesc: 'Einzigartiger Genre-Mix',
    filmAOT: 'Attack on Titan', filmAOTDesc: 'Der ultimative Anime — nichts kommt ran',

    contactLabel: 'Kontakt',
    contactTitle: 'Lass uns verbinden',
    contactDesc: 'In Shanghai. Offen für Zusammenarbeit — ob Projekt, Idee oder einfach ein Gespräch.',
    contactGithub: 'GitHub',
    contactDiscord: 'Discord Server',
    contactEmail: 'E-Mail',
    contactSchoolEmail: 'Schul-E-Mail',
    contactPhone: 'Telefon',
    contactWechat: 'WeChat',

    footerText: '© 2026 GA24. Gebaut mit reinem HTML, CSS & JS.',
  },

  zh: {
    navAbout: '关于我',
    navSkills: '技能',
    navProjects: '项目',
    navCommunity: '社区',
    navInterests: '兴趣',
    navContact: '联系',

    heroGreeting: '> 你好，世界',
    heroName: '我是 GA24',
    heroTagline: '创造者。探索者。实干家。',
    heroDesc: '上海德国学校16岁学生，在技术、创意与问题解决的交汇处不断探索。从Minecraft模组到AI驱动的应用——我把想法变成现实。',
    heroBtnProjects: '查看项目',
    heroBtnContact: '联系我',
    heroMetaLangs: '3',
    heroMetaLangsLabel: '种语言',
    heroMetaProjects: '6+',
    heroMetaProjectsLabel: '个项目',
    heroMetaGrade: '10',
    heroMetaGradeLabel: '年级 · DSS',

    aboutLabel: '关于我',
    aboutTitle: '连接文化与代码',
    aboutP1: '我是一名16岁的学生，就读于上海德国学校（DSS）杨浦校区，目前在10年级。在上海的国际学校环境中成长，我能流利地说三种语言——德语、英语和中文——这塑造了我跨文化的思维和协作方式。',
    aboutP2: '我的热情在于技术、创造力和解决问题的交汇点。我是一个积极的建造者和创作者——无论是搭建Minecraft服务器、开发屏幕时间分析应用、领导编程社团，还是用相机捕捉瞬间。',
    aboutPhotoAlt: '你的照片',
    langDE: '德语',
    langEN: '英语',
    langZH: '中文',

    skillsLabel: '技能',
    skillsTitle: '我的工具箱',
    skillsDesc: '实践经验、自学探索与AI辅助开发的融合。',
    skillProgTitle: '编程',
    skillProgDesc: '积极学习JavaScript和Python，用AI辅助开发构建实际项目。通过Fabric API进行Minecraft模组开发获得Java经验。',
    skillSysTitle: '系统与环境',
    skillSysDesc: '日常使用Arch Linux（Omarchy）配合Hyprland Wayland合成器。全面管理Linux系统。',
    skillWorkflowTitle: '工作流程与工具',
    skillWorkflowDesc: '使用Obsidian、LaTeX、Blender和AI辅助开发进行结构化工作流程。',
    skillVibeTitle: 'Vibe Coding',
    skillVibeDesc: '利用AI工具快速实现创意，即使在不熟悉的语言和框架中。理解要建什么比记住怎么建更重要。',

    projectsLabel: '项目',
    projectsTitle: '我构建的作品',
    projectsDesc: '从Minecraft模组到AI应用——每个项目都解决真实问题。',
    projLitematicaTag: 'Minecraft模组',
    projLitematicaTitle: 'Litematica Sync',
    projLitematicaDesc: '基于Fabric的模组，实时同步设计图数据，支持大规模协作建造，包含复杂的服务器端协调逻辑。',
    projSelfObserverTag: 'AI工具',
    projSelfObserverTitle: 'SelfObserver',
    projSelfObserverDesc: 'AI驱动的屏幕时间分析器，提供有意义的数字习惯洞察。完整的Web界面使数据一目了然。',
    projSchemTag: '3D工具',
    projSchemTitle: '.schem转3D转换器',
    projSchemDesc: '将Minecraft .schem文件转换为通用3D格式，方便导入Blender等3D软件。',
    projRobloxTag: '游戏开发',
    projRobloxTitle: 'Roblox游戏体验',
    projRobloxDesc: '构建了多个Roblox游戏，包括自定义扭蛋机制、稀有度等级和视觉效果。',
    projThreeTag: '3D网页',
    projThreeTitle: 'Three.js可视化',
    projThreeDesc: '基于浏览器的交互式3D项目，包括物理桥梁模拟。注重概念和成果。',
    projPresentTag: 'AI内容',
    projPresentTitle: 'AI驱动的演示文稿',
    projPresentDesc: '关于技术主题（如酒精化学）的完整演示文稿——用AI辅助快速制作精美内容。',

    communityLabel: '社区',
    communityTitle: '课堂之外',
    commServerTitle: 'Minecraft服务器',
    commServerDetail: 'mc.dssy.fun',
    commServerDesc: '运营上海德国学校的官方Fabric Minecraft服务器。真实的基础设施，真实的用户——Java配置、模组管理，保持社区稳定运行。',
    commAGTitle: '用Java在Minecraft中编程',
    commAGDetail: '学校工作小组（AG）',
    commAGDesc: '领导一个工作小组，学生通过Minecraft模组开发学习Java编程。教别人是加深自己理解的最好方式。',

    academicsLabel: '学术',
    academicsTitle: '学术概况',
    academicsDesc: '专注STEM学科，用LaTeX制作的全面学习资料，为ZK考试做准备。',
    acadMathTitle: '数学',
    acadMathDesc: '多项式函数、微积分应用、分析性问题解决',
    acadChemTitle: '化学',
    acadChemDesc: '有机化学、酒精代谢、检测反应、实验方法',
    acadBioTitle: '生物',
    acadBioDesc: '遗传学、遗传模型、分子生物学',
    acadPhysTitle: '物理',
    acadPhysDesc: '动力学、圆周运动、应用问题解决',

    interestsLabel: '兴趣',
    interestsTitle: '代码之外',
    tabPhotography: '📷 摄影',
    tabGaming: '🎮 游戏',
    tabFilm: '🎬 电影与动漫',
    tabMusic: '🎵 音乐',
    photoContent: '摄影是我的爱好。我着迷于捕捉瞬间——构图、光线、时机。这是一种创造性的训练，与我工作中更系统化的一面互补，也让我以不同的方式看待世界。',
    musicContent: '目前循环播放：恶魔之子。我的口味倾向于有氛围感和锋利感的音乐。',
    gamingIntro: '游戏是我与互动媒体互动的核心方式。',
    gameCS2: 'CS2', gameCS2Desc: '精准操作与深度游戏理解',
    gameMC: 'Minecraft', gameMCDesc: '玩家、开发者与服务器管理员',
    gameRoblox: 'Roblox', gameRobloxDesc: '游戏开发平台',
    gameRacing: 'F1 23 / Forza', gameRacingDesc: '满足赛车热情',
    gameSH: 'Silent Hill f', gameSHDesc: '营造真实恐惧的恐怖作品',
    gameITT: 'It Takes Two', gameITTDesc: '合作游戏的巅峰——太赞了',
    filmIntro: '我目前最喜欢的电影与动漫。',
    filmF1: 'F1: The Movie', filmF1Desc: '赛车运动与电影摄影的结合',
    filmAdol: 'Adolescence', filmAdolDesc: '深思熟虑的叙事',
    filmKpop: 'Kpop Demon Hunters', filmKpopDesc: '独特的类型融合',
    filmAOT: '进击的巨人', filmAOTDesc: '终极动漫——无可超越',

    contactLabel: '联系方式',
    contactTitle: '让我们联系',
    contactDesc: '坐标上海。开放合作——无论是项目、想法还是简单的交流。',
    contactGithub: 'GitHub',
    contactDiscord: 'Discord服务器',
    contactEmail: '个人邮箱',
    contactSchoolEmail: '学校邮箱',
    contactPhone: '电话',
    contactWechat: '微信',

    footerText: '© 2026 GA24。用纯HTML、CSS和JS构建。',
  }
};


// ===== Language Switcher =====
const langOrder = ['en', 'de', 'zh'];
const langLabels = { en: 'EN', de: 'DE', zh: '中' };

function getCurrentLang() {
  return localStorage.getItem('portfolio-lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('portfolio-lang', lang);
  applyTranslations(lang);
  document.documentElement.setAttribute('lang', lang);
  updateLangButton(lang);
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Handle placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Handle alt attributes
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (t[key] !== undefined) {
      el.setAttribute('alt', t[key]);
    }
  });
}

function updateLangButton(lang) {
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = langLabels[lang];
}

function cycleLang() {
  const current = getCurrentLang();
  const idx = langOrder.indexOf(current);
  const next = langOrder[(idx + 1) % langOrder.length];
  setLang(next);
}


// ===== Theme Toggle =====
function getCurrentTheme() {
  return localStorage.getItem('portfolio-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
  updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const current = getCurrentTheme();
  setTheme(current === 'dark' ? 'light' : 'dark');
}


// ===== Scroll Reveal =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


// ===== Active Nav Link =====
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => observer.observe(section));
}


// ===== Mobile Nav =====
function initMobileNav() {
  const hamburger = document.getElementById('navHamburger');
  const links = document.getElementById('navLinks');

  if (hamburger && links) {
    function closeMobileNav() {
      links.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    function toggleMobileNav() {
      const isOpen = links.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    hamburger.addEventListener('click', toggleMobileNav);

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMobileNav);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !links.contains(e.target)) {
        closeMobileNav();
      }
    });

    // Close on scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (links.classList.contains('open')) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(closeMobileNav, 150);
      }
    }, { passive: true });
  }
}


// ===== Interest Tabs =====
function initInterestTabs() {
  const tabs = document.querySelectorAll('.interests-tab');
  const panels = document.querySelectorAll('.interests-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
}


// ===== Photo Gallery & Lightbox =====
function initGallery() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const galleryItems = document.querySelectorAll('.photo-gallery-item');

  if (!lightbox || galleryItems.length === 0) return;

  const images = Array.from(galleryItems).map(item => item.querySelector('img').src);
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showImage(index) {
    currentIndex = ((index % images.length) + images.length) % images.length;
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.95)';
    setTimeout(() => {
      lightboxImg.src = images[currentIndex];
      lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
      lightboxImg.style.opacity = '1';
      lightboxImg.style.transform = 'scale(1)';
    }, 150);
  }

  // Click gallery items to open
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      openLightbox(parseInt(item.dataset.index, 10));
    });
  });

  // Controls
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', () => showImage(currentIndex - 1));
  lightboxNext.addEventListener('click', () => showImage(currentIndex + 1));

  // Click backdrop to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) showImage(currentIndex + 1);
      else showImage(currentIndex - 1);
    }
  }, { passive: true });
}


// ===== Back to Top =====
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.8) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// ===== Scroll Progress & Navbar State =====
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('scrollProgress');

  function updateScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // Scroll progress bar
    if (progressBar) {
      progressBar.style.width = scrollPercent + '%';
    }

    // Navbar shadow on scroll
    if (navbar) {
      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }

  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateScroll);
  }, { passive: true });

  // Initial state
  updateScroll();
}


// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  setTheme(getCurrentTheme());
  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

  // Language
  const lang = getCurrentLang();
  setLang(lang);
  document.getElementById('langToggle')?.addEventListener('click', cycleLang);

  // Features
  initScrollReveal();
  initActiveNav();
  initMobileNav();
  initInterestTabs();
  initGallery();
  initBackToTop();
  initScrollEffects();
});
