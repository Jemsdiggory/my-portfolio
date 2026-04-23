"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Navbar from "../components/Navbar"
import { image } from "framer-motion/client"

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
  },
]

const webProjects = [
  {
    slug: "ciptadra",
    title: "Company Website",
    subtitle: "Home Page Redesign for Ciptadra Softindo",
    image: "/web/webCiptadra/webciptadra.png",
    tags: ["Laravel", "PHP", "CSS", "Vanilla JS", "Git", "Gitlab", "Notion"],
    description: "Redesigned and developed the company profile homepage for Ciptadra Softindo.",
  },
  {
    slug: "mall-management",
    title: "Landing Page",
    subtitle: "Designed Landing Page for Mall Management System Ciptadra",
    image: "/web/MallManagement/webMallManagement.png",
    tags: ["CodeIgniter", "PHP", "CSS", "Vanilla JS", "Spread Sheet", "Git", "Gitlab"],
    description: "Developed a landing page for the Mall Management System of Ciptadra.",
  },
  {
    slug: "mall-management-system",
    title: "Mall Management System",
    subtitle: "Web-based Mall Management System Ciptadra",
    image: "/web/sistemMall/sistMall1.png",
    tags: ["CodeIgniter", "PHP", "MySQL", "CSS", "Vanilla JS", "Git", "Gitlab"],
    description: "A web-based mall management system for Ciptadra, featuring tenant management, contract management, and billing generation.",
  },
  {
    slug: "food-check",
    title: "FoodCheck",
    subtitle: "Web App to find food recipes based on available ingredients",
    image: "/web/foodcheck/fc1.png",
    tags: ["Laravel", "MySQL", "React.js", "Vite",  "Git", "GitHub", "Spoonacular API"],
    description: "A full stack recipe finder web app built with React and Laravel. Users can search recipes based on available ingredients, save favorites, and track search history. Integrated with Spoonacular API for real-time recipe data.",
  },
  {
    slug: "mini-cms",
    title: "Mini CMS",
    subtitle: "Game Blog with CMS Features",
    image: "/web/mini-cms/Mini-cms.png",
    tags: ["PHP", "MySQL", "Vanilla JS", "TinyMCE", "Notion"],
    description: "A mini CMS for a game blog with full CRUD and WYSIWYG editor.",
  },
  {
    slug: "saku-aman-app",
    title: "Saku Aman App",
    subtitle: "A personal expense tracker",
    image: "/web/saku-aman/logo_saku_aman.png",
    tags: ["Flutter", "Dart", "SQLite"],
    description: "A personal finance tracker mobile app built with Flutter.",
  },
  {
    slug: "angular-spa",
    title: "Angular SPA",
    subtitle: "Single Page Application built with Angular",
    image: "/web/angular-app/angular-spa.png",
    tags: ["Angular", "TypeScript", "RxJS", "HTTP Client", "Git", "GitHub", "Joke API"],
    description: "A Single Page Application built with Angular. This app demonstrates Reactive Forms, Form Validation, Business Logic, and HTTP calls to an external API.",
  },
  {
    slug: "mlbb-vote",
    title: "MLBB Vote",
    subtitle: "Web Login and Hero Filtering UI",
    image: "/web/Mole-vote/mole-vote.png",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "Responsive game-inspired website with hero cards and role-based filtering.",
  },
]

const tagColor = (tag) => {
  const map = {
    Unity: "var(--accent)", "3D": "var(--accent)", "2D": "var(--accent)",
    HTML: "var(--accent2)", CSS: "var(--accent2)", JavaScript: "var(--accent2)",
    PHP: "var(--accent2)", MySQL: "var(--accent2)", "Vanilla JS": "var(--accent2)",
    MYSQL: "var(--accent2)", TinyMCE: "var(--accent2)", Laravel: "var(--accent2)",
    CodeIgniter: "var(--accent2)", Flutter: "var(--accent2)", Dart: "var(--accent2)",
    SQLite: "var(--accent2)", "Spread Sheet": "var(--accent2)", Notion: "var(--accent2)",
    Git: "var(--accent2)", GitHub: "var(--accent2)", Gitlab: "var(--accent2)",
      "Spoonacular API": "var(--accent2)", "React.js": "var(--accent2)", Vite: "var(--accent2)",
      "Joke API": "var(--accent2)", Angular: "var(--accent2)", TypeScript: "var(--accent2)", RxJS: "var(--accent2)", "HTTP Client": "var(--accent2)",
    Educational: "var(--accent3)", RPG: "var(--accent3)", FPS: "var(--accent3)",
  }
  return map[tag] || "var(--text-muted)"
}

