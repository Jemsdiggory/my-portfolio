"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
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

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(8, 8, 16, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span
            className="font-display font-bold text-3xl tracking-tight"
            style={{ color: "var(--text)" }}
          >
            J.
          </span>
          
        </Link>

        {/* desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="link-glow relative px-4 py-2 rounded-lg font-mono text-sm transition-colors duration-300"
                  style={{
                    color: active ? "var(--accent)" : "var(--text-muted)",
                    background: active ? "rgba(123,108,255,0.08)" : "transparent",
                  }}
                >
                  {active && (
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full"
                      style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
                    />
                  )}
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className="block w-5 h-px transition-all duration-300 origin-center"
            style={{
              background: "var(--text)",
              transform: open ? "rotate(45deg) translate(2px, 2px)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--text)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300 origin-center"
            style={{
              background: "var(--text)",
              transform: open ? "rotate(-45deg) translate(2px, -2px)" : "none",
            }}
          />
        </button>
      </div>

      {/* mobile menu */}
      <div
        className="md:hidden transition-all duration-400 ease-in-out overflow-hidden"
        style={{
          maxHeight: open ? "400px" : "0",
          opacity: open ? 1 : 0,
          borderTop: open ? "1px solid var(--border)" : "none",
          background: "var(--surface)",
        }}
      >
        <ul className="flex flex-col items-start gap-1 px-6 py-4">
          {links.map(({ label, href }) => {
            const active = pathname === href
            return (
              <li key={href} className="w-full">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg font-mono text-sm transition-colors duration-300"
                  style={{
                    color: active ? "var(--accent)" : "var(--text-muted)",
                    background: active ? "rgba(123,108,255,0.08)" : "transparent",
                  }}
                >
                  {active && (
                    <span style={{ color: "var(--accent2)" }} className="mr-2">▸</span>
                  )}
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}