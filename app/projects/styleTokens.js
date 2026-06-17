
export const CATEGORY_COLORS = {
  "Front-End Development": "rgba(99,102,241,0.15)",
  "Full-Stack Development": "rgba(34,197,94,0.12)",
  "Mobile Application": "rgba(251,146,60,0.12)",
  "Web Application": "rgba(168,85,247,0.12)",
  "Game Development": "rgba(236,72,153,0.12)",
  "UX Research & Prototyping": "rgba(245,158,11,0.14)",
}

export const CATEGORY_TEXT = {
  "Front-End Development": "rgba(165,180,252,0.9)",
  "Full-Stack Development": "rgba(134,239,172,0.9)",
  "Mobile Application": "rgba(253,186,116,0.9)",
  "Web Application": "rgba(216,180,254,0.9)",
  "Game Development": "rgba(249,168,212,0.9)",
  "UX Research & Prototyping": "rgba(252,211,77,0.95)",
}

export const TYPE_COLORS = {
  "Professional Project": "rgba(99,102,241,0.16)",
  "Proposal Project": "rgba(245,158,11,0.16)",
  "Concept Project": "rgba(168,85,247,0.16)",
  "Personal Project": "rgba(251,191,36,0.14)",
}

export const TYPE_TEXT = {
  "Professional Project": "rgba(165,180,252,1)",
  "Proposal Project": "rgba(252,211,77,1)",
  "Concept Project": "rgba(216,180,254,1)",
 
  "Personal Project": "rgba(253,230,138,1)",
}

export const STATUS_COLORS = {
  "Live Product": "rgba(34,197,94,0.14)",
  "Internal Project": "rgba(99,102,241,0.14)",
  "Proposal Stage": "rgba(245,158,11,0.14)",
  "Concept & Prototype": "rgba(168,85,247,0.14)",
}

export const STATUS_TEXT = {
  "Live Product": "rgba(134,239,172,0.95)",
  "Internal Project": "rgba(165,180,252,0.95)",
  "Proposal Stage": "rgba(252,211,77,0.95)",
  "Concept & Prototype": "rgba(216,180,254,0.95)",
}

const CORE_TAGS = {
  "Next.js": true, React: true, "React.js": true, TypeScript: true,
  Laravel: true, "Tailwind CSS": true, Flutter: true, Angular: true,
  Unity: true, PHP: true, MySQL: true, CodeIgniter: true,
  "Vanilla JS": true, JavaScript: true, Dart: true,
  GSAP: true, GitHub: true,
  "UX Research": true, Benchmarking: true, "Design System": true,
  "HTML Prototype": true, Government: true, Healthcare: true,
  "Design Strategy": true,
}

export function coreTags(tags, max = 4) {
  const core = tags.filter((t) => CORE_TAGS[t])
  const rest = tags.filter((t) => !CORE_TAGS[t])
  return [...core, ...rest].slice(0, max)
}

const TAG_ACCENT = {
  HTML: "var(--accent2)", CSS: "var(--accent2)", JavaScript: "var(--accent2)",
  PHP: "var(--accent2)", MySQL: "var(--accent2)", "Vanilla JS": "var(--accent2)",
  TinyMCE: "var(--accent2)", Laravel: "var(--accent2)", CodeIgniter: "var(--accent2)",
  "React.js": "var(--accent2)", Vite: "var(--accent2)", Git: "var(--accent2)",
  GitHub: "var(--accent2)", Gitlab: "var(--accent2)", "Spoonacular API": "var(--accent2)",
  Flutter: "var(--accent2)", Dart: "var(--accent2)", SQLite: "var(--accent2)",
  Notion: "var(--accent2)", "Joke API": "var(--accent2)", Angular: "var(--accent2)",
  TypeScript: "var(--accent2)", RxJS: "var(--accent2)", "HTTP Client": "var(--accent2)",
  "Next.js": "var(--accent2)", "Tailwind CSS": "var(--accent2)", React: "var(--accent2)",
  GSAP: "var(--accent2)",
  "UX Research": "var(--accent2)", Benchmarking: "var(--accent2)",
  "Design System": "var(--accent2)", "HTML Prototype": "var(--accent2)",
  Government: "var(--accent2)", Healthcare: "var(--accent2)",
  "Design Strategy": "var(--accent2)",
}

export function tagColor(tag) {
  return TAG_ACCENT[tag] || "var(--text-muted)"
}
