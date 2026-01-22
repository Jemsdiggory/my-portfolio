"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    year: "2024-2025",
    organization: "Polimedia Student Association of Game Technology",
    role: "Member and Head of the Human Resources Development Division (PSDM) of the Game Technology Student Association",
    description:
      "Coordinated development activities while addressing internal organizational issues, assisted in the recruitment and evaluation of new members, and implemented programs designed to enhance members’ knowledge and professional development.",
  },
  {
    year: "2024-2025",
    organization: "Student Orientation Event – Polimedia Jakarta",
    role: "PKKMB Polimedia Jakarta – Member and Senior Staff, Field Coordinator",
    description:
      "Managed field operations while guiding new students throughout the activities, which contributed to the development of strong communication, leadership, and problem-solving skills.",
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-32 bg-zinc-950 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="relative space-y-16">

          {/* vertical line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-zinc-800" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative pl-12"
            >
              {/* animated dot */}
              <motion.div
                className="absolute left-0 top-2 w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center"
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              </motion.div>

              {/* content card */}
              <div className="relative rounded-xl border border-zinc-800 p-6
                              bg-zinc-900/30 backdrop-blur-sm
                              transition group-hover:border-blue-400/40">

                {/* shimmer accent */}
                <motion.div
                  className="absolute inset-0 rounded-xl
                             bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  {/* year & org */}
                  <div className="mb-2 text-sm">
                    <span className="text-blue-400 font-semibold">
                      {exp.year}
                    </span>
                    <span className="text-zinc-500 mx-2">•</span>
                    <span className="text-cyan-400">
                      {exp.organization}
                    </span>
                  </div>

                  {/* role */}
                  <h3 className="text-lg font-semibold mb-2">
                    {exp.role}
                  </h3>

                  {/* desc */}
                  <p className="text-zinc-300 leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
