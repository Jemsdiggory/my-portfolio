"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import Link from "next/link"
import Navbar from "../components/Navbar"

// ─── DATA (unchanged) ────────────────────────────────────────────────────────

const gameProjects = [
  {
    title: "Vita-Dulu",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame1.jpg",
    video: "/gameplay/vita-dulu.mp4",
    link: "https://jemsdiggory.itch.io/vita-dulu",
    tags: ["Unity", "3D", "Simulation", "Educational"],
    description: "3D Simulation & Educational game about traditional Indonesian snacks. Responsible for overall gameplay mechanics, NPC AI behaviour, and interactive systems. PC & Mobile.",
    team: "Programmer · Designer",
    type: "SIMULATION GAME",
  },
  {
    title: "Rise Against",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame2.png",
    video: "/gameplay/rise-against.mp4",
    link: "https://jemsdiggory.itch.io/rise-against",
    tags: ["Unity", "2D", "RPG", "Educational"],
    description: "2D RPG about environmental issues. Programmed quest systems, AI & combat, dialogue, and inventory management. PC Platform.",
    team: "Programmer · Designer",
    type: "RPG GAME",
  },
  {
    title: "Let's Explore",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame3.png",
    video: "/gameplay/lets-explore.mp4",
    link: "https://jemsdiggory.itch.io/lets-explore",
    tags: ["Unity", "2D", "Kids", "Educational"],
    description: "2D Educational game on arithmetic and Indonesian tourism for children aged 6–9. Mini-game mechanics, interactive systems & UI/UX. PC Platform.",
    team: "Programmer · Designer",
    type: "EDUCATIONAL GAME",
  },
  {
    title: "Roblorant",
    studio: "Solo Project",
    icon: "/game-icons/icongame4.png",
    video: "/gameplay/roblorant.mp4",
    link: "https://jemsdiggory.itch.io/tugas-game-fps",
    tags: ["Unity", "3D", "FPS", "Assignment"],
    description: "3D FPS game assignment built with Unity. Core gameplay: player movement, shooting mechanics, enemy AI. Web-based.",
    team: "Programmer (Solo Project)",
    type: "FPS GAME",
  },
  {
    title: "Congklak Adventures",
    studio: "Team 7",
    icon: "/game-icons/icongame5.png",
    video: "/gameplay/congklak-adventures.mp4",
    link: "https://dycals.itch.io/congklak-adventures",
    tags: ["Unity", "2D", "Traditional", "Educational"],
    description: "2D Educational game on the traditional Congklak board game. My role: UI Artist & co-Game Designer. PC Platform.",
    team: "UI Artist · Designer",
    type: "TRADITIONAL GAME",
  },
]

