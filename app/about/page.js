"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import {
  SiJavascript, SiHtml5, SiPhp, SiPython,
  SiNetlify, SiVercel, SiNextdotjs, SiReact, SiTailwindcss,
  SiMysql, SiGithub, SiGit, SiGitlab,
  SiUnity, SiCanva, SiBlender, SiFigma,
  SiLaravel, SiCodeigniter,
} from "react-icons/si"
import { FaGamepad, FaBolt } from "react-icons/fa"
import { TbBrandCSharp } from "react-icons/tb"

// Each badge: { icon, label, bg, fg }
const techStack = [
  { icon: TbBrandCSharp,  label: "",           bg: "#6a1577", fg: "#fff" },
  { icon: SiJavascript,   label: "JavaScript",   bg: "#f7df1e", fg: "#000" },
  { icon: SiHtml5,        label: "HTML5",        bg: "#e34f26", fg: "#fff" },
  { icon: SiPhp,          label: "PHP",          bg: "#777bb4", fg: "#fff" },
  { icon: SiPython,       label: "Python",       bg: "#3572a5", fg: "#fff" },
  { icon: SiLaravel,      label: "Laravel",      bg: "#ff2d20", fg: "#fff" },
  { icon: SiCodeigniter,  label: "CodeIgniter",  bg: "#ef4223", fg: "#fff" },
  { icon: SiNetlify,      label: "Netlify",      bg: "#00c7b7", fg: "#fff" },
  { icon: SiVercel,       label: "Vercel",       bg: "#000",    fg: "#fff" },
  { icon: SiNextdotjs,    label: "Next.js",      bg: "#111",    fg: "#fff" },
  { icon: SiReact,        label: "React",        bg: "#20232a", fg: "#61dafb" },
  { icon: SiTailwindcss,  label: "Tailwind",     bg: "#0ea5e9", fg: "#fff" },
  { icon: SiMysql,        label: "MySQL",        bg: "#00758f", fg: "#fff" },
  { icon: SiGithub,       label: "GitHub",       bg: "#24292e", fg: "#fff" },
  { icon: SiGit,          label: "Git",          bg: "#f05032", fg: "#fff" },
  { icon: SiGitlab,       label: "GitLab",       bg: "#fc6d26", fg: "#fff" },
  { icon: SiUnity,        label: "Unity",        bg: "#222",    fg: "#fff" },
  { icon: SiCanva,        label: "Canva",        bg: "#00c4cc", fg: "#fff" },
  { icon: SiBlender,      label: "Blender",      bg: "#f5792a", fg: "#fff" },
  { icon: SiFigma,        label: "Figma",        bg: "#a259ff", fg: "#fff" },
]


const stats = [
  { label: "Projects",        value: "8+" },
  { label: "Games on Itch",   value: "5"  },
  { label: "Web Apps",        value: "3+" },
  { label: "Experience",      value: "2+ years" },
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

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="font-display text-lg leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                My name is{" "}
                <span style={{ color: "var(--text)" }} className="font-semibold">Kahlaa Aulia Jemima</span>
                , a Game Technology student at{" "}
                <span style={{ color: "var(--accent2)" }}>Politeknik Negeri Media Kreatif Jakarta</span>.
              </p>
              <p className="font-display leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                Strong focus on game programming with Unity — most projects are team-based where I work as the programmer, building gameplay mechanics and systems.
              </p>
              <p className="font-display leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
                I have experience building websites, mainly focusing on front-end development. Most of my projects involve creating responsive and interactive user interfaces. I also have skills in design, which help me craft visually appealing and user-friendly web experiences.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/cv-jemima.pdf"
                  download
                  className="btn-glow font-mono text-sm px-6 py-3 rounded-xl border font-medium"
                  style={{ background: "var(--accent)", borderColor: "var(--accent)", color: "#fff", boxShadow: "0 0 20px rgba(123,108,255,0.3)" }}
                >
                  Download CV
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1kt9f7LqDxekNFbaxsKN0Zo3FNiLahmDa?usp=drive_link"
                  target="_blank"
                  className="btn-glow font-mono text-sm px-6 py-3 rounded-xl border"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                >
                  View Certificates
                </a>
              </div>
            </motion.div>

            {/* Right — stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.07 }}
                  className="p-5 rounded-xl border"
                  style={{ borderColor: "var(--border)", background: "var(--surface2)" }}
                >
                  <p className="font-display font-extrabold text-3xl mb-1" style={{ color: "var(--accent)" }}>
                    {s.value}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <hr className="hr-accent mb-20" />

          {/* ── Tech Stack badges ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <p className="font-mono text-xs tracking-[0.25em] uppercase mb-8 flex items-center gap-3" style={{ color: "var(--text-dim)" }}>
              <span className="inline-block w-6 h-px" style={{ background: "var(--text-dim)" }} />
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => {
                const Icon = tech.icon
                return (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + i * 0.03 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs font-semibold uppercase tracking-wide select-none"
                    style={{
                      background: tech.bg,
                      color: tech.fg,
                      boxShadow: `0 2px 8px ${tech.bg}55`,
                      border: `1px solid ${tech.bg}`,
                      transition: "box-shadow 0.3s, filter 0.3s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = `0 0 16px ${tech.bg}cc`
                      e.currentTarget.style.filter = "brightness(1.15)"
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = `0 2px 8px ${tech.bg}55`
                      e.currentTarget.style.filter = "brightness(1)"
                    }}
                  >
                    <Icon style={{ fontSize: "0.9rem" }} />
                    {tech.label}
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