"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Navbar from "../components/Navbar"

const gameProjects = [
  {
    title: "Vita-Dulu",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame1.jpg",
    link: "https://jemsdiggory.itch.io/vita-dulu",
    tags: ["Unity", "3D", "Simulation", "Educational"],
    description: "3D Simulation & Educational game about traditional Indonesian snacks. Responsible for overall gameplay mechanics, NPC AI behaviour, and interactive systems. PC & Mobile.",
    team: "Programmer · Designer",
  },
  {
    title: "Rise Against",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame2.png",
    link: "https://jemsdiggory.itch.io/rise-against",
    tags: ["Unity", "2D", "RPG", "Educational"],
    description: "2D RPG about environmental issues. Programmed quest systems, AI & combat, dialogue, and inventory management. PC Platform.",
    team: "Programmer · Designer",
  },
  {
    title: "Let's Explore",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame3.png",
    link: "https://jemsdiggory.itch.io/lets-explore",
    tags: ["Unity", "2D", "Kids", "Educational"],
    description: "2D Educational game on arithmetic and Indonesian tourism for children aged 6–9. Mini-game mechanics, interactive systems & UI/UX. PC Platform.",
    team: "Programmer · Designer",
  },
  {
    title: "Roblorant",
    studio: "Solo Project",
    icon: "/game-icons/icongame4.png",
    link: "https://jemsdiggory.itch.io/tugas-game-fps",
    tags: ["Unity", "3D", "FPS", "Assignment"],
    description: "3D FPS game assignment built with Unity. Core gameplay: player movement, shooting mechanics, enemy AI. Web-based.",
    team: "Programmer (Solo Project)",
  },
  {
    title: "Congklak Adventures",
    studio: "Team 7",
    icon: "/game-icons/icongame5.png",
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
    subtitle: "PT. Ciptadra Softindo",
    image: "/web/webCiptadra/webciptadra.png",
    tags: ["Laravel", "PHP", "CSS", "Vanilla JS"],
    description: "Redesigned and developed the company profile homepage for Ciptadra Softindo.",
  },
  {
    slug: "mall-management",
    title: "Landing Page",
    subtitle: "Mall Management System Ciptadra",
    image: "/web/MallManagement/webMallManagement.png",
    tags: ["CodeIgniter", "PHP", "CSS", "Vanilla JS"],
    description: "Developed a landing page for the Mall Management System of Ciptadra.",
  },
  {
    slug: "mini-cms",
    title: "Mini CMS",
    subtitle: "Game Blog",
    image: "/web/mini-cms/Mini-cms.png",
    tags: ["PHP", "MySQL", "Vanilla JS", "TinyMCE"],
    description: "A mini CMS for a game blog with full CRUD and WYSIWYG editor.",
  },
  {
    slug: "mlbb-vote",
    title: "MLBB Vote",
    subtitle: "Web Login",
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
    CodeIgniter: "var(--accent2)",
    Educational: "var(--accent3)", RPG: "var(--accent3)", FPS: "var(--accent3)",
  }
  return map[tag] || "var(--text-muted)"
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

          {/* header */}
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

          {/* ── Tabs ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-14"
          >
            {tabs.map((tab) => {
              const isActive = active === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className="btn-glow relative font-mono text-sm px-5 py-2.5 rounded-full border transition-all duration-300 flex items-center gap-2"
                  style={{
                    borderColor: isActive ? "var(--accent)" : "var(--border)",
                    color: isActive ? "#fff" : "var(--text-muted)",
                    background: isActive ? "var(--accent)" : "transparent",
                    boxShadow: isActive ? "0 0 20px rgba(99,102,241,0.35)" : "none",
                  }}
                >
                  {tab.label}
                  <span
                    className="font-mono text-xs rounded-full px-1.5 py-0.5"
                    style={{
                      background: isActive ? "rgba(255,255,255,0.2)" : "var(--surface2)",
                      color: isActive ? "#fff" : "var(--text-dim)",
                      fontSize: "0.6rem",
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </motion.div>

          {/* ── Tab Content ── */}
          <AnimatePresence mode="wait">

            {/* GAME TAB */}
            {active === "game" && (
              <motion.div
                key="game"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {gameProjects.map((game, i) => (
                    <motion.a
                      key={game.title}
                      href={game.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="card-hover block p-6 rounded-2xl border"
                      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <img src={game.icon} alt={game.title} loading="lazy" decoding="async"
                          className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                          style={{ border: "1px solid var(--border)" }} />
                        <div className="min-w-0">
                          <h3 className="font-display font-bold text-lg leading-tight mb-0.5"
                            style={{ color: "var(--text)" }}>{game.title}</h3>
                          <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>{game.studio}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {game.tags.map((tag) => (
                          <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded"
                            style={{ color: tagColor(tag), background: `${tagColor(tag)}18`, border: `1px solid ${tagColor(tag)}30` }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                        {game.description}
                      </p>
                      <p className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>{game.team}</p>
                      <div className="flex justify-end mt-4">
                        <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>itch.io →</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* WEB TAB */}
            {active === "web" && (
              <motion.div
                key="web"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35 }}
              >
                
                <div className="grid md:grid-cols-2 gap-6 items-stretch">
                  {webProjects.map((web, i) => (
                    
                    <motion.div
                      key={web.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="h-full"
                    >
                      
                      <Link
                        href={`/projects/${web.slug}`}
                        className="card-hover rounded-2xl border overflow-hidden flex flex-col h-full block"
                        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                      >
                        {/* thumbnail */}
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