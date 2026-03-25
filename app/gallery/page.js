"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "../components/Navbar"

const galleryData = {
  "2D Art": [
    "/gallery/2d/CharEkspresi.png",
    "/gallery/2d/CongklakAdventure.png",
    "/gallery/2d/DesainSenjataJems.png",
    "/gallery/2d/KarakterAnimasi1.png",
    "/gallery/2d/KarakterAnimasi2.jpg",
    "/gallery/2d/KarakterAnimasi3.jpg",
    "/gallery/2d/kuyangJems.png",
    "/gallery/2d/Nova.jpg",
    "/gallery/2d/Orion.jpg",
    "/gallery/2d/pocongJems.png",
    "/gallery/2d/snoutedJems.png",
  ],
  "GIF": [
    "/gallery/gif/Api-gif.gif",
    "/gallery/gif/jamurians.gif",
    "/gallery/gif/jamuriansBerkaki.gif",
    "/gallery/gif/jamuriansLoncat.gif",
  ],
  "3D Art": [
    "/gallery/3d/3d.png",
    "/gallery/3d/3dMejaMakan.png",
    "/gallery/3d/3dMejaMakan+Texture.png",
    "/gallery/3d/3dModularRumah.png",
  ],
}

const tabs = Object.keys(galleryData)

export default function GalleryPage() {
  const [active, setActive] = useState(tabs[0])
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <Navbar />

      {/* ambient */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div
          className="absolute rounded-full blur-[130px] opacity-10"
          style={{ width: 500, height: 500, bottom: "10%", right: "10%", background: "var(--accent3)" }}
        />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <main className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 pt-36 pb-24 page-enter">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
            style={{ color: "var(--accent2)" }}
          >
            <span className="inline-block w-8 h-px" style={{ background: "var(--accent2)" }} />
            Creative Work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold mb-12"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Gallery
          </motion.h1>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-12"
          >
            {tabs.map((tab) => {
              const isActive = active === tab
              return (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className="btn-glow relative font-mono text-sm px-5 py-2 rounded-full border transition-all duration-300"
                  style={{
                    borderColor: isActive ? "var(--accent)" : "var(--border)",
                    color: isActive ? "#fff" : "var(--text-muted)",
                    background: isActive ? "var(--accent)" : "transparent",
                    boxShadow: isActive ? "0 0 16px rgba(123,108,255,0.35)" : "none",
                  }}
                >
                  {tab}
                  {isActive && (
                    <span
                      className="ml-2 font-mono text-xs opacity-70"
                      style={{ color: isActive ? "rgba(255,255,255,0.7)" : "var(--text-dim)" }}
                    >
                      {galleryData[tab].length}
                    </span>
                  )}
                </button>
              )
            })}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35 }}
              className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            >
              {galleryData[active].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setLightbox(src)}
                  className="group relative overflow-hidden rounded-xl cursor-pointer border"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                    aspectRatio: "1 / 1",
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: "rgba(123,108,255,0.15)", backdropFilter: "blur(2px)" }}
                  >
                    <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.8)" }}>
                      View
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 cursor-pointer"
            style={{ background: "rgba(8, 8, 16, 0.92)", backdropFilter: "blur(12px)" }}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightbox}
              alt=""
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              style={{ boxShadow: "0 0 60px rgba(123,108,255,0.3)", border: "1px solid var(--border)" }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-8 font-mono text-2xl"
              style={{ color: "var(--text-muted)" }}
              onClick={() => setLightbox(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}