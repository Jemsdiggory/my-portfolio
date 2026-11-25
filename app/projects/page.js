"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "../components/Navbar"
import { getOrderedWebProjects, gameProjects } from "./projectsData"
import {
  CATEGORY_COLORS,
  CATEGORY_TEXT,
  TYPE_COLORS,
  TYPE_TEXT,
  coreTags,
  withAlpha,
} from "./styleTokens"

// ─── DATA ────────────────────────────────────────────────────────────────────

const webProjects = getOrderedWebProjects()

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
        border: `1px solid ${disabled ? "var(--ui-color-bfeccfcf)" : "var(--ui-color-d3979015)"}`,
        background: disabled ? "var(--ui-color-74b76757)" : "var(--ui-color-24eed0aa)",
        color: disabled ? "var(--ui-color-a5a9c1a4)" : "var(--ui-color-91f8091b)",
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
          el.style.background = "var(--ui-color-5244f807)"
          el.style.boxShadow = "0 0 16px var(--ui-color-0d332c90)"
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = disabled ? "var(--ui-color-74b76757)" : "var(--ui-color-24eed0aa)"
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
          background: "var(--ui-color-f8200947)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: "999px",
            background: "var(--accent, var(--ui-color-8e1a3019))",
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
            background: i === selected ? "var(--ui-color-91f8091b)" : "var(--ui-color-a5a9c1a4)",
            cursor: "pointer",
            padding: 0,
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  )
}

// ─── THUMBNAIL PLACEHOLDER ───────────────────────────────────────────────────
// Used when a project has no real thumbnail asset yet (proposal/concept
// projects awaiting uploaded artwork). Keeps the card layout intentional
// instead of a broken next/image request.

function ThumbnailPlaceholder({ title, hovered }) {
  const initials = title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at 30% 20%, var(--ui-color-cdd03946), transparent 55%), var(--ui-color-84da7a19)",
        transform: hovered ? "scale(1.04)" : "scale(1)",
        transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <span
        style={{
          fontWeight: 800,
          fontSize: "2.6rem",
          letterSpacing: "-0.03em",
          color: "var(--ui-color-0e74138b)",
        }}
      >
        {initials}
      </span>
    </div>
  )
}

// ─── WEB PROJECT CARD ────────────────────────────────────────────────────────

