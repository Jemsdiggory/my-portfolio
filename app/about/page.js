"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import {
  SiJavascript, SiPhp, SiPython,
  SiNetlify, SiVercel, SiNextdotjs, SiReact, SiTailwindcss,
  SiMysql, SiGithub, SiGit,
  SiUnity, SiBlender, SiFigma,
  SiLaravel, SiCanva,
} from "react-icons/si"
import { FaGamepad, FaCode, FaPaintBrush, FaToolbox, FaFileAlt, FaCertificate } from "react-icons/fa"
import { TbBrandCSharp } from "react-icons/tb"
import { MdOutlineDesignServices } from "react-icons/md"

// Curated tech stack - grouped by category
const techCategories = [
  {
    title: "Core Development",
    icon: FaCode,
    items: [
      { icon: TbBrandCSharp, name: "", highlight: true },
      { icon: SiReact, name: "React", highlight: true },
      { icon: SiNextdotjs, name: "Next.js", highlight: true },
      { icon: SiTailwindcss, name: "Tailwind", highlight: true },
      { icon: SiUnity, name: "Unity", highlight: true },
      { icon: SiLaravel, name: "Laravel", highlight: false },
      { icon: SiJavascript, name: "JavaScript", highlight: false },
      { icon: SiPhp, name: "PHP", highlight: false },
      { icon: SiPython, name: "Python", highlight: false },
    ]
  },
  {
    title: "Design Tools",
    icon: MdOutlineDesignServices,
    items: [
      { icon: SiFigma, name: "Figma", highlight: true },
      { icon: SiCanva, name: "Canva", highlight: true },
      { icon: SiBlender, name: "Blender", highlight: false },
    ]
  },
  {
    title: "Dev Tools & Workflow",
    icon: FaToolbox,
    items: [
      { icon: SiGit, name: "Git", highlight: true },
      { icon: SiGithub, name: "GitHub", highlight: true },
      { icon: SiVercel, name: "Vercel", highlight: true },
      { icon: SiMysql, name: "MySQL", highlight: false },
      { icon: SiNetlify, name: "Netlify", highlight: false },
    ]
  }
]

const stats = [
  { label: "Digital Projects", value: "10+", icon: FaCode },
  { label: "Games on Itch.io", value: "4+", icon: FaGamepad },
  { label: "Responsive Web Apps", value: "4+", icon: FaCode },
  { label: "Creative Experience", value: "3+ years", icon: FaPaintBrush },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ambient */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div
          className="absolute rounded-full blur-[140px] opacity-10"
          style={{ width: 500, height: 500, top: "20%", right: "-5%", background: "var(--accent)" }}
        />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <main className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 pt-36 pb-24 page-enter">
        <div className="max-w-6xl mx-auto">

          {/* Page label */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
            style={{ color: "var(--accent2)" }}
          >
            <span className="inline-block w-8 h-px" style={{ background: "var(--accent2)" }} />
            About Me
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold mb-14"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Who Am I?
          </motion.h1>

          {/* ── Top: bio + stats ── */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">

            {/* Left — text (improved, more creative) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="font-display text-lg leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                I'm{" "}
                <span style={{ color: "var(--text)" }} className="font-semibold">Kahlaa Aulia Jemima</span>
                , a <span style={{ color: "var(--accent2)" }}>creative front-end developer</span> and{" "}
                <span style={{ color: "var(--accent2)" }}>interactive technologist</span> passionate about building immersive digital experiences.
              </p>
              <p className="font-display leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                Currently studying Game Technology at{" "}
                <span style={{ color: "var(--accent2)" }}>Politeknik Negeri Media Kreatif Jakarta</span>, 
                I specialize in game programming with Unity — most of my work involves team collaboration where I focus on 
                gameplay mechanics and system architecture.
              </p>
              <p className="font-display leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
                Beyond games, I craft responsive and interactive web interfaces with a strong attention to UI/UX details. 
                My design background helps me create visually engaging experiences that feel both polished and intuitive.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://drive.google.com/drive/folders/1kt9f7LqDxekNFbaxsKN0Zo3FNiLahmDa?usp=drive_link"
                  target="_blank"
                  className="btn-glow font-mono text-sm px-6 py-3 rounded-xl border inline-flex items-center gap-2"
                  style={{ background: "var(--accent)", borderColor: "var(--accent)", color: "#fff", boxShadow: "0 0 20px rgba(123,108,255,0.3)" }}
                >
                  <FaCertificate size={14} />
                  View Certificates
                </a>
                
              </div>
            </motion.div>

            {/* Right — stats (improved with icons and glow) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.07 }}
                    className="relative p-5 rounded-xl border group overflow-hidden"
                    style={{ borderColor: "var(--border)", background: "var(--surface2)" }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    {/* subtle corner gradient glow */}
                    <div 
                      className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
                    />
                    <Icon className="mb-3 opacity-40" size={24} style={{ color: "var(--accent)" }} />
                    <p className="font-display font-extrabold text-3xl mb-1" style={{ color: "var(--accent)" }}>
                      {s.value}
                    </p>
                    <p className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                      {s.label}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          <hr className="hr-accent mb-20" />

          {/* ── Tech Stack (improved: categorized, monochrome, premium) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <p className="font-mono text-xs tracking-[0.25em] uppercase mb-8 flex items-center gap-3" style={{ color: "var(--text-dim)" }}>
              <span className="inline-block w-6 h-px" style={{ background: "var(--text-dim)" }} />
              Tech Stack & Expertise
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {techCategories.map((category, catIdx) => {
                const CategoryIcon = category.icon
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + catIdx * 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <CategoryIcon size={18} style={{ color: "var(--accent2)" }} />
                      <h3 className="font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, idx) => {
                        const Icon = item.icon
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + catIdx * 0.1 + idx * 0.03 }}
                            className="group flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-xs font-medium tracking-wide transition-all duration-300 cursor-default"
                            style={{
                              background: "rgba(255,255,255,0.03)",
                              border: `1px solid ${item.highlight ? "rgba(123,108,255,0.3)" : "rgba(255,255,255,0.06)"}`,
                              color: item.highlight ? "var(--accent)" : "var(--text-muted)",
                              backdropFilter: "blur(8px)",
                            }}
                            whileHover={{ 
                              y: -2,
                              transition: { duration: 0.2 }
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.borderColor = "var(--accent)"
                              e.currentTarget.style.background = "rgba(123,108,255,0.1)"
                              e.currentTarget.style.boxShadow = "0 0 16px rgba(123,108,255,0.2)"
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.borderColor = item.highlight ? "rgba(123,108,255,0.3)" : "rgba(255,255,255,0.06)"
                              e.currentTarget.style.background = "rgba(255,255,255,0.03)"
                              e.currentTarget.style.boxShadow = "none"
                            }}
                          >
                            <Icon size={14} />
                            {item.name}
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <hr className="hr-accent mb-20" />

        </div>
      </main>
    </>
  )
}