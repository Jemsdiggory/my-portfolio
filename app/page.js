"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "./components/Navbar"
import SocialMarquee from "./components/SocialMarquee"

const roles = ["Game Developer", "Web Developer", "Programmer"]

export default function Page() {
  return (
    <>
      <Navbar />

      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute rounded-full blur-[120px] opacity-20"
          style={{
            width: "600px",
            height: "600px",
            top: "-10%",
            left: "-10%",
            background: "radial-gradient(circle, #7b6cff, transparent)",
          }}
        />
        <div
          className="absolute rounded-full blur-[100px] opacity-15"
          style={{
            width: "400px",
            height: "400px",
            bottom: "10%",
            right: "-5%",
            background: "radial-gradient(circle, #3dffd1, transparent)",
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>

      <main
        className="min-h-screen flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 lg:px-32"
        style={{ paddingTop: "10vh", paddingBottom: "8vh" }}
      >
        <div className="max-w-4xl w-full">

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
            style={{ color: "var(--accent2)" }}
          >
            <span
              className="inline-block w-8 h-px"
              style={{ background: "var(--accent2)", boxShadow: "0 0 6px var(--accent2)" }}
            />
            Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold leading-[1.0] mb-3"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              color: "var(--text)",
              letterSpacing: "-0.03em",
            }}
          >
            Kahlaa
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold leading-[1.0] mb-8"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              letterSpacing: "-0.03em",
            }}
          >
            <span className="shimmer-text">Aulia Jemima</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {roles.map((role, i) => (
              <span
                key={role}
                className="font-mono text-sm px-4 py-1.5 rounded-full border"
                style={{
                  color: i === 0 ? "var(--accent)" : i === 1 ? "var(--accent2)" : "var(--text-muted)",
                  borderColor: i === 0 ? "rgba(123,108,255,0.3)" : i === 1 ? "rgba(61,255,209,0.3)" : "rgba(255,107,138,0.3)",
                  background: i === 0 ? "rgba(123,108,255,0.06)" : i === 1 ? "rgba(61,255,209,0.06)" : "rgba(255,107,138,0.06)",
                }}
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-display text-base sm:text-lg mb-10 max-w-xl leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Game Developer & Web Developer — crafting interactive experiences through games, interfaces, and everything in between.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="btn-glow font-mono text-sm px-6 py-3 rounded-xl border font-medium"
              style={{
                background: "var(--accent)",
                borderColor: "var(--accent)",
                color: "#fff",
                boxShadow: "0 0 20px rgba(123,108,255,0.3)",
              }}
            >
              View Projects
            </Link>

            <Link
              href="/experience"
              className="btn-glow font-mono text-sm px-6 py-3 rounded-xl border"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
            >
              Experience
            </Link>

            <Link
              href="/contact"
              className="btn-glow font-mono text-sm px-6 py-3 rounded-xl border"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
            >
              Contact
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap gap-8 mt-12"
          >
            {[
              { label: "Projects",      value: "10+" },
              { label: "Games on Itch", value: "4+"  },
              { label: "Web Apps",      value: "4+" },
              { label: "Experience",    value: "3+ yrs" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-display font-extrabold text-3xl" style={{ color: "var(--accent)" }}>
                  {s.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-full mt-20"
        >
          <hr className="hr-accent mb-8" />
          <SocialMarquee />
        </motion.div>
      </main>
    </>
  )
}