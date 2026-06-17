"use client"

import React, { use, useState, useRef, useEffect } from "react"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "../../components/Navbar"
import { webProjects } from "../projectsData"
import {
  TYPE_COLORS,
  TYPE_TEXT,
  CATEGORY_COLORS,
  CATEGORY_TEXT,
  STATUS_COLORS,
  STATUS_TEXT,
  tagColor,
} from "../styleTokens"

// ── Auto-scrolling preview for a single tall screenshot. Pauses on hover. ──
function ScrollPreview({ src, alt }) {
  const containerRef = useRef(null)
  const animRef = useRef(null)
  const posRef = useRef(0)
  const pausedRef = useRef(false)
  const [ready, setReady] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const speed = 0.5

    const tick = () => {
      if (!pausedRef.current) {
        const max = el.scrollHeight - el.clientHeight
        if (max <= 0) {
          animRef.current = requestAnimationFrame(tick)
          return
        }
        posRef.current += speed
        if (posRef.current >= max) posRef.current = 0
        el.scrollTop = posRef.current
        setProgress(posRef.current / max)
      }
      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [ready])

  const handleScroll = () => {
    const el = containerRef.current
    if (!el) return
    const max = el.scrollHeight - el.clientHeight
    if (max > 0) {
      posRef.current = el.scrollTop
      setProgress(el.scrollTop / max)
    }
  }

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
        className="w-full overflow-y-scroll hide-scroll"
        style={{ height: "520px", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`.hide-scroll::-webkit-scrollbar{display:none}`}</style>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-auto block"
          onLoad={() => setReady(true)}
        />
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
        <div
          className="w-full rounded-full"
          style={{ height: `${progress * 100}%`, background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
        />
      </div>

      {ready && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs px-3 py-1.5 rounded-lg pointer-events-none"
          style={{
            background: "rgba(13,17,23,0.8)",
            color: "var(--text-muted)",
            border: "1px solid var(--border)",
            backdropFilter: "blur(8px)",
            opacity: 0.8,
          }}
        >
          hover to pause · scroll to explore
        </div>
      )}
    </div>
  )
}

// ── Click-to-enlarge lightbox for the gallery grid. ──
function Lightbox({ images, index, onClose, onNavigate }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length)
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [index, images.length, onClose, onNavigate])

  if (index === null) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: "rgba(5,7,10,0.92)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 font-mono text-xs px-3 py-2 rounded-lg border"
        style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
      >
        close ✕
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + images.length) % images.length) }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border flex items-center justify-center"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)", background: "rgba(13,17,23,0.6)" }}
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % images.length) }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border flex items-center justify-center"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)", background: "rgba(13,17,23,0.6)" }}
          >
            ›
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-[88vw] object-contain rounded-xl"
        style={{ border: "1px solid var(--border)" }}
      />

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs px-3 py-1.5 rounded-lg"
        style={{ background: "rgba(13,17,23,0.8)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
      >
        {index + 1} / {images.length}
      </div>
    </div>
  )
}

