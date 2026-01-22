"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const galleryData = {
  "2d": [
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
  gif: [
    "/gallery/gif/Api-gif.gif",
    "/gallery/gif/jamurians.gif",
    "/gallery/gif/jamuriansBerkaki.gif",
    "/gallery/gif/jamuriansLoncat.gif",
  ],
  "3d": [
    "/gallery/3d/3d.png",
    "/gallery/3d/3dMejaMakan.png",
    "/gallery/3d/3dMejaMakan+Texture.png",
    "/gallery/3d/3dModularRumah.png",
  ],
}

const tabs = ["2d", "gif", "3d"]

export default function Gallery() {
  const [active, setActive] = useState("2d")

  return (
    <section
      id="gallery"
      className="px-6 py-32 bg-zinc-950 text-white"
    >
      {/* wrapper animasi section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >

        {/* header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-10 text-center"
        >
          Gallery
        </motion.h2>

        {/* tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`
                px-5 py-2 rounded-full text-sm transition
                ${active === tab
                  ? "bg-blue-400 text-white"
                  : "border border-zinc-700 text-zinc-400 hover:text-white"}
              `}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="
              grid gap-6
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
            "
          >
            {galleryData[active].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-xl bg-zinc-900 cursor-pointer"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </motion.div>
    </section>
  )
}
