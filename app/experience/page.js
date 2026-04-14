"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"

const experiences = [
  {
    year: "Feb 2026 — Present",
    type: "Internship",
    org: "PT. Ciptadra Softindo",
    role: "Web Developer Intern",
    description:
      "Contributed to the maintenance of company and client websites, implemented new features, and developed updated layouts to support newly released products and enhance the website interface and user experience.",
    tags: ["Web Development", "Collaboration", "Problem-Solving", "Git", "Gitlab", "Notion"],
  },
  {
    year: "2024 — Present",
    type: "Freelance",
    org: "Tealcean Studio",
    role: "Game Programmer",
    description:
      "Collaborated in a team of 4 to develop an atmospheric narrative game using Unity, contributing to gameplay programming, optimization, and bug fixing, while gaining experience in version control and agile development practices.",
    tags: ["Game Development", "Time Management", "Teamwork", "Unity", "C#", "Notion", "Github"],
  },
  {
    year: "2024 — 2025",
    type: "Organization",
    org: "Polimedia Student Association of Game Technology",
    role: "Member & Head of Human Resources Development Division (PSDM)",
    description:
      "Coordinated development activities while addressing internal organizational issues, assisted in the recruitment and evaluation of new members, and implemented programs designed to enhance members' knowledge and professional development.",
    tags: ["Leadership", "HR", "Organization"],
  },
  {
    year: "2024 — 2025",
    type: "Organization",
    org: "Student Orientation Event – Polimedia Jakarta",
    role: "PKKMB — Member, Senior Staff & Field Coordinator",
    description:
      "Managed field operations while guiding new students throughout activities, contributing to the development of strong communication, leadership, and problem-solving skills.",
    tags: ["Coordination", "Leadership", "Communication"],
  },
]

const typeStyle = {
  Internship:   { bg: "rgba(61,255,209,0.08)",  border: "rgba(61,255,209,0.25)",  color: "var(--accent2)" },
  Freelance:    { bg: "rgba(99,102,241,0.08)",  border: "rgba(99,102,241,0.25)",  color: "var(--accent)"  },
  Organization: { bg: "rgba(100,116,139,0.08)", border: "rgba(100,116,139,0.25)", color: "var(--accent3)" },
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
                        boxShadow: "0 0 16px rgba(99,102,241,0.3)",
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
                        {exp.year}
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded"
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
                        {exp.org}
                      </p>

                      {/* role */}
                      <h3 className="font-display font-bold text-lg mb-4" style={{ color: "var(--text)" }}>
                        {exp.role}
                      </h3>

                      {/* description */}
                      <p className="leading-relaxed mb-5 text-sm" style={{ color: "var(--text-muted)" }}>
                        {exp.description}
                      </p>

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