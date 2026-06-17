// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for every web project.
// Used by app/projects/page.js (listing) and app/projects/[slug]/page.js
// (case study detail page). Edit content here only — both pages read from
// this file, so nothing needs to be duplicated.
// ─────────────────────────────────────────────────────────────────────────

// Display order controls how projects appear on the listing page.
// Professional work leads, followed by proposal/concept work, then
// academic and personal projects.
export const webProjectOrder = [
  "ciptadra",
  "onebox-ciptadra",
  "portal-nextjs",
  "mall-management",
  "mall-management-system",
  "kemen-lh",
  "puskesal",
  "tni-au-proposal",
  "food-check",
  "mini-cms",
  "saku-aman-app",
  "angular-spa",
  "mlbb-vote",
  "personal-website",
]

export const webProjects = {
  // ── PROFESSIONAL PROJECTS ────────────────────────────────────────────
  "ciptadra": {
    slug: "ciptadra",
    title: "Ciptadra Softindo",
    subtitle: "Corporate Website Modernization",
    type: "Professional Project",
    category: "Front-End Development",
    status: "Live Product",
    year: "2026",
    role: "Web Developer Intern",
    thumbnail: "/thumbnail/webciptadra.svg",
    screenshots: [
      "/web/webCiptadra/fullWebsiteCiptadra.png",
    ],
    isMobile: false,
    description:
      "Collaborated on the redesign of Ciptadra Softindo's corporate website, modernizing the homepage and key product pages to strengthen the company's digital presence and product communication.",
    techStack: [
      { name: "Laravel", role: "Backend framework and Blade templating engine" },
      { name: "PHP", role: "Server-side logic, routing, and data handling" },
      { name: "CSS3", role: "Custom animations, responsive layout, and styling" },
      { name: "Vanilla JS", role: "Interactive UI components and DOM manipulation" },
      { name: "Git", role: "Version control and collaboration" },
      { name: "Gitlab", role: "Code hosting and CI/CD pipelines" },
      { name: "Notion", role: "Documentation and task management" },
    ],
    tags: ["Laravel", "PHP", "CSS", "Vanilla JS"],
    contributions: ["Front-End Development", "Visual Consistency Audit", "Responsive Layout", "Blade Template Development"],
  },

  "onebox-ciptadra": {
    slug: "onebox-ciptadra",
    title: "OneBox Portal",
    subtitle: "Product Website Redesign and Content Strategy",
    type: "Professional Project",
    category: "Front-End Development",
    status: "Live Product",
    year: "2026",
    role: "Web Developer Intern",
    thumbnail: "/thumbnail/webonebox.svg",
    screenshots: [
      "/web/web-onebox/wanbok.png",
    ],
    isMobile: false,
    description:
      "Redesigned the OneBox product website to align with market expectations, restructuring content hierarchy and applying SEO improvements to better communicate the platform's value proposition.",
    techStack: [
      { name: "Laravel", role: "Backend framework and Blade templating engine" },
      { name: "PHP", role: "Server-side logic, routing, and data handling" },
      { name: "CSS3", role: "Layout, component styling, and responsive UI" },
      { name: "Vanilla JS", role: "Interactive UI components and DOM manipulation" },
      { name: "Git", role: "Version control and collaboration" },
      { name: "Gitlab", role: "Code hosting and CI/CD pipelines" },
      { name: "Notion", role: "Documentation and task management" },
    ],
    tags: ["Laravel", "PHP", "CSS", "Vanilla JS", "Git", "Gitlab", "Notion"],
    contributions: ["Content Strategy", "SEO Optimization", "Front-End Development", "UX Improvement"],
  },

  "portal-nextjs": {
    slug: "portal-nextjs",
    title: "Portal Onebox.go.id",
    subtitle: "Smart City Portal Modernization",
    type: "Professional Project",
    category: "Front-End Development",
    status: "Live Product",
    year: "2026",
    role: "Web Developer Intern",
    thumbnail: "/thumbnail/portalnextjs.svg",
    screenshots: [
      "/web/portal-nextjs/portal-nextjs.png",
    ],
    isMobile: false,
    description:
      "Modernized a smart city portal platform using Next.js and TypeScript, transforming a legacy interface into a scalable, presentation-ready product.",
    techStack: [
      { name: "Next.js", role: "Frontend framework for server-side rendered pages" },
      { name: "React", role: "Library for building user interfaces" },
      { name: "TypeScript", role: "Typed superset of JavaScript" },
      { name: "Tailwind CSS", role: "Utility-first CSS framework" },
      { name: "Git", role: "Version control and collaboration" },
      { name: "GitHub", role: "Code hosting and collaboration" },
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git", "GitHub"],
    contributions: ["Front-End Development", "Platform Migration", "Visual Redesign", "Stakeholder Presentation"],
  },

  "mall-management": {
    slug: "mall-management",
    title: "Mall Management Landing Page",
    subtitle: "Product Landing Page for a Mall Management Solution",
    type: "Professional Project",
    category: "Front-End Development",
    status: "Live Product",
    year: "2026",
    role: "Web Developer Intern",
    thumbnail: "/thumbnail/landingpagemall.svg",
    screenshots: [
      "/web/MallManagement/webMallManagement.png",
    ],
    isMobile: false,
    description:
      "Designed a conversion-focused landing page for a mall management solution, with tailored content for mall operators and tenants.",
    techStack: [
      { name: "CodeIgniter", role: "PHP MVC framework for structure and routing" },
      { name: "PHP", role: "Server-side scripting" },
      { name: "MySQL", role: "Relational database for storing data" },
      { name: "CSS3", role: "Responsive layout and component styling" },
      { name: "Vanilla JS", role: "UI interactions and dynamic content" },
      { name: "Git", role: "Version control and collaboration" },
      { name: "Gitlab", role: "Code hosting and CI/CD pipelines" },
    ],
    tags: ["CodeIgniter", "PHP", "MySQL", "CSS", "Vanilla JS"],
    contributions: ["UX Research", "Content Strategy", "Front-End Development", "Competitive Analysis"],
  },

  "mall-management-system": {
    slug: "mall-management-system",
    title: "Mall Management System",
    subtitle: "Enterprise Web Platform Enhancement",
    type: "Professional Project",
    category: "Full-Stack Development",
    status: "Internal Project",
    year: "2026",
    role: "Web Developer Intern",
    thumbnail: "/thumbnail/sistmall.svg",
    screenshots: [
      "/web/sistemMall/sistMall1.png",
    ],
    isMobile: false,
    description:
      "Modernized the interface and workflows of an enterprise mall management platform, supporting tenant administration and operational management.",
    techStack: [
      { name: "CodeIgniter", role: "PHP MVC framework for structure and routing" },
      { name: "PHP", role: "Server-side scripting" },
      { name: "MySQL", role: "Relational database for storing data" },
      { name: "CSS3", role: "Responsive layout and component styling" },
      { name: "Vanilla JS", role: "UI interactions and dynamic content" },
      { name: "Git", role: "Version control and collaboration" },
      { name: "Gitlab", role: "Code hosting and CI/CD pipelines" },
    ],
    tags: ["CodeIgniter", "PHP", "MySQL", "CSS", "Vanilla JS"],
    contributions: ["Front-End Development", "Workflow Improvement", "Database Analysis", "Backend Support"],
  },

  // ── PROPOSAL / CONCEPT PROJECTS ──────────────────────────────────────
  "kemen-lh": {
    slug: "kemen-lh",
    title: "Kemen LH Website Modernization",
    subtitle: "Environmental Agency Website Modernization Proposal",
    type: "Proposal Project",
    category: "UX Research & Prototyping",
    status: "Concept & Prototype",
    year: "2026",
    role: "UI/UX Designer and Frontend Developer (Freelance)",
    thumbnail: null,
    screenshots: [],
    isMobile: false,
    description:
      "Conducted website audits, regional benchmarking, and user research to support a government website modernization initiative, delivered through high-fidelity HTML prototypes.",
    techStack: [
      { name: "HTML5", role: "Structure for high-fidelity prototypes" },
      { name: "CSS3", role: "Visual styling and responsive layout" },
      { name: "JavaScript", role: "Prototype interactivity" },
      { name: "UX Research", role: "Benchmarking and requirement analysis" },
    ],
    tags: ["UX Research", "Benchmarking", "Government", "HTML Prototype"],
    contributions: ["UX Research", "Competitive Benchmarking", "User Requirement Analysis", "HTML Prototype Development", "Design Proposal Documentation"],
  },

  "puskesal": {
    slug: "puskesal",
    title: "Puskesal Health Ecosystem",
    subtitle: "Healthcare Platform Design System and Prototype",
    type: "Proposal Project",
    category: "UX Research & Prototyping",
    status: "Concept & Prototype",
    year: "2026",
    role: "UI/UX Designer and Frontend Developer (Freelance)",
    thumbnail: null,
    screenshots: [],
    isMobile: false,
    description:
      "Designed a scalable design system and high-fidelity prototypes for a multi-platform healthcare ecosystem, supporting proposal validation and stakeholder review.",
    techStack: [
      { name: "HTML5", role: "Prototype structure" },
      { name: "CSS3", role: "Design system styling" },
      { name: "JavaScript", role: "Interactive prototype elements" },
      { name: "Design System", role: "Reusable UI standards across platforms" },
    ],
    tags: ["Design System", "Healthcare", "UX Research", "HTML Prototype"],
    contributions: ["UX Research", "Information Architecture", "Design System", "HTML Prototype Development", "Stakeholder Presentation"],
  },

  "tni-au-proposal": {
    slug: "tni-au-proposal",
    title: "TNI AU Website Modernization",
    subtitle: "Defense Organization Website Modernization Proposal",
    type: "Proposal Project",
    category: "UX Research & Prototyping",
    status: "Proposal Stage",
    year: "2026",
    role: "UI/UX Designer and Frontend Developer (Freelance)",
    thumbnail: null,
    screenshots: [],
    isMobile: false,
    description:
      "Developed a UI/UX modernization proposal for a defense institution website, backed by international benchmark research and high-fidelity prototypes.",
    techStack: [
      { name: "PHP", role: "Existing website being redesigned" },
      { name: "HTML5", role: "Prototype structure" },
      { name: "CSS3", role: "Visual direction implementation" },
      { name: "JavaScript", role: "Prototype interactivity" },
    ],
    tags: ["PHP", "Benchmarking", "Design Strategy", "HTML Prototype"],
    contributions: ["Competitive Benchmarking", "Design Strategy", "HTML Prototype Development", "Content Accessibility Improvement"],
  },

  // ── ACADEMIC PROJECTS ─────────────────────────────────────────────────
  "food-check": {
    slug: "food-check",
    title: "FoodCheck",
    subtitle: "Recipe Discovery Platform Based on Available Ingredients",
    type: "Academic Project",
    category: "Full-Stack Development",
    status: "Concept & Prototype",
    year: "2026",
    role: "Solo Project",
    thumbnail: "/thumbnail/foodcheck.svg",
    screenshots: [
      "/web/foodcheck/fc1.png",
      "/web/foodcheck/fc2.png",
      "/web/foodcheck/fc3.png",
    ],
    isMobile: false,
    description:
      "Built a full-stack recipe discovery platform that helps users find recipes based on available ingredients, save favorites, and manage search history.",
    techStack: [
      { name: "Laravel", role: "Backend framework and Blade templating engine" },
      { name: "MySQL", role: "Relational database for storing data" },
      { name: "React.js", role: "Frontend library for building user interfaces" },
      { name: "Vite", role: "Build tool for fast development" },
      { name: "Git", role: "Version control and collaboration" },
      { name: "GitHub", role: "Code hosting and collaboration" },
      { name: "Spoonacular API", role: "Recipe data provider" },
    ],
    tags: ["Laravel", "MySQL", "React.js", "Vite", "Git", "GitHub", "Spoonacular API"],
    contributions: ["Full-Stack Development", "API Integration", "Database Design", "Frontend Development"],
  },

  "mini-cms": {
    slug: "mini-cms",
    title: "Mini CMS",
    subtitle: "Lightweight Content Management System for a Gaming Blog",
    type: "Academic Project",
    category: "Web Application",
    status: "Concept & Prototype",
    year: "2026",
    role: "Solo Project",
    thumbnail: "/thumbnail/minicms.svg",
    screenshots: [
      "/web/mini-cms/homeBlog.png",
      "/web/mini-cms/dashboardAdmin.png",
      "/web/mini-cms/Mini-cms.png",
      "/web/mini-cms/admin-add-post.png",
      "/web/mini-cms/admin-users.png",
      "/web/mini-cms/admin-categories.png",
    ],
    isMobile: false,
    description:
      "Developed a lightweight content management system for a gaming blog, featuring article management, rich-text editing, and complete CRUD functionality.",
    techStack: [
      { name: "PHP", role: "Server-side scripting, routing, and session management" },
      { name: "MySQL", role: "Relational database for storing posts and user data" },
      { name: "TinyMCE", role: "WYSIWYG rich text editor for content creation" },
      { name: "Vanilla JS", role: "AJAX calls, UI interactions, and dynamic elements" },
      { name: "CSS3", role: "Responsive admin panel and front-end styling" },
      { name: "Notion", role: "Documentation and project planning" },
    ],
    tags: ["PHP", "MySQL", "Vanilla JS", "TinyMCE"],
    contributions: ["Backend Development", "Admin Panel Design", "Database Design", "Front-End Development"],
  },

  "saku-aman-app": {
    slug: "saku-aman-app",
    title: "Saku Aman",
    subtitle: "Personal Expense Tracker App",
    type: "Academic Project",
    category: "Mobile Application",
    status: "Concept & Prototype",
    year: "2026",
    role: "Solo Project",
    thumbnail: "/thumbnail/sakuaman.svg",
    screenshots: [
      "/web/saku-aman/saku-aman-app1.png",
      "/web/saku-aman/saku-aman-app2.png",
      "/web/saku-aman/saku-aman-app3.png",
      "/web/saku-aman/saku-aman-app4.png",
      "/web/saku-aman/saku-aman-app5.png",
    ],
    isMobile: true,
    description:
      "Created a mobile expense tracking application that helps users record transactions, monitor spending habits, and manage personal finances efficiently.",
    techStack: [
      { name: "Flutter", role: "Cross-platform mobile UI framework" },
      { name: "Dart", role: "Programming language for all app logic" },
      { name: "SQLite", role: "Local database for storing transactions" },
    ],
    tags: ["Flutter", "Dart", "SQLite"],
    contributions: ["Mobile UI Design", "Flutter Development", "Local Database Design"],
  },

  "angular-spa": {
    slug: "angular-spa",
    title: "Angular SPA",
    subtitle: "Single Page Application Built with Angular",
    type: "Academic Project",
    category: "Web Application",
    status: "Concept & Prototype",
    year: "2026",
    role: "Front-End Practice Project",
    thumbnail: "/thumbnail/antarikstech.svg",
    screenshots: [
      "/web/angular-app/angular-spa.png",
      "/web/angular-app/angular-spa2.png",
    ],
    isMobile: false,
    description:
      "Built a Single Page Application using Angular to demonstrate reactive forms, validation workflows, state handling, and external API integration.",
    techStack: [
      { name: "Angular", role: "Frontend framework" },
      { name: "TypeScript", role: "Programming language" },
      { name: "RxJS", role: "Reactive programming library" },
      { name: "HTTP Client", role: "For making HTTP requests" },
      { name: "Git", role: "Version control" },
      { name: "GitHub", role: "Code hosting" },
      { name: "Joke API", role: "External API for joke data" },
    ],
    tags: ["Angular", "TypeScript", "RxJS", "HTTP Client", "Git", "GitHub", "Joke API"],
    contributions: ["Front-End Development", "Form Validation", "API Integration"],
  },

  "mlbb-vote": {
    slug: "mlbb-vote",
    title: "MLBB Vote",
    subtitle: "Web Login and Hero Filtering UI",
    type: "Personal Project",
    category: "Front-End Development",
    status: "Concept & Prototype",
    year: "2026",
    role: "Front-End Practice Project",
    thumbnail: "/thumbnail/molevote.svg",
    screenshots: [
      "/web/Mole-vote/mole-vote.png",
      "/web/Mole-vote/molevote-login.png",
    ],
    isMobile: false,
    description:
      "Developed a responsive game-inspired web interface featuring hero exploration, role-based filtering, and interactive user experiences inspired by MOBA game design.",
    techStack: [
      { name: "HTML5", role: "Semantic structure and markup" },
      { name: "CSS3", role: "Animations, grid layout, and responsive design" },
      { name: "JavaScript", role: "Hero filtering, login flow simulation, and DOM interactions" },
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    contributions: ["Front-End Development", "Interactive UI Design", "DOM Manipulation"],
  },

  // ── PERSONAL PROJECTS ─────────────────────────────────────────────────
  "personal-website": {
    slug: "personal-website",
    title: "Personal Website",
    subtitle: "Interactive Personal Portfolio Built with Next.js",
    type: "Personal Project",
    category: "Front-End Development",
    status: "Live Product",
    year: "2026",
    role: "Front-End Project for Cretivox Internship Experience",
    thumbnail: "/thumbnail/webpersonal.svg",
    screenshots: [
      "/web/personal-website/personal-website-Copy.png",
    ],
    isMobile: false,
    description:
      "Interactive portfolio built with Next.js, featuring smooth animations, custom interactions, and a fully responsive design.",
    techStack: [
      { name: "Next.js", role: "Frontend framework for server-side rendered applications" },
      { name: "React", role: "Library for building user interfaces" },
      { name: "TypeScript", role: "Typed superset of JavaScript" },
      { name: "Tailwind CSS", role: "Utility-first CSS framework" },
      { name: "GSAP", role: "Animation library for smooth transitions" },
      { name: "Git", role: "Version control and collaboration" },
      { name: "GitHub", role: "Code hosting and collaboration" },
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Git", "GitHub"],
    contributions: ["Front-End Development", "UI/UX Design", "Animation"],
  },
}

// ── GAME PROJECTS (unchanged content, kept here for a single source of truth) ──
export const gameProjects = [
  {
    title: "Vita-Dulu",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame1.jpg",
    video: "/gameplay/vita-dulu.mp4",
    link: "https://jemsdiggory.itch.io/vita-dulu",
    tags: ["Unity", "3D", "Simulation", "Educational"],
    description:
      "3D Simulation and educational game about traditional Indonesian snacks. Responsible for overall gameplay mechanics, NPC AI behaviour, and interactive systems. PC and mobile.",
    team: "Programmer · Designer",
    type: "SIMULATION GAME",
    category: "Game Development",
  },
  {
    title: "Rise Against",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame2.png",
    video: "/gameplay/rise-against.mp4",
    link: "https://jemsdiggory.itch.io/rise-against",
    tags: ["Unity", "2D", "RPG", "Educational"],
    description:
      "2D RPG about environmental issues. Programmed quest systems, AI and combat, dialogue, and inventory management. PC platform.",
    team: "Programmer · Designer",
    type: "RPG GAME",
    category: "Game Development",
  },
  {
    title: "Let's Explore",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame3.png",
    video: "/gameplay/lets-explore.mp4",
    link: "https://jemsdiggory.itch.io/lets-explore",
    tags: ["Unity", "2D", "Kids", "Educational"],
    description:
      "2D educational game on arithmetic and Indonesian tourism for children aged 6-9. Mini-game mechanics, interactive systems, and UI/UX. PC platform.",
    team: "Programmer · Designer",
    type: "EDUCATIONAL GAME",
    category: "Game Development",
  },
  {
    title: "Roblorant",
    studio: "Solo Project",
    icon: "/game-icons/icongame4.png",
    video: "/gameplay/roblorant.mp4",
    link: "https://jemsdiggory.itch.io/tugas-game-fps",
    tags: ["Unity", "3D", "FPS", "Assignment"],
    description:
      "3D FPS game assignment built with Unity. Core gameplay: player movement, shooting mechanics, enemy AI. Web-based.",
    team: "Programmer (Solo Project)",
    type: "FPS GAME",
    category: "Game Development",
  },
  {
    title: "Congklak Adventures",
    studio: "Team 7",
    icon: "/game-icons/icongame5.png",
    video: "/gameplay/congklak-adventures.mp4",
    link: "https://dycals.itch.io/congklak-adventures",
    tags: ["Unity", "2D", "Traditional", "Educational"],
    description:
      "2D educational game on the traditional Congklak board game. My role: UI artist and co-game designer. PC platform.",
    team: "UI Artist · Designer",
    type: "TRADITIONAL GAME",
    category: "Game Development",
  },
]

// Helper used by the listing page and the detail page navigation footer.
export function getOrderedWebProjects() {
  return webProjectOrder
    .map((slug) => webProjects[slug])
    .filter(Boolean)
}

export function getAdjacentProjects(slug) {
  const order = webProjectOrder
  const index = order.indexOf(slug)
  if (index === -1) return { prev: null, next: null }
  const prevSlug = index > 0 ? order[index - 1] : null
  const nextSlug = index < order.length - 1 ? order[index + 1] : null
  return {
    prev: prevSlug ? webProjects[prevSlug] : null,
    next: nextSlug ? webProjects[nextSlug] : null,
  }
}
