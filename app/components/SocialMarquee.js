"use client"

import {
  FaInstagram, FaLinkedin, FaDiscord, FaGithub, FaYoutube, FaGitlab,
} from "react-icons/fa"
import { SiItchdotio } from "react-icons/si"

const socials = [
  { icon: FaInstagram, label: "instagram", url: "https://instagram.com/jeymss00" },
  { icon: FaLinkedin,  label: "linkedin",  url: "https://linkedin.com/in/jemima05" },
  { icon: FaDiscord,   label: "discord",   url: "https://discord.gg/jems1717" },
  { icon: FaGithub,    label: "github",    url: "https://github.com/JemsDiggory" },
  { icon: SiItchdotio, label: "itch.io",   url: "https://jemsdiggory.itch.io" },
  { icon: FaYoutube,   label: "youtube",   url: "https://youtube.com/@jemsdiggo" },
  { icon: FaGitlab,    label: "gitlab",    url: "https://gitlab.com/jemimadiggory" },
]

export default function SocialMarquee() {
  return (
    <div className="flex flex-wrap items-center gap-1 mt-10">
      {socials.map((item) => {
        const Icon = item.icon
        return (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-dim)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--accent)"
              e.currentTarget.style.color = "var(--text)"
              e.currentTarget.style.background = "rgba(99,102,241,0.06)"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)"
              e.currentTarget.style.color = "var(--text-dim)"
              e.currentTarget.style.background = "transparent"
            }}
          >
            <Icon style={{ fontSize: "0.85rem" }} />
            <span className="font-mono text-xs uppercase tracking-widest">
              {item.label}
            </span>
          </a>
        )
      })}
    </div>
  )
}