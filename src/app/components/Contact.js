"use client"

import { motion } from "framer-motion"
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-32 bg-zinc-950 text-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Let’s Build Something Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-400 max-w-xl mx-auto mb-10"
        >
          Interested in collaborating, discussing projects, or just saying hi?
          Feel free to reach out. I’m always open to new opportunities.
        </motion.p>

        {/* main CTA */}
        <motion.a
          href="mailto:jemsdiggory@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            inline-flex items-center gap-3
            px-8 py-4 rounded-xl
            bg-blue-400 text-white font-medium
            hover:bg-blue-500 transition
          "
        >
          <FaEnvelope />
          Say Hi
        </motion.a>

        {/* socials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-6 mt-12 text-zinc-400 text-xl"
        >
          <a href="https://linkedin.com/in/jemima05" target="_blank">
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
          <a href="https://github.com/JemsDiggory" target="_blank">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="https://instagram.com/jeymss00" target="_blank">
            <FaInstagram className="hover:text-pink-400 transition" />
          </a>
        </motion.div>
      </div>

      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px]
                        -translate-x-1/2 -translate-y-1/2
                        bg-blue-500/10 blur-3xl rounded-full" />
      </div>
    </section>
  )
}