// game card
function GameCard({ game, index }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [srcLoaded, setSrcLoaded] = useState(false)

  const togglePlay = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return

    // lazy load: set src pertama kali user klik play
    if (!srcLoaded) {
      v.src = game.video
      setSrcLoaded(true)
    }

    if (playing) {
      v.pause()
      setPlaying(false)
    } else {
      v.play()
      setPlaying(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="card-hover rounded-2xl border overflow-hidden flex flex-col"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* media area */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: "200px" }}>
        {/* video */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="none"
          poster={game.icon}
        />

        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, var(--surface) 0%, transparent 60%)" }}
        />

        {/* play/pause button */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: hovered || !playing ? 1 : 0 }}
        >
          <div
            className="flex items-center justify-center rounded-full border transition-all duration-300"
            style={{
              width: "44px",
              height: "44px",
              background: playing ? "rgba(13,17,23,0.7)" : "rgba(99,102,241,0.85)",
              borderColor: playing ? "var(--border)" : "var(--accent)",
              boxShadow: !playing ? "0 0 20px rgba(99,102,241,0.5)" : "none",
              backdropFilter: "blur(8px)",
            }}
          >
            {playing ? (
              /* pause icon */
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="1" width="4" height="12" rx="1" fill="white"/>
                <rect x="8" y="1" width="4" height="12" rx="1" fill="white"/>
              </svg>
            ) : (
              /* play icon */
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 1.5L12 7L3 12.5V1.5Z" fill="white"/>
              </svg>
            )}
          </div>
        </button>

        {/* playing indicator */}
        {playing && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-md font-mono text-xs"
            style={{
              background: "rgba(13,17,23,0.75)",
              color: "var(--accent2)",
              border: "1px solid rgba(99,102,241,0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent2)" }} />
            Playing
          </div>
        )}
      </div>

      {/* card body — links to itch.io */}
      <a
        href={game.link}
        target="_blank"
        rel="noopener noreferrer"
        className="p-5 flex flex-col flex-1"
      >
        <div className="flex items-start gap-3 mb-3">
          <img
            src={game.icon}
            alt={game.title}
            loading="lazy"
            decoding="async"
            className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
            style={{ border: "1px solid var(--border)" }}
          />
          <div className="min-w-0">
            <h3 className="font-display font-bold text-base leading-tight mb-0.5" style={{ color: "var(--text)" }}>
              {game.title}
            </h3>
            <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>{game.studio}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {game.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded"
              style={{ color: tagColor(tag), background: `${tagColor(tag)}18`, border: `1px solid ${tagColor(tag)}30` }}>
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
          {game.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <p className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>{game.team}</p>
          <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>itch.io →</span>
        </div>
      </a>
    </motion.div>
  )
}

const tabs = [
  { key: "game", label: "Game Projects", count: gameProjects.length },
  { key: "web",  label: "Web Projects",  count: webProjects.length  },
]

export default function ProjectsPage() {
  const [active, setActive] = useState("web")

  return (
    <>
      <Navbar />

      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute rounded-full blur-[120px] opacity-10"
          style={{ width: 500, height: 500, top: "30%", left: "-10%", background: "var(--accent2)" }} />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <main className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 pt-36 pb-24 page-enter">
        <div className="max-w-6xl mx-auto">

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
            style={{ color: "var(--accent2)" }}>
            <span className="inline-block w-8 h-px" style={{ background: "var(--accent2)" }} />
            Selected Work
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}>
            Projects
          </motion.h1>

          {/* Tabs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-14">
            {tabs.map((tab) => {
              const isActive = active === tab.key
              return (
                <button key={tab.key} onClick={() => setActive(tab.key)}
                  className="btn-glow font-mono text-sm px-5 py-2.5 rounded-full border transition-all duration-300 flex items-center gap-2"
                  style={{
                    borderColor: isActive ? "var(--accent)" : "var(--border)",
                    color: isActive ? "#fff" : "var(--text-muted)",
                    background: isActive ? "var(--accent)" : "transparent",
                    boxShadow: isActive ? "0 0 20px rgba(99,102,241,0.35)" : "none",
                  }}>
                  {tab.label}
                  <span className="font-mono rounded-full px-1.5 py-0.5"
                    style={{
                      fontSize: "0.6rem",
                      background: isActive ? "rgba(255,255,255,0.2)" : "var(--surface2)",
                      color: isActive ? "#fff" : "var(--text-dim)",
                    }}>
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">

            {active === "game" && (
              <motion.div key="game"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.35 }}>
                <div className="grid md:grid-cols-2 gap-6">
                  {gameProjects.map((game, i) => (
                    <GameCard key={game.title} game={game} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {active === "web" && (
              <motion.div key="web"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.35 }}>
                <div className="grid md:grid-cols-2 gap-6 items-stretch">
                  {webProjects.map((web, i) => (
                    <motion.div key={web.slug}
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="h-full">
                      <Link href={`/projects/${web.slug}`}
                        className="card-hover rounded-2xl border overflow-hidden flex flex-col h-full block"
                        style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                        <div className="relative overflow-hidden flex-shrink-0" style={{ height: "200px" }}>
                          <img src={web.image} alt={web.title} loading="lazy" decoding="async"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                          <div className="absolute inset-0"
                            style={{ background: "linear-gradient(to top, var(--surface) 0%, transparent 60%)" }} />
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {web.tags.map((tag) => (
                              <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded"
                                style={{ color: tagColor(tag), background: `${tagColor(tag)}18`, border: `1px solid ${tagColor(tag)}30` }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="font-display font-bold text-lg mb-0.5" style={{ color: "var(--text)" }}>
                            {web.title}
                          </h3>
                          <p className="font-mono text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                            {web.subtitle}
                          </p>
                          <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                            {web.description}
                          </p>
                          <div className="mt-5 font-mono text-xs flex items-center justify-between"
                            style={{ color: "var(--accent)" }}>
                            <span>View Project</span>
                            <span>→</span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
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
