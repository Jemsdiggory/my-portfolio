"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useReducedMotion } from "framer-motion"

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Visual Works", href: "/gallery" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
]
const gamePageLinks = [
  { label: "About", href: "#about" },
  { label: "Games", href: "#games" },
  { label: "Systems", href: "#systems" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
]

function TrackToggle({ activeTrack, onChoose }) {
  return <div className="flex rounded-lg border border-white/10 p-1 font-mono text-[9px] tracking-wide" aria-label="Portfolio track">
    {[{ id: "game", label: "GAME DEV" }, { id: "design", label: "DESIGN ENG" }].map((track) => <button key={track.id} type="button" onClick={() => onChoose(track.id)} aria-pressed={activeTrack === track.id} className={`rounded-md px-2 py-1.5 transition-colors ${activeTrack === track.id ? "bg-violet-500/25 text-cyan-200" : "text-white/50 hover:text-white"}`}>{track.label}</button>)}
  </div>
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const reducedMotion = useReducedMotion()
  const isGamePage = pathname === "/game-dev"
  const [activeSection, setActiveSection] = useState("about")
  const [storedTrack, setStoredTrack] = useState("game")
  const pathTrack = pathname === "/design-engineer" ? "design" : pathname === "/game-dev" ? "game" : null
  const activeTrack = pathTrack || storedTrack

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try { setStoredTrack(localStorage.getItem("jems-track") === "design" ? "design" : "game") } catch { setStoredTrack("game") }
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  const chooseTrack = (track) => {
    try { localStorage.setItem("jems-track", track) } catch { /* Storage may be disabled. */ }
    setStoredTrack(track)
    window.location.assign(track === "game" ? "/game-dev" : "/design-engineer")
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!isGamePage) return
    const sections = gamePageLinks.map(({ href }) => document.getElementById(href.slice(1))).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) setActiveSection(visible[0].target.id)
    }, { rootMargin: "-15% 0px -65% 0px", threshold: [0, 0.15, 0.35, 0.6] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isGamePage])

  const handlePageLink = (event, href) => {
    if (!isGamePage) {
      setOpen(false)
      return
    }
    event.preventDefault()
    const id = href.slice(1)
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" })
    window.history.replaceState(null, "", href)
    setActiveSection(id)
    setOpen(false)
  }

  return (
    <>
      <style>{`
        @keyframes logoPulse {
          0%, 100% { text-shadow: 0 0 12px var(--accent), 0 0 24px color-mix(in srgb, var(--accent) 40%, transparent); }
          50% { text-shadow: 0 0 4px color-mix(in srgb, var(--accent) 30%, transparent); }
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 5px #64dc8c; }
          50% { opacity: 0.35; box-shadow: none; }
        }
        @keyframes barBounce {
          0%, 100% { transform: scaleY(0.35); }
          50% { transform: scaleY(1); }
        }
        .logo-char {
          display: inline-block;
          animation: logoPulse 3s ease-in-out infinite;
        }
        .nav-underline {
          position: absolute;
          bottom: 3px;
          left: 50%;
          right: 50%;
          height: 1.5px;
          border-radius: 2px;
          background: var(--accent);
          box-shadow: 0 0 7px var(--accent);
          transition: left 0.28s ease, right 0.28s ease, opacity 0.28s ease;
          opacity: 0;
        }
        .nav-item:hover .nav-underline {
          left: 14px;
          right: 14px;
          opacity: 0.55;
        }
        .nav-item.active-link .nav-underline {
          left: 14px;
          right: 14px;
          opacity: 1;
        }
        .nav-item:hover {
          color: rgba(220, 225, 255, 0.95) !important;
          background: rgba(123, 108, 255, 0.07) !important;
          transform: translateY(-1px);
        }
        
      `}</style>

      <nav
        className="fixed top-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(8, 8, 16, 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(123,108,255,0.15)"
            : "1px solid transparent",
          height: scrolled ? "56px" : "64px",
        }}
      >
        <div
          className="max-w-6xl mx-auto px-6 flex justify-between items-center h-full"
        >

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span
              className="font-display font-bold text-3xl tracking-tight"
              style={{ color: "var(--text)" }}
            >
              J<span className="logo-char" style={{ color: "var(--accent)" }}>.</span>
            </span>

          </Link>

          <div className="hidden sm:block ml-auto mr-2"><TrackToggle activeTrack={activeTrack} onChoose={chooseTrack} /></div>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {!isGamePage && <li><Link href={activeTrack === "game" ? "/game-dev" : "/design-engineer"} className="nav-item relative px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-widest">{activeTrack === "game" ? "Game Dev" : "Design Eng"}</Link></li>}
            {(isGamePage ? gamePageLinks : links).map(({ label, href }) => {
              const active = isGamePage ? activeSection === href.slice(1) : pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={(event) => handlePageLink(event, href)}
                    className={`nav-item${active ? " active-link" : ""} relative px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-widest transition-all duration-250`}
                    style={{
                      color: active
                        ? "var(--accent)"
                        : "rgba(180, 185, 220, 0.55)",
                      background: active
                        ? "rgba(123,108,255,0.08)"
                        : "transparent",
                      letterSpacing: "0.09em",
                      display: "inline-block",
                    }}
                  >
                    {label}
                    <span className="nav-underline" />
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right side  */}
          <div className="flex items-center gap-3">
            

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              {[
                open ? "rotate(45deg) translate(2px, 2px)" : "none",
                null,
                open ? "rotate(-45deg) translate(2px, -2px)" : "none",
              ].map((transform, i) =>
                transform === null ? (
                  <span
                    key={i}
                    className="block w-5 h-px transition-all duration-300"
                    style={{
                      background: "var(--text)",
                      opacity: open ? 0 : 1,
                    }}
                  />
                ) : (
                  <span
                    key={i}
                    className="block w-5 h-px transition-all duration-300 origin-center"
                    style={{ background: "var(--text)", transform }}
                  />
                )
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-400 ease-in-out"
          style={{
            maxHeight: open ? "600px" : "0",
            opacity: open ? 1 : 0,
            borderTop: open ? "1px solid rgba(123,108,255,0.12)" : "none",
            background: "var(--surface)",
          }}
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            <li className="px-4 py-2"><TrackToggle activeTrack={activeTrack} onChoose={chooseTrack} /></li>
            {!isGamePage && <li><Link href={activeTrack === "game" ? "/game-dev" : "/design-engineer"} onClick={() => setOpen(false)} className="flex items-center px-4 py-3 rounded-lg font-mono text-xs uppercase tracking-widest text-cyan-200">{activeTrack === "game" ? "Game Dev" : "Design Eng"}</Link></li>}
            {(isGamePage ? gamePageLinks : links).map(({ label, href }) => {
              const active = isGamePage ? activeSection === href.slice(1) : pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={(event) => handlePageLink(event, href)}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg font-mono text-xs uppercase tracking-widest transition-colors duration-250"
                    style={{
                      color: active ? "var(--accent)" : "rgba(180,185,220,0.55)",
                      background: active ? "rgba(123,108,255,0.08)" : "transparent",
                      letterSpacing: "0.09em",
                    }}
                  >
                    {active && (
                      <span style={{ color: "var(--accent)" }}>▸</span>
                    )}
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}
