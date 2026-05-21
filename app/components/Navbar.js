"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Visual Works", href: "/gallery" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  //close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

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

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
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
            maxHeight: open ? "400px" : "0",
            opacity: open ? 1 : 0,
            borderTop: open ? "1px solid rgba(123,108,255,0.12)" : "none",
            background: "var(--surface)",
          }}
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map(({ label, href }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
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
