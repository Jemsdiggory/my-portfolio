"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "HTML & CSS", level: 70 },
  { name: "JavaScript", level: 30 },
  { name: "React / Next.js", level: 10 },
  { name: "Unity (C#)", level: 85 },
  { name: "Blender", level: 20 },
  { name: "Adobe Illustrator", level: 20 },
  { name: "Canva", level: 85 },

]



export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-32 bg-zinc-950 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* left-text */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-zinc-200 mb-4 leading-relaxed">
            My name is Kahlaa Aulia Jemima, I'm a Game Technology student 
            at Politeknik Negeri Media Kreatif Jakarta,
          </p>

          <p className="text-zinc-300 mb-4 leading-relaxed">
            With a strong focus on game programming using Unity. Most of my projects on itch.io 
            are team-based, where I primarily work as a programmer, experimenting with gameplay 
            mechanics and systems. I also have experience in front-end web development and occasionally 
            contribute to video editing and design. Everything here reflects my learning journey.
          </p>

          <p className="text-zinc-200 mb-8 leading-relaxed">
            If you have feedback, ideas, or collaboration opportunities, feel free to reach out—I'm always 
            happy to talk about game and web development!
          </p>

          {/* buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/cv-jemima.pdf"
              download
              className="px-6 py-3 rounded-xl bg-blue-400 text-white font-medium hover:bg-blue-500 transition"
            >
              Download CV
            </a>

            <a
              href="https://drive.google.com/drive/folders/1kt9f7LqDxekNFbaxsKN0Zo3FNiLahmDa?usp=drive_link"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition"
            >
              View Certificates
            </a>
          </div>
        </motion.div>

        {/* right — skills */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
            <h3 className="text-xl font-semibold mb-6">
                Skills
            </h3>

            <div className="space-y-6">
                {skills.map((skill) => {
                const minWidth = Math.max(skill.level - 4, 5)

                return (
                    <div key={skill.name}>
                    <div className="flex justify-between mb-2 text-sm">
                        <span>{skill.name}</span>
                        <span className="text-zinc-400">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                        initial={{ width: `${minWidth}%` }}
                        animate={{
                            width: [
                            `${minWidth}%`,
                            `${skill.level}%`,
                            `${minWidth}%`,
                            ],
                        }}
                        transition={{
                            duration: 2.8,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                        />
                    </div>
                    </div>
                )
                })}
            </div>
            </motion.div>


      </div>
    </section>
  )
}
