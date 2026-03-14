"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import {
  FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaYoutube,
  FaGitlab,
} from "react-icons/fa"
import { SiItchdotio } from "react-icons/si"

const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    handle: "/in/jemima05",
    url: "https://linkedin.com/in/jemima05",
    color: "var(--accent)",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    handle: "JemsDiggory",
    url: "https://github.com/JemsDiggory",
    color: "var(--text)",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    handle: "@jeymss00",
    url: "https://instagram.com/jeymss00",
    color: "var(--accent3)",
  },
  {
    icon: SiItchdotio,
    label: "itch.io",
    handle: "jemsdiggory",
    url: "https://jemsdiggory.itch.io",
    color: "var(--accent3)",
  },
  {
    icon: FaDiscord,
    label: "Discord",
    handle: "jems1717",
    url: "https://discord.gg/jems1717",
    color: "var(--accent)",
  },
  {
    icon: FaGitlab,
    label: "Gitlab",
    handle: "@jemimadiggory",
    url: "https://gitlab.com/jemimadiggory",
    color: "var(--text)",
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* ambient */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div
          className="absolute rounded-full blur-[160px] opacity-15"
          style={{ width: 600, height: 600, top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "var(--accent)" }}
        />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <main className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 pt-36 pb-24 page-enter">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
            style={{ color: "var(--accent2)" }}
          >
            <span className="inline-block w-8 h-px" style={{ background: "var(--accent2)" }} />
            Get In Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Let's Build
            <br />
            <span className="shimmer-text">Something.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-display text-lg mb-12 max-w-xl leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Interested in collaborating, discussing projects, or just saying hi?
            I'm always open to new opportunities and conversations.
          </motion.p>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-16"
          >
            <a
              href="mailto:jemsdiggory@gmail.com"
              className="btn-glow inline-flex items-center gap-3 font-mono text-base px-8 py-4 rounded-xl border font-medium"
              style={{
                background: "var(--accent)",
                borderColor: "var(--accent)",
                color: "#fff",
                boxShadow: "0 0 30px rgba(123,108,255,0.35)",
              }}
            >
              <FaEnvelope />
              jemsdiggory@gmail.com
            </a>
          </motion.div>

          {/* Divider */}
          <hr className="hr-accent mb-14" />

          {/* Social grid */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-xs uppercase tracking-widest mb-8"
            style={{ color: "var(--text-dim)" }}
          >
            Find me on
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {socials.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.06 }}
                  className="card-hover flex items-center gap-4 p-4 rounded-xl border"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  <span
                    className="text-xl flex-shrink-0 transition-all duration-300"
                    style={{ color: s.color, filter: `drop-shadow(0 0 6px ${s.color})` }}
                  >
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-sm font-medium truncate" style={{ color: "var(--text)" }}>
                      {s.label}
                    </p>
                    <p className="font-mono text-xs truncate" style={{ color: "var(--text-muted)" }}>
                      {s.handle}
                    </p>
                  </div>
                  <span className="ml-auto font-mono text-xs flex-shrink-0" style={{ color: "var(--text-dim)" }}>
                    →
                  </span>
                </motion.a>
              )
            })}
          </motion.div>

        </div>
      </main>
    </>
  )
}