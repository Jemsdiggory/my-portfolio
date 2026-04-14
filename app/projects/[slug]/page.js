"use client"

import { use, useState, useRef, useEffect } from "react"
import { notFound } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Navbar from "../../components/Navbar"

/* ── ScrollPreview ─────────────────────────────────────
   Satu gambar full-height yang auto-scroll dari atas ke bawah
   di dalam container fixed height. User bisa hover untuk pause,
   atau drag scroll manual.
───────────────────────────────────────────────────── */
function ScrollPreview({ src, alt }) {
  const containerRef = useRef(null)
  const animRef = useRef(null)
  const posRef = useRef(0)
  const pausedRef = useRef(false)
  const [ready, setReady] = useState(false)
  const [maxScroll, setMaxScroll] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const update = () => {
      setMaxScroll(el.scrollHeight - el.clientHeight)
      setReady(true)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // auto-scroll loop
  useEffect(() => {
    const el = containerRef.current
    if (!el || !ready) return

    const speed = 0.6 // px per frame

    const tick = () => {
      if (!pausedRef.current) {
        const max = el.scrollHeight - el.clientHeight
        if (max <= 0) { animRef.current = requestAnimationFrame(tick); return }

        posRef.current += speed
        if (posRef.current >= max) posRef.current = 0
        el.scrollTop = posRef.current
        setProgress(posRef.current / max)
      }
      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [ready])

  const handleScroll = () => {
    const el = containerRef.current
    if (!el) return
    const max = el.scrollHeight - el.clientHeight
    if (max > 0) {
      posRef.current = el.scrollTop
      setProgress(el.scrollTop / max)
    }
  }

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border"
      style={{ borderColor: "var(--border)" }}>

      {/* scrollable container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
        className="w-full overflow-y-scroll"
        style={{
          height: "520px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`.hide-scroll::-webkit-scrollbar{display:none}`}</style>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-auto block hide-scroll"
          onLoad={() => {
            const el = containerRef.current
            if (el) setMaxScroll(el.scrollHeight - el.clientHeight)
            setReady(true)
          }}
        />
      </div>

      {/* progress bar — right side */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1 rounded-full overflow-hidden"
        style={{ background: "var(--border)" }}
      >
        <div
          className="w-full rounded-full transition-none"
          style={{
            height: `${progress * 100}%`,
            background: "var(--accent)",
            boxShadow: "0 0 8px var(--accent)",
          }}
        />
      </div>

      {/* hover hint overlay — only shown on load */}
      {ready && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs px-3 py-1.5 rounded-lg pointer-events-none"
          style={{
            background: "rgba(13,17,23,0.8)",
            color: "var(--text-muted)",
            border: "1px solid var(--border)",
            backdropFilter: "blur(8px)",
            opacity: 0.8,
          }}
        >
          hover to pause · scroll to control
        </div>
      )}
    </div>
  )
}

/* ── Carousel (multiple images) ────────────────────── */
function Carousel({ images, title }) {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)
  const isFullPage = images[current]?.endsWith?.(".png") || images[current]?.endsWith?.(".jpg")

  // single image → use ScrollPreview
  if (images.length === 1) {
    return <ScrollPreview src={images[0]} alt={title} />
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9", background: "#000" }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <button onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-lg border font-mono text-base transition-all duration-300"
          style={{ background: "rgba(13,17,23,0.75)", borderColor: "var(--border)", color: "var(--text-muted)", backdropFilter: "blur(8px)" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text)" }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)" }}
        >‹</button>
        <button onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-lg border font-mono text-base transition-all duration-300"
          style={{ background: "rgba(13,17,23,0.75)", borderColor: "var(--border)", color: "var(--text-muted)", backdropFilter: "blur(8px)" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text)" }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)" }}
        >›</button>

        <div className="absolute top-3 right-3 font-mono text-xs px-2.5 py-1 rounded-lg"
          style={{ background: "rgba(13,17,23,0.75)", color: "var(--text-muted)", backdropFilter: "blur(8px)", border: "1px solid var(--border)" }}>
          {current + 1} / {images.length}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 py-3"
        style={{ borderTop: "1px solid var(--border)", background: "var(--surface2)" }}>
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "20px" : "5px", height: "5px",
              background: i === current ? "var(--accent)" : "var(--border)",
              boxShadow: i === current ? "0 0 8px var(--accent)" : "none",
            }} />
        ))}
      </div>

      {images.length >= 3 && (
        <div className="flex gap-2 p-3 overflow-x-auto"
          style={{ borderTop: "1px solid var(--border)", background: "var(--surface2)" }}>
          {images.map((src, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="flex-shrink-0 overflow-hidden rounded-lg border transition-all duration-300"
              style={{ width: "72px", height: "48px", borderColor: i === current ? "var(--accent)" : "var(--border)", opacity: i === current ? 1 : 0.5 }}>
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── MobileCarousel — portrait screenshots, manual scroll only ── */
function MobileCarousel({ images, title }) {
  const [current, setCurrent] = useState(0)
  const containerRef = useRef(null)

  // reset scroll ke atas setiap ganti gambar
  useEffect(() => {
    const el = containerRef.current
    if (el) el.scrollTop = 0
  }, [current])

  return (
    <div className="flex flex-col gap-6">
      {/* main area: phone frame + thumbnail strip */}
      <div className="flex gap-6 items-start">

        {/* phone mockup */}
        <div className="flex-shrink-0 relative" style={{ width: "260px" }}>
          {/* frame */}
          <div
            className="relative rounded-[2rem] overflow-hidden border-2"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface2)",
              boxShadow: "0 0 40px rgba(99,102,241,0.1)",
            }}
          >
            {/* notch */}
            <div
              className="absolute top-3 left-1/2 -translate-x-1/2 z-10 rounded-full"
              style={{ width: "60px", height: "10px", background: "var(--bg)" }}
            />

            {/* scrollable image inside phone */}
            <div
              ref={containerRef}
              style={{
                height: "480px",
                overflowY: "scroll",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>{`.phone-scroll::-webkit-scrollbar{display:none}`}</style>
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={images[current]}
                  alt={`${title} screenshot ${current + 1}`}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-auto block phone-scroll"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* hint */}
          <p className="font-mono text-xs text-center mt-3" style={{ color: "var(--text-dim)" }}>
            scroll to explore
          </p>
        </div>

        {/* thumbnail strip — vertical */}
        <div className="flex flex-col gap-3 overflow-y-auto" style={{ maxHeight: "520px" }}>
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="flex-shrink-0 overflow-hidden rounded-xl border transition-all duration-300"
              style={{
                width: "72px",
                height: "130px",
                borderColor: i === current ? "var(--accent)" : "var(--border)",
                boxShadow: i === current ? "0 0 10px rgba(99,102,241,0.4)" : "none",
                opacity: i === current ? 1 : 0.45,
              }}
            >
              <img src={src} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {/* dot + counter row */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "16px" : "4px",
                height: "4px",
                background: i === current ? "var(--accent)" : "var(--border)",
                boxShadow: i === current ? "0 0 8px var(--accent)" : "none",
              }}
            />
          ))}
        </div>
        <span className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>
          {current + 1} / {images.length}
        </span>
      </div>
    </div>
  )
}

