"use client"

import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleScroll = (id) => {
    setOpen(false)

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

  return (
    <nav className="fixed top-0 w-full bg-zinc-900/80 backdrop-blur border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">

        {/* logo */}
        <h1 className="text-lg md:text-xl font-semibold text-white">
          J. <span className="text-blue-400">Universe</span>
        </h1>

        {/* desktop menu */}
        <ul className="hidden md:flex gap-6 text-zinc-400">
          <li><a href="#about" className="hover:text-white transition">About Me</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
          <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
          <li><a href="#experience" className="hover:text-white transition">Experience</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>

        {/* hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`
          md:hidden transition-all duration-300 ease-in-out overflow-hidden
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          bg-zinc-900 border-t border-zinc-800
        `}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-zinc-400">

          <li onClick={() => handleScroll("about")} className="hover:text-white transition cursor-pointer">
            About Me
          </li>

          <li onClick={() => handleScroll("projects")} className="hover:text-white transition cursor-pointer">
            Projects
          </li>

          <li onClick={() => handleScroll("gallery")} className="hover:text-white transition cursor-pointer">
            Gallery
          </li>

          <li onClick={() => handleScroll("experience")} className="hover:text-white transition cursor-pointer">
            Experience
          </li>

          <li onClick={() => handleScroll("contact")} className="hover:text-white transition cursor-pointer">
            Contact
          </li>

        </ul>
      </div>
    </nav>
  )
}
