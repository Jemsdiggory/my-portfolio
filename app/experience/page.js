"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import { experience as experiences } from "../data/experience"

const typeStyle = {
  Internship:   { bg: "var(--ui-color-7d3d9265)",  border: "var(--ui-color-8974b58d)",  color: "var(--accent2)" },
  Freelance:    { bg: "var(--ui-color-64c05f89)",  border: "var(--ui-color-9d2906c1)",  color: "var(--accent)"  },
  Organization: { bg: "var(--ui-color-063bc3ae)", border: "var(--ui-color-dad15001)", color: "var(--accent3)" },
  PartTime:      { bg: "var(--ui-color-8b7e6d98)", border: "var(--ui-color-a0e89a25)", color: "var(--accent4)"  },
}

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <div className="fixed inset-0 pointer-events-none -z-10">
        <div
          className="absolute rounded-full blur-[120px] opacity-10"
          style={{ width: 500, height: 400, top: "20%", right: "-5%", background: "var(--accent)" }}
        />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <main className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 pt-36 pb-24 page-enter">
        <div className="max-w-4xl mx-auto">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
            style={{ color: "var(--accent2)" }}
          >
            <span
              className="inline-block w-8 h-px"
              style={{ background: "var(--accent2)", boxShadow: "0 0 6px var(--accent2)" }}
            />
            Track Record
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold mb-20"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Experience
          </motion.h1>

          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, var(--accent), var(--border), transparent)" }}
            />

            <div className="space-y-12">
              {experiences.map((exp, i) => {
                const badge = typeStyle[exp.type]
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                    className="relative pl-16"
                  >
                    {/* dot */}
                    <div
                      className="absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background: "var(--surface2)",
                        border: "1px solid var(--accent)",
                        boxShadow: "0 0 16px var(--ui-color-5244f807)",
                      }}
                    >
                      <span className="font-mono text-xs font-bold" style={{ color: "var(--accent)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* card */}
                    <div
                      className="card-hover p-6 rounded-2xl border"
                      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                    >
                      {/* year + type badge */}
                      <p className="font-mono text-xs mb-3 flex items-center gap-3" style={{ color: "var(--accent)" }}>
                        {exp.period}
                        <span
                          className="experience-chip font-mono text-xs px-2 py-0.5 rounded"
                          data-type={exp.type}
                          style={{
                            background: badge.bg,
                            border: `1px solid ${badge.border}`,
                            color: badge.color,
                          }}
                        >
                          {exp.type}
                        </span>
                      </p>

                      {/* org */}
                      <p className="font-mono text-sm mb-2" style={{ color: "var(--accent2)" }}>
                        {exp.organization}
                      </p>

                      {/* role */}
                      <h3 className="font-display font-bold text-lg mb-4" style={{ color: "var(--text)" }}>
                        {exp.role}
                      </h3>

                      {/* description */}
                      <p className="leading-relaxed mb-5 text-sm" style={{ color: "var(--text-muted)" }}>
                        {exp.description}
                      </p>

                      {/* projects */}
                      {exp.projects && (
                        <div className="mb-5">
                          <p className="font-mono text-xs mb-2 uppercase tracking-wider" style={{ color: "var(--accent)" }}>Projects:</p>
                          <ul className="list-disc list-inside text-sm space-y-1" style={{ color: "var(--text-muted)" }}>
                            {exp.projects.map((project, idx) => (
                              <li key={idx}>{project}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs px-3 py-1 rounded-full"
                            style={{
                              color: "var(--text-muted)",
                              border: "1px solid var(--border)",
                              background: "var(--surface2)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