//  web project data lives here 
const webProjects = {
  "saku-aman-app": {
    title: "Saku Aman",
    subtitle: "Personal Expense Tracker App",
    year: "2026",
    role: "Solo Project",
    description: "A personal expense tracker mobile app built with Flutter. Saku Aman helps users monitor daily spending, categorize transactions, and visualize financial habits through clean charts and summaries. Designed with a simple and intuitive UI to make budgeting accessible for everyday users.",
    screenshots: [
      "/web/saku-aman/saku-aman-app1.png",
      "/web/saku-aman/saku-aman-app2.png",
      "/web/saku-aman/saku-aman-app3.png",
      "/web/saku-aman/saku-aman-app4.png",
      "/web/saku-aman/saku-aman-app5.png",
    ],
    techStack: [
      { name: "Flutter",  role: "Cross-platform mobile UI framework" },
      { name: "Dart",     role: "Programming language for all app logic" },
      { name: "SQLite",   role: "Local database for storing transactions" },
    ],
    source: "",
    tags: ["Flutter", "Dart", "SQLite"],
    isMobile: true,
  },
  "ciptadra": {
    title: "Company Website",
    subtitle: "PT. Ciptadra Softindo",
    year: "2026",
    role: "Web Developer Intern",
    description: "Redesigned and developed the company profile homepage for Ciptadra Softindo, including UI/UX improvements, custom CSS animations, interactive components, and multilingual content updates using Laravel Blade. The goal was to modernize the visual identity of the company's web presence while maintaining clarity and professionalism.",
    screenshots: [
      "/web/webCiptadra/fullWebsiteCiptadra.png",
      
    ],
    techStack: [
      { name: "Laravel",    role: "Backend framework & Blade templating engine" },
      { name: "PHP",        role: "Server-side logic, routing, and data handling" },
      { name: "CSS3",       role: "Custom animations, responsive layout, and styling" },
      { name: "Vanilla JS", role: "Interactive UI components and DOM manipulation" },
      { name: "Spread Sheet", role: "Sprint Planning by Project Manager" },
      { name: "Notion", role:  "Documentation and Task Management",}
    ],
    source: "",
    tags: ["Laravel", "PHP", "CSS", "Vanilla JS"],
  },
  "mall-management": {
    title: "Landing Page",
    subtitle: "Mall Management System Ciptadra",
    year: "2026",
    role: "Web Developer Intern",
    description: "Developed a landing page for the Mall Management System product of Ciptadra Softindo. The page focuses on clean responsive design and clear information to support the company's.",
    screenshots: [
      "/web/MallManagement/FullWebMallManagement.png",
      
    ],
    techStack: [
      { name: "CodeIgniter", role: "PHP MVC framework for structure and routing" },
      { name: "PHP",         role: "Server-side scripting" },
      { name: "CSS3",        role: "Responsive layout and component styling" },
      { name: "Vanilla JS",  role: "UI interactions and dynamic content" },
      { name: "Spread Sheet", role: "Sprint Planning by Project Manager" },
      { name: "Notion", role:  "Documentation and Task Management" },
    ],
    source: "",
    tags: ["CodeIgniter", "PHP", "CSS", "Vanilla JS"],
  },
  "mini-cms": {
    title: "Mini CMS",
    subtitle: "Game Blog",
    year: "2026",
    role: "Solo Project",
    description: "A mini content management system built for a game blog. Features a custom admin panel with full CRUD operations, a WYSIWYG rich text editor powered by TinyMCE, user authentication, and a clean responsive front-end. Built as a learning project to understand full-stack PHP development.",
    screenshots: [
      "/web/mini-cms/homeBlog.png",
      "/web/mini-cms/dashboardAdmin.png",
      "/web/mini-cms/Mini-cms.png",
      "/web/mini-cms/admin-add-post.png",
      "/web/mini-cms/admin-users.png",
      "/web/mini-cms/admin-categories.png",
      
    ],
    techStack: [
      { name: "PHP",        role: "Server-side scripting, routing, and session management" },
      { name: "MySQL",      role: "Relational database for storing posts and user data" },
      { name: "TinyMCE",   role: "WYSIWYG rich text editor for content creation" },
      { name: "Vanilla JS", role: "AJAX calls, UI interactions, and dynamic elements" },
      { name: "CSS3",       role: "Responsive admin panel and front-end styling" },
      { name: "Notion", role:  "Documentation and Project Planning"},
    ],
    source: "https://github.com/Jemsdiggory/Mini-cms",
    tags: ["PHP", "MySQL", "Vanilla JS", "TinyMCE"],
  },
  "mlbb-vote": {
    title: "MLBB Vote",
    subtitle: "Web Login",
    year: "2026",
    role: "Front-End Practice Project",
    description: "A responsive game-inspired website with interactive hero cards, role-based filtering, a simulated login flow, and dynamic UI animations. Built as a front-end practice project to sharpen CSS animation, DOM manipulation, and responsive layout skills using vanilla web technologies.",
    screenshots: [
      "/web/Mole-vote/mole-vote.png",
      "/web/Mole-vote/molevote-login.png",
      
    ],
    techStack: [
      { name: "HTML5",      role: "Semantic structure and markup" },
      { name: "CSS3",       role: "Animations, grid layout, and responsive design" },
      { name: "JavaScript", role: "Hero filtering, login flow simulation, and DOM interactions" },
    ],
    source: "https://github.com/Jemsdiggory/Molevote-Dummy",
    tags: ["HTML", "CSS", "JavaScript"],
  },
}

