"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"

const gameProjects = [
  {
    title: "Vita-Dulu",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame1.jpg",
    link: "https://jemsdiggory.itch.io/vita-dulu",
    tags: ["Unity", "3D", "Simulation", "Educational"],
    description:
      "3D Simulation & Educational game about traditional Indonesian snacks. Responsible for overall gameplay mechanics, NPC AI behaviour, and interactive systems. PC & Mobile.",
    team: "Programmer · Designer",
  },
  {
    title: "Rise Against",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame2.png",
    link: "https://jemsdiggory.itch.io/rise-against",
    tags: ["Unity", "2D", "RPG", "Educational"],
    description:
      "2D RPG about environmental issues. Programmed quest systems, AI & combat, dialogue, and inventory management. PC Platform.",
    team: "Programmer · Designer",
  },
  {
    title: "Let's Explore",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame3.png",
    link: "https://jemsdiggory.itch.io/lets-explore",
    tags: ["Unity", "2D", "Kids", "Educational"],
    description:
      "2D Educational game on arithmetic and Indonesian tourism for children aged 6–9. Mini-game mechanics, interactive systems & UI/UX. PC Platform.",
    team: "Programmer · Designer",
  },
  {
    title: "Roblorant",
    studio: "Solo Project",
    icon: "/game-icons/icongame4.png",
    link: "https://jemsdiggory.itch.io/tugas-game-fps",
    tags: ["Unity", "3D", "FPS", "Assignment"],
    description:
      "3D FPS game assignment built with Unity. Core gameplay: player movement, shooting mechanics, enemy AI. Web-based.",
    team: "Programmer (Solo Project)",
  },
  {
    title: "Congklak Adventures",
    studio: "Team 7",
    icon: "/game-icons/icongame5.png",
    link: "https://dycals.itch.io/congklak-adventures",
    tags: ["Unity", "2D", "Traditional", "Educational"],
    description:
      "2D Educational game on the traditional Congklak board game. My role: UI Artist & co-Game Designer. PC Platform.",
    team: "UI Artist · Designer",
  },
]

const webProjects = [
  {
    title: "Company Website - PT. Ciptadra Softindo",
    image: "/web/webciptadra.png",
    tags: ["Laravel", "PHP", "CSS", "Vanilla JS"],
    description:
      "Redesigned and developed the company profile homepage for Ciptadra Softindo, including UI/UX improvements, custom CSS animations, interactive components, and multilingual content updates using Laravel Blade.",
    source: "",

  },
  {
    title: "Mini CMS - Game Blog",
    image: "/web/Mini-cms(2).png",
    tags: ["PHP", "MYSQL", "Vanilla JS", "TinyMCE"],
    description:
      "A mini CMS for a game blog, featuring a custom admin panel with CRUD operations, WYSIWYG editor, and responsive design.",
    source: "https://github.com/Jemsdiggory/Mini-cms",

  },
  {
    title: "MLBB Vote Web Login",
    image: "/web/web1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "Responsive game-inspired website with hero cards, role-based filtering, login flow, and dynamic UI animations.",
    source: "https://github.com/Jemsdiggory/Molevote-Dummy",

  },
]

const tagColor = (tag) => {
  const map = {
    Unity: "var(--accent)", "3D": "var(--accent)", "2D": "var(--accent)",
    HTML: "var(--accent2)", CSS: "var(--accent2)", JavaScript: "var(--accent2)",
    PHP: "var(--accent2)", MYSQL: "var(--accent2)", "Vanilla JS": "var(--accent2)",
    TinyMCE: "var(--accent2)", Laravel: "var(--accent2)",
    Educational: "var(--accent3)", RPG: "var(--accent3)", FPS: "var(--accent3)",
  }
  return map[tag] || "var(--text-muted)"
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <div className="fixed inset-0 pointer-events-none -z-10">
        <div
          className="absolute rounded-full blur-[120px] opacity-10"
          style={{ width: 500, height: 500, top: "30%", left: "-10%", background: "var(--accent2)" }}
        />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <main className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 pt-36 pb-24 page-enter">
        <div className="max-w-6xl mx-auto">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
            style={{ color: "var(--accent2)" }}
          >
            <span className="inline-block w-8 h-px" style={{ background: "var(--accent2)" }} />
            Selected Work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold mb-20"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Projects
          </motion.h1>

          {/* Game section */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--text-dim)" }}>01</span>
              <h2 className="font-display font-bold text-2xl" style={{ color: "var(--text)" }}>Game Projects</h2>
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {gameProjects.map((game, i) => (
                <motion.a
                  key={game.title}
                  href={game.link}
                  target="_blank"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  className="card-hover block p-6 rounded-2xl border"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={game.icon}
                      alt={game.title}
                      loading="lazy"
                      decoding="async"
                      className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                      style={{ border: "1px solid var(--border)" }}
                    />
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-lg leading-tight mb-0.5" style={{ color: "var(--text)" }}>
                        {game.title}
                      </h3>
                      <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>{game.studio}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-0.5 rounded"
                        style={{
                          color: tagColor(tag),
                          background: `${tagColor(tag)}18`,
                          border: `1px solid ${tagColor(tag)}30`,
                        }}
                      >
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
          </section>

          {/* Web section */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--text-dim)" }}>02</span>
              <h2 className="font-display font-bold text-2xl" style={{ color: "var(--text)" }}>Web Projects</h2>
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {webProjects.map((web, i) => (
                <motion.div
                  key={web.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  className="card-hover rounded-2xl border overflow-hidden flex flex-col"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  {/* thumbnail */}
                  <div className="relative overflow-hidden flex-shrink-0" style={{ height: "160px" }}>
                    <img
                      src={web.image}
                      alt={web.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, var(--surface) 0%, transparent 50%)" }}
                    />
                  </div>

                  {/* content — flex-col so button stays at bottom */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {web.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2 py-0.5 rounded"
                          style={{
                            color: tagColor(tag),
                            background: `${tagColor(tag)}18`,
                            border: `1px solid ${tagColor(tag)}30`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--text)" }}>
                      {web.title}
                    </h3>

                    {/* flex-1 pushes button to bottom */}
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                      {web.description}
                    </p>

                    {/* source button — only shown if link exists */}
                    {web.source && (
                      <div className="mt-5">
                        <a
                          href={web.source}
                          target="_blank"
                          className="btn-glow block w-full text-center font-mono text-xs py-2 rounded-lg border"
                          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                        >
                          Source
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  )
}