"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { gameProjects, webProjects } from "../projects/projectsData"

// TODO: Tune these proficiency values to match your current skills.
const CLASS_STATS = {
  game: [
    { label: "Gameplay Programming", value: 88 },
    { label: "Game Design", value: 78 },
    { label: "Unity / Engine", value: 84 },
    { label: "Multiplayer", value: 42 },
  ],
  design: [
    { label: "Frontend Engineering", value: 86 },
    { label: "UX Research", value: 78 },
    { label: "Design Systems", value: 76 },
    { label: "Prototyping", value: 90 },
  ],
}

const tracks = [
  { id: "game", title: "GAME DEVELOPER", subtitle: "Gameplay Programmer + Game Designer", href: "/game-dev" },
  { id: "design", title: "DESIGN ENGINEER", subtitle: "Frontend Engineering + UX", href: "/design-engineer" },
]

function readTrack() {
  try {
    return localStorage.getItem("jems-track") === "design" ? "design" : "game"
  } catch {
    return "game"
  }
}

export default function ClassSelect() {
  const router = useRouter()
  const reducedMotion = useReducedMotion()
  const [selected, setSelected] = useState("game")
  const [locked, setLocked] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const lockTimer = useRef(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setSelected(readTrack())
      setIsTouch(window.matchMedia("(pointer: coarse)").matches)
    })
    return () => {
      clearTimeout(lockTimer.current)
      cancelAnimationFrame(frame)
    }
  }, [])

  const confirm = useCallback((track = selected) => {
    try { localStorage.setItem("jems-track", track) } catch { /* Storage may be disabled. */ }
    if (reducedMotion) {
      router.push(tracks.find((item) => item.id === track).href)
      return
    }
    setSelected(track)
    setLocked(true)
    lockTimer.current = setTimeout(() => router.push(tracks.find((item) => item.id === track).href), 320)
  }, [reducedMotion, router, selected])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (["ArrowLeft", "a", "A"].includes(event.key)) setSelected("game")
      if (["ArrowRight", "d", "D"].includes(event.key)) setSelected("design")
      if (event.key === "Enter" && !event.target.closest("a")) confirm()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [confirm])

  const firstGame = gameProjects[0]
  const designProjects = Object.values(webProjects)
  const gameCount = gameProjects.length
  const designCount = designProjects.length

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden px-5 py-12 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(123,108,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(123,108,255,.08) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="relative z-10 w-full max-w-6xl">
        <header className="text-center mb-9">
          <p className="font-mono text-xs tracking-[.3em] uppercase text-violet-300 mb-4">Kahlaa Aulia Jemima</p>
          <h1 className="font-display font-extrabold tracking-tight text-4xl sm:text-6xl">HIRE ME AS?</h1>
          <p className="font-mono text-sm text-white/55 mt-3">Select a class to continue</p>
        </header>

        <div role="radiogroup" aria-label="Choose a portfolio track" className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-5 items-stretch">
          {tracks.map((track) => {
            const active = selected === track.id
            const isGame = track.id === "game"
            const stats = CLASS_STATS[track.id]
            return (
              <motion.button key={track.id} type="button" role="radio" aria-checked={active} onMouseEnter={() => setSelected(track.id)} onFocus={() => setSelected(track.id)} onClick={() => (isTouch && !active) ? setSelected(track.id) : confirm(track.id)}
                animate={{ scale: active ? (isGame ? 1.02 : 1) : 0.98, borderColor: active ? "rgba(123,108,255,.9)" : "rgba(255,255,255,.12)" }}
                transition={{ duration: reducedMotion ? 0 : 0.2 }}
                className={`group text-left rounded-3xl border bg-[#10111b]/95 p-5 sm:p-7 outline-none focus-visible:ring-4 focus-visible:ring-cyan-300 ${active ? "shadow-[0_0_45px_rgba(123,108,255,.2)]" : ""}`}>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div><p className="font-mono text-[10px] tracking-[.25em] text-violet-300 mb-2">{isGame ? "CLASS 01 / PRIMARY" : "CLASS 02 / SECONDARY"}</p><h2 className="font-display font-bold text-2xl sm:text-3xl">{track.title}</h2><p className="font-mono text-xs sm:text-sm text-white/55 mt-2">{track.subtitle}</p></div>
                  <span className={`shrink-0 mt-1 h-4 w-4 rounded-full border ${active ? "border-cyan-300 bg-cyan-300 shadow-[0_0_12px_#67e8f9]" : "border-white/40"}`} />
                </div>
                <div className="relative overflow-hidden rounded-2xl h-40 sm:h-48 mb-6 bg-black/40">
                  {isGame ? firstGame.youtubeId ? <img src={`https://i.ytimg.com/vi/${firstGame.youtubeId}/hqdefault.jpg`} alt={`${firstGame.title} gameplay preview`} loading="lazy" className="h-full w-full object-cover" /> /* eslint-disable-line @next/next/no-img-element */ : <video src={firstGame.video} poster={firstGame.icon || undefined} muted loop playsInline autoPlay className="h-full w-full object-cover" /> : <Image src={webProjects["kemen-lh"].thumbnail} alt="Kemen LH project preview" fill sizes="(max-width: 1024px) 90vw, 50vw" className="object-cover" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-4 font-mono text-[10px] tracking-widest text-white/80">{isGame ? firstGame.title : "KEMEN LH / UX PROPOSAL"}</span>
                </div>
                <div className="space-y-3 mb-6">
                  {stats.map((stat) => <div key={stat.label}><div className="flex justify-between font-mono text-[10px] uppercase tracking-wide mb-1.5"><span>{stat.label}</span><span className="text-white/45">{stat.value}%</span></div><div className="h-1.5 rounded-full bg-white/10 overflow-hidden"><motion.div key={`${track.id}-${active}`} className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-300" initial={{ width: active ? 0 : `${stat.value}%`, opacity: active ? 1 : 0.35 }} animate={{ width: `${stat.value}%`, opacity: active ? 1 : 0.35 }} transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion || !active ? 0 : 0.08 }} /></div></div>)}
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between items-center font-mono text-xs"><span className="text-white/55">{isGame ? `${gameCount} games shipped` : `${designCount} web projects`}</span><span className="text-cyan-200">{active ? "SELECTED" : "SELECT"}</span></div>
              </motion.button>
            )
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-6 font-mono text-xs">
          <a href="/game-dev" onClick={() => { try { localStorage.setItem("jems-track", "game") } catch {} }} className="text-white/50 hover:text-cyan-200 underline underline-offset-4">Skip to Game Dev</a>
          <a href="/design-engineer" onClick={() => { try { localStorage.setItem("jems-track", "design") } catch {} }} className="text-white/50 hover:text-cyan-200 underline underline-offset-4">Skip to Design Engineer</a>
        </div>
        {isTouch && <button onClick={() => confirm()} className="mt-6 w-full rounded-xl bg-cyan-300 px-6 py-4 font-mono text-sm font-bold tracking-widest text-slate-950">{locked ? "CLASS LOCKED" : "CONFIRM"}</button>}
        {locked && !reducedMotion && <div role="status" className="fixed inset-0 z-20 grid place-items-center pointer-events-none bg-black/70 font-mono text-2xl sm:text-4xl font-bold tracking-[.3em] text-cyan-200">CLASS LOCKED</div>}
        {!isTouch && <p className="text-center font-mono text-[10px] tracking-[.2em] text-white/40 mt-9">← → SELECT&nbsp;&nbsp;&nbsp; ENTER CONFIRM</p>}
      </div>
    </main>
  )
}
