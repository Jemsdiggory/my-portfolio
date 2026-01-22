"use client"

import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Project from "./components/Project"
import Gallery from "./components/Gallery"
import Experience from "./components/Experience"
import SocialMarquee from "./components/SocialMarquee"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          flex flex-col items-center text-center
          pt-32 sm:pt-52 md:pt-72 lg:pt-80
          px-4 sm:px-6 md:px-8
        "
      >


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.h1
            className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Hi, I'm Kahlaa Aulia Jemima 👋
          </motion.h1>

          <motion.p
            className="text-zinc-400 text-base sm:text-lg md:text-xl mb-6"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Tech Enthusiast • Front-End Developer • Unity Developer
          </motion.p>

          {/* sosial marquee nya */}
          <SocialMarquee />
        </motion.div>
      </main>

      <About />
      <Project />
      <Gallery />
      <Experience />
      <Contact />

    </>
  )
}