export default function WebProjectDetail({ params }) {
  const { slug } = use(params)
  const project = webProjects[slug]
  if (!project) notFound()

  const [galleryIndex, setGalleryIndex] = useState(null)
  const heroImage = project.screenshots?.[0]

  return (
    <>
      <Navbar />

      <div className="fixed inset-0 pointer-events-none -z-10">
        <div
          className="absolute rounded-full blur-[120px] opacity-8"
          style={{ width: 500, height: 500, top: "20%", right: "-5%", background: "var(--accent)" }}
        />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <main className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 pt-36 pb-24 page-enter">
        <div className="max-w-5xl mx-auto">

          {/* back */}
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase mb-12 link-glow"
              style={{ color: "var(--text-muted)" }}
            >
              ← Back to Projects
            </Link>
          </motion.div>

          {/* ── Hero ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-16">

            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span
                className="font-mono text-xs px-3 py-1 rounded-full border"
                style={{ color: TYPE_TEXT[project.type], background: TYPE_COLORS[project.type], borderColor: `${TYPE_TEXT[project.type]}30` }}
              >
                {project.type}
              </span>
              <span
                className="font-mono text-xs px-3 py-1 rounded-full border"
                style={{ color: CATEGORY_TEXT[project.category], background: CATEGORY_COLORS[project.category], borderColor: `${CATEGORY_TEXT[project.category]}30` }}
              >
                {project.category}
              </span>
              <span
                className="font-mono text-xs px-3 py-1 rounded-full border"
                style={{ color: STATUS_TEXT[project.status], background: STATUS_COLORS[project.status], borderColor: `${STATUS_TEXT[project.status]}30` }}
              >
                {project.status}
              </span>
            </div>

            <h1
              className="font-display font-extrabold leading-tight mb-2"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em", color: "var(--text)" }}
            >
              {project.title}
            </h1>
            <p className="font-display text-xl mb-4" style={{ color: "var(--text-muted)" }}>
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-6 font-mono text-xs mb-8" style={{ color: "var(--text-dim)" }}>
              <span><span style={{ color: "var(--text-muted)" }}>Year</span> — {project.year}</span>
              <span><span style={{ color: "var(--text-muted)" }}>Role</span> — {project.role}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.techStack.map((t) => (
                <span
                  key={t.name}
                  className="font-mono text-xs px-2.5 py-1 rounded-lg border"
                  style={{ color: tagColor(t.name), background: `${tagColor(t.name)}18`, borderColor: `${tagColor(t.name)}30` }}
                >
                  {t.name}
                </span>
              ))}
            </div>

            {/* main image */}
            {heroImage ? (
              project.isMobile ? (
                <div className="flex justify-center">
                  <div
                    className="relative rounded-[2rem] overflow-hidden border-2"
                    style={{ width: "280px", borderColor: "var(--border)", background: "var(--surface2)", boxShadow: "0 0 40px rgba(99,102,241,0.12)" }}
                  >
                    <div
                      className="absolute top-3 left-1/2 -translate-x-1/2 z-10 rounded-full"
                      style={{ width: "60px", height: "10px", background: "var(--bg)" }}
                    />
                    <img src={heroImage} alt={project.title} loading="lazy" decoding="async" className="w-full h-auto block" />
                  </div>
                </div>
              ) : (
                <ScrollPreview src={heroImage} alt={project.title} />
              )
            ) : (
              <div
                className="relative w-full rounded-2xl overflow-hidden border flex flex-col items-center justify-center text-center px-8"
                style={{
                  height: "320px",
                  borderColor: "var(--border)",
                  background: "radial-gradient(circle at 30% 20%, rgba(99,102,241,0.16), transparent 55%), var(--surface2)",
                }}
              >
                <p className="font-mono text-xs max-w-xs" style={{ color: "var(--text-dim)" }}>
                  Prototype and supporting documentation available on request.
                </p>
              </div>
            )}
          </motion.div>

          {/* ── About the Project ── */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-16">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-6 flex items-center gap-3"
              style={{ color: "var(--text-dim)" }}
            >
              <span className="inline-block w-6 h-px" style={{ background: "var(--text-dim)" }} />
              About the Project
            </p>
            <p className="font-display text-lg leading-relaxed max-w-3xl" style={{ color: "var(--text-muted)" }}>
              {project.description}
            </p>
          </motion.div>

          {/* ── My Contributions ── */}
          {project.contributions?.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-16">
              <p
                className="font-mono text-xs tracking-widest uppercase mb-6 flex items-center gap-3"
                style={{ color: "var(--text-dim)" }}
              >
                <span className="inline-block w-6 h-px" style={{ background: "var(--text-dim)" }} />
                My Contributions
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.contributions.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border px-4 py-3"
                    style={{ borderColor: "var(--border)", background: "var(--surface2)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                    <span className="font-display text-sm" style={{ color: "var(--text)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Project Gallery ── */}
          {project.screenshots?.length > 1 && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-6 flex items-center gap-3"
                style={{ color: "var(--text-dim)" }}
              >
                <span className="inline-block w-6 h-px" style={{ background: "var(--text-dim)" }} />
                Project Gallery
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.screenshots.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setGalleryIndex(i)}
                    className="relative rounded-xl overflow-hidden border text-left"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto block"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </main>

      <Lightbox
        images={project.screenshots || []}
        index={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onNavigate={setGalleryIndex}
      />
    </>
  )
}