const webProjects = [
  {
    slug: "ciptadra",
    title: "Company Website",
    subtitle: "Home Page Redesign for Ciptadra Softindo",
    image: "/web/webCiptadra/webciptadra.png",
    tags: ["Laravel", "PHP", "CSS", "Vanilla JS", "Git"],
    description: "Redesigned and developed the company profile homepage and product pages for Ciptadra Softindo.",
    type: "front-end development",
  },
  {
    slug: "onebox-ciptadra",
    title: "OneBox Portal",
    subtitle: "Redesign of OneBox Portal for Ciptadra Softindo",
    image: "/web/web-onebox/thumbwanbok.png",
    tags: ["Laravel", "PHP", "CSS", "Vanilla JS", "Git"],
    description: "Redesigned and developed the OneBox Portal for Ciptadra Softindo employees.",
    type: "front-end development",
  },
  {
    slug: "portal-nextjs",
    title: "Portal Nextjs Ciptadra",
    subtitle: "Modern Web Application built with Next.js",
    image: "/web/portal-Nextjs/portal-nextjs.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"],
    description: "Modern UI/UX redesign of an existing web platform. Transformed outdated interfaces into a sleek, responsive, and commercial-ready application using Next.js and Tailwind CSS.",
    type: "front-end development",
  },
  {
    slug: "mall-management",
    title: "Landing Page",
    subtitle: "Designed Landing Page for Mall Management System Ciptadra",
    image: "/web/MallManagement/webMallManagement.png",
    tags: ["CodeIgniter", "PHP", "CSS", "Vanilla JS", "Git"],
    description: "Developed a landing page for the Mall Management System of Ciptadra.",
    type: "front-end development",
  },
  {
    slug: "mall-management-system",
    title: "Mall Management System",
    subtitle: "Web-based Mall Management System Ciptadra",
    image: "/web/sistemMall/sistMall1.png",
    tags: ["CodeIgniter", "PHP", "MySQL", "CSS", "Vanilla JS"],
    description: "A web-based mall management system for Ciptadra, featuring tenant management, contract management, and billing generation.",
    type: "FULLSTACK PROJECT",
  },
  {
    slug: "food-check",
    title: "FoodCheck",
    subtitle: "Web App to find food recipes based on available ingredients",
    image: "/web/foodcheck/fc1.png",
    tags: ["Laravel", "MySQL", "React.js", "Vite", "Spoonacular API"],
    description: "A full stack recipe finder web app built with React and Laravel. Users can search recipes based on available ingredients, save favorites, and track search history.",
    type: "FULLSTACK PROJECT",
  },
  {
    slug: "mini-cms",
    title: "Mini CMS",
    subtitle: "Game Blog with CMS Features",
    image: "/web/mini-cms/Mini-cms.png",
    tags: ["PHP", "MySQL", "Vanilla JS", "TinyMCE"],
    description: "A mini CMS for a game blog with full CRUD and WYSIWYG editor.",
    type: "web application",
  },
  {
    slug: "saku-aman-app",
    title: "Saku Aman App",
    subtitle: "A personal expense tracker",
    image: "/web/saku-aman/logo_saku_aman.png",
    tags: ["Flutter", "Dart", "SQLite"],
    description: "A personal finance tracker mobile app built with Flutter.",
    type: "MOBILE APPLICATION",
  },
  {
    slug: "angular-spa",
    title: "Angular SPA",
    subtitle: "Single Page Application built with Angular",
    image: "/web/angular-app/angular-spa.png",
    tags: ["Angular", "TypeScript", "RxJS", "HTTP Client", "Joke API"],
    description: "A Single Page Application built with Angular. This app demonstrates Reactive Forms, Form Validation, Business Logic, and HTTP calls to an external API.",
    type: "WEB APPLICATION",
  },
  {
    slug: "mlbb-vote",
    title: "MLBB Vote",
    subtitle: "Web Login and Hero Filtering UI",
    image: "/web/Mole-vote/mole-vote.png",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "Responsive game-inspired website with hero cards and role-based filtering.",
    type: "front-end development",
  },
]

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const CORE_TAGS = {
  "Next.js": true, React: true, "React.js": true, TypeScript: true,
  Laravel: true, "Tailwind CSS": true, Flutter: true, Angular: true,
  Unity: true, PHP: true, MySQL: true, CodeIgniter: true,
  "Vanilla JS": true, JavaScript: true, Dart: true,
}

function coreTags(tags, max = 4) {
  const core = tags.filter((t) => CORE_TAGS[t])
  const rest = tags.filter((t) => !CORE_TAGS[t])
  return [...core, ...rest].slice(0, max)
}

// ─── SPOTLIGHT HOOK ──────────────────────────────────────────────────────────

function useSpotlight(ref) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMove = useCallback((e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }, [ref, x, y])

  return { x, y, handleMove }
}

// ─── WEB CARD (featured = first card, full-width) ────────────────────────────

