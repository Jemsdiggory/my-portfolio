"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "../components/Navbar"

// ─── DATA ────────────────────────────────────────────────────────────────────

const gameProjects = [
  {
    title: "Vita-Dulu",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame1.jpg",
    video: "/gameplay/vita-dulu.mp4",
    link: "https://jemsdiggory.itch.io/vita-dulu",
    tags: ["Unity", "3D", "Simulation", "Educational"],
    description:
      "3D Simulation & Educational game about traditional Indonesian snacks. Responsible for overall gameplay mechanics, NPC AI behaviour, and interactive systems. PC & Mobile.",
    team: "Programmer · Designer",
    type: "SIMULATION GAME",
    category: "Game Development",
  },
  {
    title: "Rise Against",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame2.png",
    video: "/gameplay/rise-against.mp4",
    link: "https://jemsdiggory.itch.io/rise-against",
    tags: ["Unity", "2D", "RPG", "Educational"],
    description:
      "2D RPG about environmental issues. Programmed quest systems, AI & combat, dialogue, and inventory management. PC Platform.",
    team: "Programmer · Designer",
    type: "RPG GAME",
    category: "Game Development",
  },
  {
    title: "Let's Explore",
    studio: "Tealcean Studio",
    icon: "/game-icons/icongame3.png",
    video: "/gameplay/lets-explore.mp4",
    link: "https://jemsdiggory.itch.io/lets-explore",
    tags: ["Unity", "2D", "Kids", "Educational"],
    description:
      "2D Educational game on arithmetic and Indonesian tourism for children aged 6–9. Mini-game mechanics, interactive systems & UI/UX. PC Platform.",
    team: "Programmer · Designer",
    type: "EDUCATIONAL GAME",
    category: "Game Development",
  },
  {
    title: "Roblorant",
    studio: "Solo Project",
    icon: "/game-icons/icongame4.png",
    video: "/gameplay/roblorant.mp4",
    link: "https://jemsdiggory.itch.io/tugas-game-fps",
    tags: ["Unity", "3D", "FPS", "Assignment"],
    description:
      "3D FPS game assignment built with Unity. Core gameplay: player movement, shooting mechanics, enemy AI. Web-based.",
    team: "Programmer (Solo Project)",
    type: "FPS GAME",
    category: "Game Development",
  },
  {
    title: "Congklak Adventures",
    studio: "Team 7",
    icon: "/game-icons/icongame5.png",
    video: "/gameplay/congklak-adventures.mp4",
    link: "https://dycals.itch.io/congklak-adventures",
    tags: ["Unity", "2D", "Traditional", "Educational"],
    description:
      "2D Educational game on the traditional Congklak board game. My role: UI Artist & co-Game Designer. PC Platform.",
    team: "UI Artist · Designer",
    type: "TRADITIONAL GAME",
    category: "Game Development",
  },
]

