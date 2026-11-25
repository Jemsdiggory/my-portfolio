
export const CATEGORY_COLORS = {
  "Front-End Development": "var(--ui-color-e5a987ac)",
  "Full-Stack Development": "var(--ui-color-56499bd4)",
  "Mobile Application": "var(--ui-color-e6fa112b)",
  "Web Application": "var(--ui-color-028273b8)",
  "Game Development": "var(--ui-color-96140ef3)",
  "UX Research & Prototyping": "var(--ui-color-5c52094b)",
  "UI/UX & Front-End Development": "var(--ui-color-dd89b315)",
}

export const CATEGORY_TEXT = {
  "Front-End Development": "var(--ui-color-555a7f09)",
  "Full-Stack Development": "var(--ui-color-f3e14b50)",
  "Mobile Application": "var(--ui-color-9201d2ac)",
  "Web Application": "var(--ui-color-d8fce768)",
  "Game Development": "var(--ui-color-3ed3f3c6)",
  "UX Research & Prototyping": "var(--ui-color-ac9b7d65)",
  "UI/UX & Front-End Development": "var(--ui-color-295b1163)",
}

export const TYPE_COLORS = {
  "Professional Project": "var(--ui-color-b2029b69)",
  "Proposal Project": "var(--ui-color-06ed2f6b)",
  "Concept Project": "var(--ui-color-2a3ebb5f)",
  "Personal Project": "var(--ui-color-4a58fc33)",
}

export const TYPE_TEXT = {
  "Professional Project": "var(--ui-color-91f8091b)",
  "Proposal Project": "var(--ui-color-5ebffc49)",
  "Concept Project": "var(--ui-color-eb3f0340)",
 
  "Personal Project": "var(--ui-color-68edea28)",
}

export const STATUS_COLORS = {
  "Live Product": "var(--ui-color-6cf2b411)",
  "Internal Project": "var(--ui-color-e3a4ca84)",
  "Proposal Stage": "var(--ui-color-5c52094b)",
  "Concept & Prototype": "var(--ui-color-1dcab385)",
}

export const STATUS_TEXT = {
  "Live Product": "var(--ui-color-b64cdb8a)",
  "Internal Project": "var(--ui-color-187a0c83)",
  "Proposal Stage": "var(--ui-color-ac9b7d65)",
  "Concept & Prototype": "var(--ui-color-5e5a447f)",
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

export function withAlpha(color, hexAlpha) {
  const alpha = (parseInt(hexAlpha, 16) / 255) * 100
  return `color-mix(in srgb, ${color} ${alpha}%, transparent)`
}
