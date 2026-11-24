"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function GameVideo({ game }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "100px" })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className="relative aspect-video bg-black/40">
    {game.youtubeId && inView
      ? <iframe src={`https://www.youtube.com/embed/${game.youtubeId}?playsinline=1&rel=0`} title={`${game.title} gameplay`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
      : game.video && inView
      ? <video src={game.video} poster={game.icon || undefined} muted loop playsInline autoPlay className="h-full w-full object-cover" />
      : game.icon
        ? <Image src={game.icon} alt={`${game.title} artwork`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        : <div className="absolute inset-0 grid place-content-center text-center bg-gradient-to-br from-fuchsia-950 via-[#10111b] to-cyan-950"><span className="font-mono text-[10px] tracking-[.3em] text-cyan-200">GEPHIUM / ANDROID</span><span className="font-display text-3xl font-bold mt-2">B4ND UP!!</span></div>}
  </div>
}