const webProjects = [
  {
    slug: "ciptadra",
    title: "Ciptadra Softindo",
    subtitle: "Enterprise Website Redesign & Development",
    image: "/thumbnail/webciptadra.svg",
    tags: ["Laravel", "PHP", "CSS", "Vanilla JS", "Git"],
    description:
      "Redesigned the company profile homepage and product pages for Ciptadra Softindo, improving visual identity and user engagement.",
    type: "Professional Project",
    category: "Front-End Development",
  },
  {
    slug: "onebox-ciptadra",
    title: "OneBox Portal",
    subtitle: "Employee Portal Modernization",
    image: "/thumbnail/webonebox.svg",
    tags: ["Laravel", "PHP", "CSS", "Vanilla JS", "Git"],
    description:
      "Modernized the Product portal of Ciptadra Softindo with an improved UI/UX, streamlined navigation, and responsive layout.",
    type: "Professional Project",
    category: "Front-End Development",
  },
  {
    slug: "personal-website",
    title: "Personal Portfolio",
    subtitle: "Interactive Portfolio Website with Next.js",
    image: "/thumbnail/webpersonal.svg",
    tags: ["Next.js", "React", "Tailwind CSS", "GSAP", "GitHub"],
    description:
      "Interactive personal portfolio built with Next.js. Features smooth animations, custom cursor, music player, and fully responsive design.",
    type: "Personal Project",
    category: "Front-End Development",
  },
  {
    slug: "portal-nextjs",
    title: "Portal Ciptadra",
    subtitle: "Enterprise Platform Redesign with Next.js",
    image: "/thumbnail/portalnextjs.svg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"],
    description:
      "Transformed an outdated web platform into a sleek, responsive, and commercial-ready application using Next.js and Tailwind CSS.",
    type: "Professional Project",
    category: "Front-End Development",
  },
  {
    slug: "mall-management",
    title: "Mall Management Landing",
    subtitle: "Product Landing Page for Mall Management Solution",
    image: "/thumbnail/landingpagemall.svg",
    tags: ["CodeIgniter", "PHP", "CSS", "Vanilla JS", "Git"],
    description:
      "Developed a conversion-focused product landing page for Ciptadra's Mall Management System, communicating key features and value proposition.",
    type: "Professional Project",
    category: "Front-End Development",
  },
  {
    slug: "mall-management-system",
    title: "Mall Management System",
    subtitle: "Full-Stack Mall Operations Management Platform",
    image: "/thumbnail/sistmall.svg",
    tags: ["CodeIgniter", "PHP", "MySQL", "CSS", "Vanilla JS"],
    description:
      "A full-stack web platform for mall operations management, covering tenant management, contract lifecycle, and automated billing generation.",
    type: "Professional Project",
    category: "Full-Stack Development",
  },
  {
    slug: "food-check",
    title: "FoodCheck",
    subtitle: "AI-Powered Recipe Discovery Platform",
    image: "/thumbnail/foodcheck.svg",
    tags: ["Laravel", "MySQL", "React.js", "Vite", "Spoonacular API"],
    description:
      "Full-stack recipe discovery app. Users input available ingredients to get AI-curated recipe suggestions, save favorites, and track search history.",
    type: "Academic Project",
    category: "Full-Stack Development",
  },
  {
    slug: "mini-cms",
    title: "Gaming Blog CMS",
    subtitle: "Content Management System for Gaming Blog",
    image: "/thumbnail/minicms.svg",
    tags: ["PHP", "MySQL", "Vanilla JS", "TinyMCE"],
    description:
      "A lightweight CMS for a gaming blog with full CRUD operations and a WYSIWYG editor for rich content publishing.",
    type: "Academic Project",
    category: "Web Application",
  },
  {
    slug: "saku-aman-app",
    title: "Saku Aman",
    subtitle: "Personal Finance Tracking Mobile Application",
    image: "/thumbnail/sakuaman.svg",
    tags: ["Flutter", "Dart", "SQLite"],
    description:
      "A cross-platform mobile finance tracker built with Flutter, allowing users to log income, expenses, and view spending summaries.",
    type: "Academic Project",
    category: "Mobile Application",
  },
  {
    slug: "angular-spa",
    title: "Angular SPA",
    subtitle: "Angular Single Page Application Showcase",
    image: "/thumbnail/antarikstech.svg",
    tags: ["Angular", "TypeScript", "RxJS", "HTTP Client", "Joke API"],
    description:
      "Demonstrates Reactive Forms, form validation, business logic separation, and HTTP client integration with an external REST API.",
    type: "Academic Project",
    category: "Web Application",
  },
  {
    slug: "mlbb-vote",
    title: "MLBB Vote",
    subtitle: "Interactive Game-Themed Voting Interface",
    image: "/thumbnail/molevote.svg",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "Responsive game-inspired voting site with hero card gallery, role-based filtering, and interactive voting functionality.",
    type: "Personal Project",
    category: "Front-End Development",
  },
]

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const CORE_TAGS = {
  "Next.js": true, React: true, "React.js": true, TypeScript: true,
  Laravel: true, "Tailwind CSS": true, Flutter: true, Angular: true,
  Unity: true, PHP: true, MySQL: true, CodeIgniter: true,
  "Vanilla JS": true, JavaScript: true, Dart: true,
  GSAP: true, GitHub: true,
}

function coreTags(tags, max = 4) {
  const core = tags.filter((t) => CORE_TAGS[t])
  const rest = tags.filter((t) => !CORE_TAGS[t])
  return [...core, ...rest].slice(0, max)
}

const CATEGORY_COLORS = {
  "Front-End Development": "rgba(99,102,241,0.15)",
  "Full-Stack Development": "rgba(34,197,94,0.12)",
  "Mobile Application": "rgba(251,146,60,0.12)",
  "Web Application": "rgba(168,85,247,0.12)",
  "Game Development": "rgba(236,72,153,0.12)",
  "Professional Project": "rgba(99,102,241,0.15)",
  "Academic Project": "rgba(34,197,94,0.12)",
  "Personal Project": "rgba(251,191,36,0.12)",
}