function WebProjectCard({ web }) {
  const [hovered, setHovered] = useState(false)

  const catBg = CATEGORY_COLORS[web.category] || "var(--ui-color-24eed0aa)"
  const catText = CATEGORY_TEXT[web.category] || "var(--ui-color-555a7f09)"
  const typeText = TYPE_TEXT[web.type] || "var(--ui-color-a7d7499c)"
  const typeBg = TYPE_COLORS[web.type] || "var(--ui-color-e9ea3e30)"
  const showStatus = web.status && web.status !== "Live Product"

  return (
    <Link
      className="project-card"
      href={`/projects/${web.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        border: `1px solid ${hovered ? "var(--ui-color-371bc22f)" : "var(--ui-color-bfeccfcf)"}`,
        background: "var(--ui-color-7c957a57)",
        backdropFilter: "blur(12px)",
        boxShadow: hovered
          ? "0 0 0 1px var(--ui-color-9d2906c1), 0 24px 64px var(--ui-color-4c46ca18), 0 0 48px var(--ui-color-a5a6f8d9)"
          : "0 4px 24px var(--ui-color-7371e081)",
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
          background: "var(--ui-color-84da7a19)",
        }}
      >
        {web.thumbnail ? (
          <Image
            src={web.thumbnail}
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
        ) : (
          <ThumbnailPlaceholder title={web.title} hovered={hovered} />
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, var(--ui-color-fde58898) 0%, var(--ui-color-96debd05) 50%, transparent 100%)",
          }}
        />
        {hovered && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              boxShadow: "inset 0 0 60px var(--ui-color-24eed0aa)",
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
            color: typeText,
            background: typeBg,
            backdropFilter: "blur(8px)",
            border: `1px solid ${withAlpha(typeText, "40")}`,
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
        {/* Category + status badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          <span
            className="project-tag"
            style={{
              fontSize: "0.65rem",
              fontFamily: "monospace",
              letterSpacing: "0.06em",
              color: catText,
              background: catBg,
              border: `1px solid ${withAlpha(catText, "40")}`,
              padding: "2px 10px",
              borderRadius: "999px",
              alignSelf: "flex-start",
            }}
          >
            {web.category}
          </span>
          {showStatus && (
            <span
              className="project-tag"
              style={{
                fontSize: "0.65rem",
                fontFamily: "monospace",
                letterSpacing: "0.06em",
                color: "var(--ui-color-2f59e747)",
                background: "var(--ui-color-85f89ec1)",
                border: "1px solid var(--ui-color-e8db4790)",
                padding: "2px 10px",
                borderRadius: "999px",
                alignSelf: "flex-start",
              }}
            >
              {web.status}
            </span>
          )}
        </div>

        {/* Title + subtitle */}
        <div>
          <h3
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              lineHeight: 1.3,
              color: hovered ? "var(--ui-color-c659d630)" : "var(--ui-color-0752d421)",
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
              color: "var(--ui-color-2f59e747)",
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
            color: "var(--ui-color-829bbf7d)",
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
                color: "var(--ui-color-2f59e747)",
                background: "var(--ui-color-85f89ec1)",
                border: "1px solid var(--ui-color-f8200947)",
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
            borderTop: "1px solid var(--ui-color-e9ea3e30)",
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.06em",
              color: hovered ? "var(--ui-color-91f8091b)" : "var(--ui-color-cec2617b)",
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
              background: hovered ? "var(--ui-color-87ec575f)" : "var(--ui-color-274c1329)",
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
    if (game.youtubeId) {
      setPlaying((current) => !current)
      return
    }
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
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        border: `1px solid ${hovered ? "var(--ui-color-c822920e)" : "var(--ui-color-bfeccfcf)"}`,
        background: "var(--ui-color-7c957a57)",
        backdropFilter: "blur(12px)",
        boxShadow: hovered
          ? "0 0 0 1px var(--ui-color-0907fac3), 0 24px 64px var(--ui-color-4c46ca18), 0 0 48px var(--ui-color-51321010)"
          : "0 4px 24px var(--ui-color-7371e081)",
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
          background: "var(--ui-color-84da7a19)",
        }}
      >
        {game.youtubeId && playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${game.youtubeId}?autoplay=1&playsinline=1&rel=0`}
            title={`${game.title} gameplay`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        ) : !game.youtubeId ? (
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="none"
            poster={game.icon || undefined}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: game.videoFit || "cover",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              filter: hovered ? "brightness(1.05)" : "brightness(0.88)",
              transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1), filter 0.4s ease",
            }}
          />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeContent: "center", textAlign: "center", background: "linear-gradient(135deg,var(--ui-color-b3069486),var(--ui-color-3d9527ff),var(--ui-color-7a2fb719))", fontFamily: "monospace", color: "white" }}>
            <span style={{ color: "var(--ui-color-872602fc)", fontSize: "0.65rem", letterSpacing: "0.2em" }}>GEPHIUM / ANDROID</span>
            <strong style={{ fontSize: "1.5rem", marginTop: "0.5rem" }}>B4ND UP!!</strong>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, var(--ui-color-fde58898) 0%, var(--ui-color-96debd05) 50%, transparent 100%)",
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
            color: "var(--ui-color-a7d7499c)",
            background: "var(--ui-color-cf9f07dc)",
            backdropFilter: "blur(8px)",
            border: "1px solid var(--ui-color-f8200947)",
            padding: "3px 10px",
            borderRadius: "999px",
          }}
        >
          {game.type}
        </div>
        {!(game.youtubeId && playing) && <button
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
              background: playing ? "var(--ui-color-2824b59c)" : "var(--ui-color-beeb66fb)",
              border: `1px solid ${playing ? "var(--ui-color-274c1329)" : "var(--ui-color-984aa7eb)"}`,
              boxShadow: !playing ? "0 0 24px var(--ui-color-a5eb6093)" : "none",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
            }}
          >
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="1" width="4" height="12" rx="1" fill="currentColor" />
                <rect x="8" y="1" width="4" height="12" rx="1" fill="currentColor" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 1.5L12 7L3 12.5V1.5Z" fill="currentColor" />
              </svg>
            )}
          </div>
        </button>}
        {playing && !game.youtubeId && (
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
              background: "var(--ui-color-2824b59c)",
              border: "1px solid var(--ui-color-2375376d)",
              backdropFilter: "blur(8px)",
              fontFamily: "monospace",
              fontSize: "0.65rem",
              color: "var(--ui-color-3ed3f3c6)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--ui-color-984aa7eb)",
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
            color: "var(--ui-color-3ed3f3c6)",
            background: "var(--ui-color-196ae5cd)",
            border: "1px solid var(--ui-color-21e9325f)",
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
              border: "1px solid var(--ui-color-f8200947)",
              flexShrink: 0,
            }}
          />
          <div style={{ minWidth: 0 }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                lineHeight: 1.3,
                color: hovered ? "var(--ui-color-c659d630)" : "var(--ui-color-0752d421)",
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
                color: "var(--ui-color-572ab423)",
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
            color: "var(--ui-color-829bbf7d)",
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
                color: "var(--ui-color-2f59e747)",
                background: "var(--ui-color-85f89ec1)",
                border: "1px solid var(--ui-color-f8200947)",
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
            borderTop: "1px solid var(--ui-color-e9ea3e30)",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.65rem",
              color: "var(--ui-color-43bcc076)",
              margin: 0,
            }}
          >
            {game.team}
          </p>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.68rem",
              color: hovered ? "var(--ui-color-1c059709)" : "var(--ui-color-8e508692)",
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
    const initialFrame = requestAnimationFrame(onSelect)
    return () => {
      cancelAnimationFrame(initialFrame)
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
          color: "var(--ui-color-a5a9c1a4)",
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
            background: "var(--ui-color-c84988b8)",
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
            background: "var(--ui-color-c57ba182)",
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
              color: "var(--ui-color-120b98f3)",
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
                background: "var(--ui-color-120b98f3)",
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
              color: "var(--ui-color-a8487651)",
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
                    border: `1px solid ${isActive ? "var(--ui-color-cec2617b)" : "var(--ui-color-f8200947)"}`,
                    color: isActive ? "var(--ui-color-d14f9016)" : "var(--ui-color-2f59e747)",
                    background: isActive ? "var(--ui-color-1036a212)" : "transparent",
                    boxShadow: isActive ? "0 0 20px var(--ui-color-0d332c90)" : "none",
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
                      background: isActive ? "var(--ui-color-a5a9c1a4)" : "var(--ui-color-bfeccfcf)",
                      color: isActive ? "var(--ui-color-d14f9016)" : "var(--ui-color-338f97ac)",
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