const tagColor = (tag) => {
  const map = {
    HTML: "var(--accent2)", CSS: "var(--accent2)", JavaScript: "var(--accent2)",
    PHP: "var(--accent2)", MySQL: "var(--accent2)", "Vanilla JS": "var(--accent2)",
    TinyMCE: "var(--accent2)", Laravel: "var(--accent2)", CodeIgniter: "var(--accent2)",
  }
  return map[tag] || "var(--text-muted)"
}

export default function WebProjectDetail({ params }) {
  const { slug } = use(params)
  const project = webProjects[slug]
  if (!project) notFound()

  return (
    <>
      <Navbar />

      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute rounded-full blur-[120px] opacity-8"
          style={{ width: 500, height: 500, top: "20%", right: "-5%", background: "var(--accent)" }} />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <main className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 pt-36 pb-24 page-enter">
        <div className="max-w-5xl mx-auto">

          {/* back */}
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase mb-12 link-glow"
              style={{ color: "var(--text-muted)" }}
            >
              ← Back to Projects
            </Link>
          </motion.div>

          {/* header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }} className="mb-16">

            <div className="flex flex-wrap items-center gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded"
                  style={{ color: tagColor(tag), background: `${tagColor(tag)}18`, border: `1px solid ${tagColor(tag)}30` }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display font-extrabold leading-tight mb-2"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em", color: "var(--text)" }}>
              {project.title}
            </h1>
            <p className="font-display text-xl mb-6" style={{ color: "var(--text-muted)" }}>
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-6 font-mono text-xs" style={{ color: "var(--text-dim)" }}>
              <span><span style={{ color: "var(--text-muted)" }}>Year</span> — {project.year}</span>
              <span><span style={{ color: "var(--text-muted)" }}>Role</span> — {project.role}</span>
            </div>
          </motion.div>

          {/* screenshots — carousel */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }} className="mb-20">

            <p className="font-mono text-xs tracking-widest uppercase mb-6 flex items-center gap-3"
              style={{ color: "var(--text-dim)" }}>
              <span className="inline-block w-6 h-px" style={{ background: "var(--text-dim)" }} />
              Screenshots
            </p>

            {project.isMobile
              ? <MobileCarousel images={project.screenshots} title={project.title} />
              : <Carousel images={project.screenshots} title={project.title} />
            }
          </motion.div>

          {/* two-column: description + tech stack */}
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* description */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}>
              <p className="font-mono text-xs tracking-widest uppercase mb-6 flex items-center gap-3"
                style={{ color: "var(--text-dim)" }}>
                <span className="inline-block w-6 h-px" style={{ background: "var(--text-dim)" }} />
                About the Project
              </p>
              <p className="font-display text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {project.description}
              </p>

              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow inline-block mt-8 font-mono text-xs px-6 py-3 rounded-xl border"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                >
                  View Source →
                </a>
              )}
            </motion.div>

            {/* tech stack timeline */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}>
              <p className="font-mono text-xs tracking-widest uppercase mb-6 flex items-center gap-3"
                style={{ color: "var(--text-dim)" }}>
                <span className="inline-block w-6 h-px" style={{ background: "var(--text-dim)" }} />
                Tech Stack
              </p>

              {/* vertical timeline */}
              <div className="relative pl-6" style={{ borderLeft: "1px solid var(--border)" }}>
                {project.techStack.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="relative pb-7 last:pb-0"
                  >
                    {/* dot */}
                    <div
                      className="absolute -left-[1.55rem] top-[0.3rem] w-3 h-3 rounded-full flex items-center justify-center"
                      style={{ background: "var(--surface2)", border: "1px solid var(--accent)", boxShadow: "0 0 8px rgba(99,102,241,0.4)" }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                    </div>

                    {/* number */}
                    <span className="font-mono text-xs mb-1 block" style={{ color: "var(--text-dim)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <p className="font-mono font-medium text-sm mb-1" style={{ color: "var(--text)" }}>
                      {t.name}
                    </p>
                    <p className="font-mono text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {t.role}
                    </p>

                    {/* connector line accent */}
                    {i < project.techStack.length - 1 && (
                      <div className="absolute -left-[1.32rem] top-6 bottom-0 w-px"
                        style={{ background: "linear-gradient(to bottom, var(--accent) 0%, var(--border) 100%)", opacity: 0.3 }} />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </main>
    </>
  )
}