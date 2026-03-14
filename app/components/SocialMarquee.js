"use client"

import { useRef, useEffect } from "react"
import {
  FaInstagram, FaLinkedin, FaDiscord, FaGithub, FaYoutube,
  FaGitlab,
} from "react-icons/fa"
import { SiItchdotio } from "react-icons/si"

const socials = [
  { icon: FaInstagram,  label: "instagram",  url: "https://instagram.com/jeymss00" },
  { icon: FaLinkedin,   label: "linkedin",   url: "https://linkedin.com/in/jemima05" },
  { icon: FaDiscord,    label: "discord",    url: "https://discord.gg/jems1717" },
  { icon: FaGithub,     label: "github",     url: "https://github.com/JemsDiggory" },
  { icon: SiItchdotio,  label: "itch.io",    url: "https://jemsdiggory.itch.io" },
  { icon: FaYoutube,    label: "youtube",    url: "https://youtube.com/@jemsdiggo" },
  { icon: FaGitlab,     label: "gitlab",     url: "https://gitlab.com/jemimadiggory" }
]

// 4x duplicate — seamless loop (reset at 50% = 2x original set)
const items = [...socials, ...socials, ...socials, ...socials]

export default function SocialMarquee() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animId
    let pos = 0
    const speed = 0.6 // px per frame

    function tick() {
      pos -= speed
      // scrollWidth / 2 = exactly one full "original" set width
      if (Math.abs(pos) >= track.scrollWidth / 2) pos = 0
      track.style.transform = `translateX(${pos}px)`
      animId = requestAnimationFrame(tick)
    }

    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden mt-10"
      style={{
        maskImage: "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ gap: "2.5rem" }}
      >
        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center flex-shrink-0 group"
              style={{ gap: "0.5rem" }}
            >
              <Icon
                className="text-base transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(123,108,255,0.9)]"
                style={{ color: "var(--text-dim)" }}
              />
              <span
                className="font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-colors duration-300 group-hover:text-white"
                style={{ color: "var(--text-dim)" }}
              >
                {item.label}
              </span>
              <span style={{ color: "var(--text-dim)", opacity: 0.25, marginLeft: "1rem", fontSize: "0.5rem" }}>
                ◆
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}