"use client"

import { useState, useRef, useEffect } from "react"
import { FaPlay, FaPause, FaMusic } from "react-icons/fa"


const SONG = {
  title: "Too Many Nights",
  artist: "Metro Boomin",
  src: "/music/musicJems.mp3",   
}

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTimeUpdate = () => {
      setProgress(audio.currentTime)
    }
    const onLoaded = () => {
      setDuration(audio.duration)
    }
    const onEnded = () => {
      setPlaying(false)
      setProgress(0)
    }

    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("loadedmetadata", onLoaded)
    audio.addEventListener("ended", onEnded)
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("loadedmetadata", onLoaded)
      audio.removeEventListener("ended", onEnded)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
    setPlaying(!playing)
  }

  const handleSeek = (e) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = x / rect.width
    audio.currentTime = pct * duration
    setProgress(pct * duration)
  }

  const fmt = (s) => {
    if (!s || isNaN(s)) return "0:00"
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, "0")}`
  }

  const pct = duration ? (progress / duration) * 100 : 0

  if (!visible) return null

  return (
    <>
      <audio ref={audioRef} src={SONG.src} preload="metadata" />

      <div
        className="fixed bottom-6 right-6 z-50"
        style={{ width: "260px" }}
      >
        <div
          className="rounded-2xl border p-4"
          style={{
            background: "rgba(22, 27, 34, 0.92)",
            backdropFilter: "blur(16px)",
            borderColor: "var(--border)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          {/* top row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 min-w-0">
              {/* equalizer animation when playing */}
              <div className="flex items-end gap-0.5 flex-shrink-0" style={{ height: "14px" }}>
                {[1, 2, 3].map((bar) => (
                  <div
                    key={bar}
                    className="w-0.5 rounded-full"
                    style={{
                      background: "var(--accent)",
                      height: playing ? `${[60, 100, 40][bar - 1]}%` : "30%",
                      transition: "height 0.3s ease",
                      animation: playing ? `eq-bar-${bar} 0.8s ease-in-out infinite alternate` : "none",
                    }}
                  />
                ))}
              </div>
              <div className="min-w-0">
                <p
                  className="font-mono text-xs font-medium truncate"
                  style={{ color: "var(--text)", maxWidth: "140px" }}
                >
                  {SONG.title}
                </p>
                <p
                  className="font-mono text-xs truncate"
                  style={{ color: "var(--text-muted)", maxWidth: "140px" }}
                >
                  {SONG.artist}
                </p>
              </div>
            </div>

            {/* close */}
            <button
              onClick={() => setVisible(false)}
              className="flex-shrink-0 ml-2"
              style={{ color: "var(--text-dim)", fontSize: "1rem", lineHeight: 1 }}
            >
              ×
            </button>
          </div>

          {/* progress bar */}
          <div
            onClick={handleSeek}
            className="relative w-full rounded-full cursor-pointer mb-2"
            style={{ height: "3px", background: "var(--surface2)" }}
          >
            <div
              className="absolute left-0 top-0 h-full rounded-full transition-all duration-100"
              style={{
                width: `${pct}%`,
                background: "var(--accent)",
                boxShadow: "0 0 6px var(--accent)",
              }}
            />
          </div>

          {/* bottom row: time + play */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>
              {fmt(progress)} / {fmt(duration)}
            </span>

            <button
              onClick={togglePlay}
              className="flex items-center justify-center rounded-full transition-all duration-300"
              style={{
                width: "28px",
                height: "28px",
                background: "var(--accent)",
                boxShadow: playing ? "0 0 12px var(--accent)" : "none",
                color: "#fff",
                fontSize: "0.65rem",
              }}
            >
              {playing ? <FaPause /> : <FaPlay style={{ marginLeft: "1px" }} />}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes eq-bar-1 { from { height: 20% } to { height: 80% } }
        @keyframes eq-bar-2 { from { height: 60% } to { height: 100% } }
        @keyframes eq-bar-3 { from { height: 30% } to { height: 60% } }
      `}</style>
    </>
  )
}