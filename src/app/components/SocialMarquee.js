"use client"

import { motion } from "framer-motion"
import {
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaGithub,
  FaYoutube,
} from "react-icons/fa"
import { SiItchdotio } from "react-icons/si"

const socials = [
  { icon: FaInstagram, url: "https://instagram.com/jeymss00" },
  { icon: FaLinkedin, url: "https://linkedin.com/in/jemima05" },
  { icon: FaDiscord, url: "https://discord.gg/jems1717" },
  { icon: FaGithub, url: "https://github.com/JemsDiggory" },
  { icon: SiItchdotio, url: "https://jemsdiggory.itch.io" },
  { icon: FaYoutube, url: "https://youtube.com/@jemsdiggo" },
]

function MarqueeRow({ reverse = false }) {
  return (
    <motion.div
      className="flex gap-12 w-[200%]"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{
        duration: 22,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {[...socials, ...socials].map((item, i) => {
        const Icon = item.icon
        return (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-2xl sm:text-3xl text-zinc-400 hover:text-blue-400"
            >
              <Icon />
            </motion.div>
          </a>
        )
      })}
    </motion.div>
  )
}

export default function SocialMarquee() {
  return (
    <div className="relative w-full overflow-hidden mt-8 space-y-6">
      
      {/* row atas dari kiri */}
      <MarqueeRow />

      {/* row bawah dari kanan */}
      <MarqueeRow reverse />

      {/* fade edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950" />
    </div>
  )
}