const CATEGORY_TEXT = {
  "Front-End Development": "rgba(165,180,252,0.9)",
  "Full-Stack Development": "rgba(134,239,172,0.9)",
  "Mobile Application": "rgba(253,186,116,0.9)",
  "Web Application": "rgba(216,180,254,0.9)",
  "Game Development": "rgba(249,168,212,0.9)",
  "Professional Project": "rgba(165,180,252,0.9)",
  "Academic Project": "rgba(134,239,172,0.9)",
  "Personal Project": "rgba(253,230,138,0.9)",
}

// ─── ARROW BUTTON ────────────────────────────────────────────────────────────

function ArrowButton({ direction, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous project" : "Next project"}
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: `1px solid ${disabled ? "rgba(255,255,255,0.08)" : "rgba(99,102,241,0.5)"}`,
        background: disabled ? "rgba(255,255,255,0.03)" : "rgba(99,102,241,0.12)",
        color: disabled ? "rgba(255,255,255,0.2)" : "rgba(165,180,252,1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.25s ease",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          const el = e.currentTarget
          el.style.background = "rgba(99,102,241,0.3)"
          el.style.boxShadow = "0 0 16px rgba(99,102,241,0.35)"
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = disabled ? "rgba(255,255,255,0.03)" : "rgba(99,102,241,0.12)"
        el.style.boxShadow = "none"
      }}
    >
      {direction === "prev" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}

// ─── DOT INDICATORS ──────────────────────────────────────────────────────────

