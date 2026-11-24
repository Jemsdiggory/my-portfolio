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
    {game.video && inView ? <video src={game.video} poster={game.icon} muted loop playsInline autoPlay className="h-full w-full object-cover" /> : <Image src={game.icon} alt={`${game.title} artwork`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />}
  </div>
}