function WebCard({ web, index, featured = false }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  const { x, y, handleMove } = useSpotlight(ref)

  const spotlightBg = useTransform(
    [x, y],
    ([lx, ly]) =>
      `radial-gradient(280px circle at ${lx}px ${ly}px, rgba(99,102,241,0.12) 0%, transparent 70%)`
  )

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative" }}
    >
      {/* mouse-reactive spotlight */}
      <motion.div
        style={{
          position: "absolute", inset: 0, borderRadius: "1rem",
          background: spotlightBg, zIndex: 1, pointerEvents: "none",
        }}
      />

      <Link
        href={`/projects/${web.slug}`}
        className="group block rounded-2xl overflow-hidden"
        style={{
          border: `1px solid ${hovered ? "rgba(99,102,241,0.45)" : "var(--border)"}`,
          background: "var(--surface)",
          boxShadow: hovered
            ? "0 0 0 1px rgba(99,102,241,0.2), 0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(99,102,241,0.08)"
            : "0 4px 24px rgba(0,0,0,0.2)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          position: "relative",
        }}
      >
        {/* image area */}
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{ height: featured ? "300px" : "160px" }}
        >
          <img
            src={web.image}
            alt={web.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            style={{
              transform: hovered ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
              filter: hovered ? "brightness(1.05)" : "brightness(0.92)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--surface) 0%, rgba(13,17,23,0.5) 40%, transparent 70%)",
            }}
          />

          <div
            className="absolute top-4 left-4 font-mono tracking-widest"
            style={{
              fontSize: "0.6rem",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              background: "rgba(13,17,23,0.6)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "3px 10px",
              borderRadius: "999px",
            }}
          >
            {web.type}
          </div>

          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              boxShadow: hovered ? "inset 0 0 60px rgba(99,102,241,0.08)" : "none",
              transition: "box-shadow 0.4s ease",
              pointerEvents: "none",
            }}
          />
        </div>

        <div className={featured ? "p-5 flex flex-col" : "p-4 flex flex-col"} style={{ gap: featured ? "10px" : "7px" }}>
          <div>
            <h3
              className="font-display font-bold leading-tight"
              style={{
                fontSize: featured ? "1.35rem" : "0.92rem",
                color: hovered ? "#fff" : "var(--text)",
                transition: "color 0.3s ease",
                marginBottom: "2px",
              }}
            >
              {web.title}
            </h3>
            <p
              className="font-mono"
              style={{ fontSize: "0.63rem", color: "var(--text-muted)", lineHeight: 1.4 }}
            >
              {web.subtitle}
            </p>
          </div>

          {/* description — only on featured card */}
          {featured && (
            <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
              {web.description}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5">
            {coreTags(web.tags).map((tag) => (
              <span
                key={tag}
                className="font-mono"
                style={{
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.45)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "2px 9px",
                  borderRadius: "999px",
                  letterSpacing: "0.04em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div
            className="flex items-center justify-between"
            style={{ marginTop: "4px" }}
          >
            <div style={{ width: "32px", height: "1px", background: "var(--border)" }} />
            <span
              className="font-mono flex items-center gap-2"
              style={{
                fontSize: "0.72rem",
                color: hovered ? "rgba(139,145,255,1)" : "var(--accent)",
                transition: "color 0.3s ease, gap 0.3s ease",
                letterSpacing: "0.08em",
              }}
            >
              View Project
              <span
                style={{
                  display: "inline-block",
                  transform: hovered ? "translateX(4px)" : "translateX(0)",
                  transition: "transform 0.3s ease",
                }}
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ─── GAME CARD ───────────────────────────────────────────────────────────────

function GameCard({ game, index }) {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [srcLoaded, setSrcLoaded] = useState(false)
  const { x, y, handleMove } = useSpotlight(ref)

  const spotlightBg = useTransform(
    [x, y],
    ([lx, ly]) =>
      `radial-gradient(260px circle at ${lx}px ${ly}px, rgba(99,102,241,0.1) 0%, transparent 70%)`
  )

  const togglePlay = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    if (!srcLoaded) { v.src = game.video; setSrcLoaded(true) }
    if (playing) { v.pause(); setPlaying(false) }
    else { v.play(); setPlaying(true) }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative" }}
    >
      <motion.div
        style={{
          position: "absolute", inset: 0, borderRadius: "1rem",
          background: spotlightBg, zIndex: 1, pointerEvents: "none",
        }}
      />

      <div
        className="rounded-2xl overflow-hidden flex flex-col"
        style={{
          border: `1px solid ${hovered ? "rgba(99,102,241,0.45)" : "var(--border)"}`,
          background: "var(--surface)",
          boxShadow: hovered
            ? "0 0 0 1px rgba(99,102,241,0.2), 0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(99,102,241,0.08)"
            : "0 4px 24px rgba(0,0,0,0.2)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          position: "relative",
        }}
      >
        <div className="relative flex-shrink-0 overflow-hidden" style={{ height: "160px" }}>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop muted playsInline preload="none" poster={game.icon}
            style={{
              transform: hovered ? "scale(1.04)" : "scale(1)",
              filter: hovered ? "brightness(1.05)" : "brightness(0.9)",
              transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1), filter 0.4s ease",
            }}
          />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to top, var(--surface) 0%, rgba(13,17,23,0.5) 40%, transparent 70%)" }} />

          <div
            className="absolute top-4 left-4 font-mono tracking-widest"
            style={{
              fontSize: "0.6rem", color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.25em", textTransform: "uppercase",
              background: "rgba(13,17,23,0.6)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "3px 10px", borderRadius: "999px",
            }}
          >
            {game.type}
          </div>

          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: hovered || !playing ? 1 : 0, transition: "opacity 0.3s ease" }}
          >
            <div
              className="flex items-center justify-center rounded-full border"
              style={{
                width: "44px", height: "44px",
                background: playing ? "rgba(13,17,23,0.7)" : "rgba(99,102,241,0.85)",
                borderColor: playing ? "var(--border)" : "var(--accent)",
                boxShadow: !playing ? "0 0 24px rgba(99,102,241,0.5)" : "none",
                backdropFilter: "blur(8px)",
                transition: "all 0.3s ease",
              }}
            >
              {playing ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="2" y="1" width="4" height="12" rx="1" fill="white"/>
                  <rect x="8" y="1" width="4" height="12" rx="1" fill="white"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 1.5L12 7L3 12.5V1.5Z" fill="white"/>
                </svg>
              )}
            </div>
          </button>

          {playing && (
            <div
              className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-md font-mono"
              style={{
                fontSize: "0.65rem", background: "rgba(13,17,23,0.75)",
                color: "var(--accent2)", border: "1px solid rgba(99,102,241,0.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent2)" }} />
              Playing
            </div>
          )}
        </div>

        <a href={game.link} target="_blank" rel="noopener noreferrer" className="p-4 flex flex-col flex-1">
          <div className="flex items-start gap-3 mb-3">
            <img src={game.icon} alt={game.title} loading="lazy" decoding="async"
              className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
              style={{ border: "1px solid var(--border)" }} />
            <div className="min-w-0">
              <h3
                className="font-display font-bold leading-tight mb-0.5"
                style={{
                  fontSize: "0.92rem",
                  color: hovered ? "#fff" : "var(--text)",
                  transition: "color 0.3s ease",
                }}
              >
                {game.title}
              </h3>
              <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>{game.studio}</p>
            </div>
          </div>

          {/* monochrome tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {coreTags(game.tags, 4).map((tag) => (
              <span key={tag} className="font-mono"
                style={{
                  fontSize: "0.65rem", color: "rgba(255,255,255,0.45)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "2px 9px", borderRadius: "999px",
                }}>
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
            {game.description}
          </p>

          <div className="flex items-center justify-between mt-4">
            <p className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>{game.team}</p>
            <span
              className="font-mono text-xs flex items-center gap-1.5"
              style={{
                color: hovered ? "rgba(139,145,255,1)" : "var(--accent)",
                transition: "color 0.3s ease",
              }}
            >
              itch.io
              <span style={{ display: "inline-block", transform: hovered ? "translateX(3px)" : "translateX(0)", transition: "transform 0.3s ease" }}>→</span>
            </span>
          </div>
        </a>
      </div>
    </motion.div>
  )
}

// ─── TABS ────────────────────────────────────────────────────────────────────

const tabs = [
  { key: "game", label: "Game Projects", count: gameProjects.length },
  { key: "web",  label: "Web Projects",  count: webProjects.length  },
]

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const [active, setActive] = useState("web")

  return (
    <>
      <Navbar />

      {/* background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute rounded-full blur-[120px] opacity-10"
          style={{ width: 500, height: 500, top: "30%", left: "-10%", background: "var(--accent2)" }} />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <main className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 pt-36 pb-24 page-enter">
        <div className="max-w-6xl mx-auto">

          {/* eyebrow */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
            style={{ color: "var(--accent2)" }}
          >
            <span className="inline-block w-8 h-px" style={{ background: "var(--accent2)" }} />
            Creative Works
          </motion.p>

          {/* heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Digital Projects
          </motion.h1>

          {/* tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-14"
          >
            {tabs.map((tab) => {
              const isActive = active === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className="btn-glow font-mono text-sm px-5 py-2.5 rounded-full border transition-all duration-300 flex items-center gap-2"
                  style={{
                    borderColor: isActive ? "var(--accent)" : "var(--border)",
                    color: isActive ? "#fff" : "var(--text-muted)",
                    background: isActive ? "var(--accent)" : "transparent",
                    boxShadow: isActive ? "0 0 20px rgba(99,102,241,0.35)" : "none",
                  }}
                >
                  {tab.label}
                  <span
                    className="font-mono rounded-full px-1.5 py-0.5"
                    style={{
                      fontSize: "0.6rem",
                      background: isActive ? "rgba(255,255,255,0.2)" : "var(--surface2)",
                      color: isActive ? "#fff" : "var(--text-dim)",
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </motion.div>

          {/* content */}
          <AnimatePresence mode="wait">

            {/* ── GAME TAB ── */}
            {active === "game" && (
              <motion.div key="game"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.35 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {gameProjects.map((game, i) => (
                    <GameCard key={game.title} game={game} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── WEB TAB ── */}
            {active === "web" && (
              <motion.div key="web"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.35 }}
              >
                {/* 1 featured (full width) */}
                <div className="mb-5">
                  <WebCard web={webProjects[0]} index={0} featured />
                </div>

                {/* remaining 3-col grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {webProjects.slice(1).map((web, i) => (
                    <WebCard key={web.slug} web={web} index={i + 1} />
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
    </>
  )
}