function DotIndicators({ count, selected, onSelect }) {
  const showDots = count <= 12

  if (!showDots) {
    return (
      <div
        style={{
          width: "120px",
          height: "3px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: "999px",
            background: "var(--accent, #6366f1)",
            width: `${((selected + 1) / count) * 100}%`,
            transition: "width 0.3s ease",
          }}
        />
      </div>
    )
  }

  return (
    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`Go to slide ${i + 1}`}
          style={{
            width: i === selected ? "20px" : "6px",
            height: "6px",
            borderRadius: "999px",
            border: "none",
            background: i === selected ? "rgba(165,180,252,1)" : "rgba(255,255,255,0.2)",
            cursor: "pointer",
            padding: 0,
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  )
}

// ─── WEB PROJECT CARD ────────────────────────────────────────────────────────

function WebProjectCard({ web }) {
  const [hovered, setHovered] = useState(false)

  const catBg = CATEGORY_COLORS[web.category] || "rgba(99,102,241,0.12)"
  const catText = CATEGORY_TEXT[web.category] || "rgba(165,180,252,0.9)"

  return (
    <Link
      href={`/projects/${web.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        border: `1px solid ${hovered ? "rgba(99,102,241,0.55)" : "rgba(255,255,255,0.08)"}`,
        background: "rgba(13,17,23,0.85)",
        backdropFilter: "blur(12px)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(99,102,241,0.25), 0 24px 64px rgba(0,0,0,0.5), 0 0 48px rgba(99,102,241,0.1)"
          : "0 4px 24px rgba(0,0,0,0.25)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        height: "100%",
        textDecoration: "none",
      }}
    >
      {/* Thumbnail - fixed 16:9 */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          flexShrink: 0,
          overflow: "hidden",
          background: "rgba(255,255,255,0.04)",
        }}
      >
        <Image
          src={web.image}
          alt={web.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            filter: hovered ? "brightness(1.05)" : "brightness(0.88)",
            transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1), filter 0.4s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.3) 50%, transparent 100%)",
          }}
        />
        {hovered && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              boxShadow: "inset 0 0 60px rgba(99,102,241,0.12)",
              pointerEvents: "none",
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            fontFamily: "monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            background: "rgba(13,17,23,0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "3px 10px",
            borderRadius: "999px",
          }}
        >
          {web.type}
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          flex: 1,
        }}
      >
        {/* Category badge */}
        <span
          style={{
            fontSize: "0.65rem",
            fontFamily: "monospace",
            letterSpacing: "0.06em",
            color: catText,
            background: catBg,
            border: `1px solid ${catText.replace("0.9", "0.25")}`,
            padding: "2px 10px",
            borderRadius: "999px",
            alignSelf: "flex-start",
          }}
        >
          {web.category}
        </span>

        {/* Title + subtitle */}
        <div>
          <h3
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              lineHeight: 1.3,
              color: hovered ? "#ffffff" : "rgba(255,255,255,0.9)",
              margin: 0,
              marginBottom: "4px",
              transition: "color 0.3s ease",
            }}
          >
            {web.title}
          </h3>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.4)",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {web.subtitle}
          </p>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.65,
            margin: 0,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {web.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {coreTags(web.tags).map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "monospace",
                fontSize: "0.62rem",
                color: "rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "2px 9px",
                borderRadius: "999px",
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "8px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.06em",
              color: hovered ? "rgba(165,180,252,1)" : "rgba(99,102,241,0.8)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.3s ease",
            }}
          >
            View Project
            <span
              style={{
                display: "inline-block",
                transform: hovered ? "translateX(4px)" : "translateX(0)",
                transition: "transform 0.3s ease",
              }}
            >
              →
            </span>
          </span>
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: hovered ? "rgba(99,102,241,1)" : "rgba(255,255,255,0.15)",
              transition: "background 0.3s ease",
            }}
          />
        </div>
      </div>
    </Link>
  )
}

// ─── GAME PROJECT CARD ───────────────────────────────────────────────────────

function GameProjectCard({ game }) {
  const [hovered, setHovered] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [srcLoaded, setSrcLoaded] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    if (!srcLoaded) {
      v.src = game.video
      setSrcLoaded(true)
    }
    if (playing) {
      v.pause()
      setPlaying(false)
    } else {
      v.play()
      setPlaying(true)
    }
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        border: `1px solid ${hovered ? "rgba(236,72,153,0.45)" : "rgba(255,255,255,0.08)"}`,
        background: "rgba(13,17,23,0.85)",
        backdropFilter: "blur(12px)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(236,72,153,0.2), 0 24px 64px rgba(0,0,0,0.5), 0 0 48px rgba(236,72,153,0.08)"
          : "0 4px 24px rgba(0,0,0,0.25)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        height: "100%",
      }}
    >
      {/* Video thumbnail - 16:9 */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          flexShrink: 0,
          overflow: "hidden",
          background: "rgba(255,255,255,0.04)",
        }}
      >
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          poster={game.icon}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            filter: hovered ? "brightness(1.05)" : "brightness(0.88)",
            transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1), filter 0.4s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.3) 50%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            fontFamily: "monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            background: "rgba(13,17,23,0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "3px 10px",
            borderRadius: "999px",
          }}
        >
          {game.type}
        </div>
        <button
          onClick={togglePlay}
          aria-label={playing ? "Pause gameplay video" : "Play gameplay video"}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            opacity: hovered || playing ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: playing ? "rgba(13,17,23,0.75)" : "rgba(236,72,153,0.85)",
              border: `1px solid ${playing ? "rgba(255,255,255,0.15)" : "rgba(236,72,153,1)"}`,
              boxShadow: !playing ? "0 0 24px rgba(236,72,153,0.5)" : "none",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
            }}
          >
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="1" width="4" height="12" rx="1" fill="white" />
                <rect x="8" y="1" width="4" height="12" rx="1" fill="white" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 1.5L12 7L3 12.5V1.5Z" fill="white" />
              </svg>
            )}
          </div>
        </button>
        {playing && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "3px 10px",
              borderRadius: "6px",
              background: "rgba(13,17,23,0.75)",
              border: "1px solid rgba(236,72,153,0.35)",
              backdropFilter: "blur(8px)",
              fontFamily: "monospace",
              fontSize: "0.65rem",
              color: "rgba(249,168,212,0.9)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "rgba(236,72,153,1)",
                animation: "pulse 1.5s infinite",
              }}
            />
            Playing
          </div>
        )}
      </div>

      {/* Body */}
      <a
        href={game.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          flex: 1,
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            fontFamily: "monospace",
            letterSpacing: "0.06em",
            color: "rgba(249,168,212,0.9)",
            background: "rgba(236,72,153,0.1)",
            border: "1px solid rgba(249,168,212,0.25)",
            padding: "2px 10px",
            borderRadius: "999px",
            alignSelf: "flex-start",
          }}
        >
          {game.category}
        </span>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <img
            src={game.icon}
            alt={`${game.title} icon`}
            loading="lazy"
            decoding="async"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              objectFit: "cover",
              border: "1px solid rgba(255,255,255,0.1)",
              flexShrink: 0,
            }}
          />
          <div style={{ minWidth: 0 }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                lineHeight: 1.3,
                color: hovered ? "#ffffff" : "rgba(255,255,255,0.9)",
                margin: 0,
                marginBottom: "2px",
                transition: "color 0.3s ease",
              }}
            >
              {game.title}
            </h3>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "0.68rem",
                color: "rgba(255,255,255,0.35)",
                margin: 0,
              }}
            >
              {game.studio}
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.65,
            margin: 0,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {game.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {coreTags(game.tags, 4).map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "monospace",
                fontSize: "0.62rem",
                color: "rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "2px 9px",
                borderRadius: "999px",
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "8px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.25)",
              margin: 0,
            }}
          >
            {game.team}
          </p>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.68rem",
              color: hovered ? "rgba(249,168,212,1)" : "rgba(236,72,153,0.8)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.3s ease",
            }}
          >
            itch.io
            <span
              style={{
                display: "inline-block",
                transform: hovered ? "translateX(3px)" : "translateX(0)",
                transition: "transform 0.3s ease",
              }}
            >
              →
            </span>
          </span>
        </div>
      </a>
    </div>
  )
}

// ─── CAROUSEL ────────────────────────────────────────────────────────────────

function ProjectCarousel({ children, label }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    onSelect()
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  return (
    <div>
      {/* Controls row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <DotIndicators
          count={children.length}
          selected={selectedIndex}
          onSelect={scrollTo}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <ArrowButton
            direction="prev"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canPrev}
          />
          <ArrowButton
            direction="next"
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canNext}
          />
        </div>
      </div>

      {/* Embla viewport */}
      <div
        ref={emblaRef}
        style={{ overflow: "hidden" }}
        aria-label={label}
        role="region"
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            cursor: "grab",
            userSelect: "none",
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.cursor = "grabbing"
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.cursor = "grab"
          }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="carousel-slide"
              style={{
                flex: "0 0 calc((100% - 40px) / 3)",
                minWidth: 0,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Slide counter */}
      <p
        style={{
          textAlign: "right",
          fontFamily: "monospace",
          fontSize: "0.65rem",
          color: "rgba(255,255,255,0.2)",
          marginTop: "16px",
          letterSpacing: "0.08em",
        }}
      >
        {selectedIndex + 1} / {children.length}
      </p>
    </div>
  )
}

// ─── TABS DATA ────────────────────────────────────────────────────────────────

const tabs = [
  { key: "web", label: "Web Projects", count: webProjects.length },
  { key: "game", label: "Game Projects", count: gameProjects.length },
]

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const [active, setActive] = useState("web")

  return (
    <>
      <Navbar />

      {/* Ambient background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: -10,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            top: "25%",
            left: "-8%",
            borderRadius: "50%",
            background: "rgba(99,102,241,0.06)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            top: "60%",
            right: "-5%",
            borderRadius: "50%",
            background: "rgba(236,72,153,0.05)",
            filter: "blur(100px)",
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      {/* Responsive carousel breakpoints */}
      <style>{`
        @media (max-width: 767px) {
          .carousel-slide {
            flex: 0 0 100% !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .carousel-slide {
            flex: 0 0 calc((100% - 20px) / 2) !important;
          }
        }
        @media (min-width: 1024px) {
          .carousel-slide {
            flex: 0 0 calc((100% - 40px) / 3) !important;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      <main
        style={{
          minHeight: "100vh",
          padding: "144px 24px 96px",
        }}
        className="page-enter"
      >
        <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(165,180,252,0.85)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "32px",
                height: "1px",
                background: "rgba(165,180,252,0.85)",
              }}
            />
            Creative Works
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "40px",
              color: "rgba(255,255,255,0.95)",
            }}
          >
            Digital Projects
          </motion.h1>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "48px",
            }}
          >
            {tabs.map((tab) => {
              const isActive = active === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  aria-pressed={isActive}
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                    padding: "10px 20px",
                    borderRadius: "999px",
                    border: `1px solid ${isActive ? "rgba(99,102,241,0.8)" : "rgba(255,255,255,0.1)"}`,
                    color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                    background: isActive ? "rgba(99,102,241,0.85)" : "transparent",
                    boxShadow: isActive ? "0 0 20px rgba(99,102,241,0.35)" : "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {tab.label}
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.6rem",
                      background: isActive ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
                      color: isActive ? "#fff" : "rgba(255,255,255,0.3)",
                      padding: "2px 7px",
                      borderRadius: "999px",
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </motion.div>

          {/* Carousel content */}
          <AnimatePresence mode="wait">
            {active === "web" && (
              <motion.div
                key="web"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCarousel label="Web project gallery">
                  {webProjects.map((web) => (
                    <WebProjectCard key={web.slug} web={web} />
                  ))}
                </ProjectCarousel>
              </motion.div>
            )}

            {active === "game" && (
              <motion.div
                key="game"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCarousel label="Game project gallery">
                  {gameProjects.map((game) => (
                    <GameProjectCard key={game.title} game={game} />
                  ))}
                </ProjectCarousel>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>
    </>
  )
}