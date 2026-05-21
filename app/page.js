"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  FaInstagram, FaLinkedin, FaDiscord, FaGithub, FaYoutube, FaGitlab,
} from "react-icons/fa"
import { SiItchdotio } from "react-icons/si"
import Navbar from "./components/Navbar"
import CountUp from "./components/CountUp"

const roles = ["Creative Developer"]

const socials = [
  { icon: FaGithub,    url: "https://github.com/JemsDiggory",   label: "github"    },
  { icon: FaLinkedin,  url: "https://linkedin.com/in/jemima05", label: "linkedin"  },
  { icon: SiItchdotio, url: "https://jemsdiggory.itch.io",      label: "itch.io"   },
  { icon: FaInstagram, url: "https://instagram.com/jeymss00",   label: "instagram" },
  { icon: FaGitlab,    url: "https://gitlab.com/jemimadiggory", label: "gitlab"    },
]

const projects = [
  {
    badge: "Game Project",
    title: "Rise Against",
    desc: "2D RPG about environmental issues. Programmed quest systems, AI & combat, dialogue, and inventory management. PC Platform.",
    tags: ["Unity", "2D", "RPG"],
    stat: "2D RPG",
    accentColor: "#7b6cff",
    thumbGradient: "linear-gradient(135deg, rgba(123,108,255,0.2) 0%, rgba(61,255,209,0.1) 100%)",
    gridColor: "rgba(123,108,255,0.08)",
    barColors: ["rgba(123,108,255,0.6)", "rgba(61,255,209,0.4)", "rgba(123,108,255,0.35)"],
    tagStyles: [
      { bg: "rgba(123,108,255,0.12)", color: "#a99fff", border: "rgba(123,108,255,0.25)" },
      { bg: "rgba(123,108,255,0.12)", color: "#a99fff", border: "rgba(123,108,255,0.25)" },
      { bg: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", border: "rgba(255,255,255,0.1)" },
    ],
  },
  {
    badge: "Web App",
    title: "Mini CMS",
    desc: "Game blog with CMS features including full CRUD operations and WYSIWYG editor. Built with PHP and MySQL for content management.",
    tags: ["PHP", "MySQL", "Vanilla JS"],
    stat: "PHP/MySQL",
    accentColor: "#3dffd1",
    thumbGradient: "linear-gradient(135deg, rgba(61,255,209,0.15) 0%, rgba(123,108,255,0.1) 100%)",
    gridColor: "rgba(61,255,209,0.07)",
    barColors: ["rgba(61,255,209,0.5)", "rgba(123,108,255,0.35)", "rgba(61,255,209,0.3)"],
    tagStyles: [
      { bg: "rgba(61,255,209,0.1)",  color: "#3dffd1", border: "rgba(61,255,209,0.22)"  },
      { bg: "rgba(61,255,209,0.1)",  color: "#3dffd1", border: "rgba(61,255,209,0.22)"  },
      { bg: "rgba(6,182,212,0.08)",  color: "#67e8f9", border: "rgba(6,182,212,0.2)"    },
    ],
  },
  {
    badge: "UI/UX Design",
    title: "OneBox Portal",
    desc: "Modern UI/UX redesign and marketing-driven copywriting for the OneBox portal. Transformed a legacy product page into a interactive business platform.",
    tags: ["Laravel", "PHP", "CSS"],
    stat: "Portal UI",
    accentColor: "#ff6b8a",
    thumbGradient: "linear-gradient(135deg, rgba(255,107,138,0.15) 0%, rgba(123,108,255,0.1) 100%)",
    gridColor: "rgba(255,107,138,0.07)",
    barColors: ["rgba(255,107,138,0.5)", "rgba(123,108,255,0.35)", "rgba(255,107,138,0.3)"],
    tagStyles: [
      { bg: "rgba(255,107,138,0.1)", color: "#ff6b8a", border: "rgba(255,107,138,0.22)" },
      { bg: "rgba(255,107,138,0.1)", color: "#ff6b8a", border: "rgba(255,107,138,0.22)" },
      { bg: "rgba(249,115,22,0.08)", color: "#fdba74", border: "rgba(249,115,22,0.2)"   },
    ],
  },
]

/* Social icon button */
function SocialIcon({ item, i, floatDir }) {
  const Icon = item.icon
  return (
    <motion.a
      key={item.label}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: 1,
        scale: 1,
        // desktop: float up/down  |  mobile: float left/right
        ...(floatDir === "y"
          ? { y: [0, i % 2 === 0 ? -5 : 5, 0] }
          : { x: [0, i % 2 === 0 ? -3 : 3, 0] }),
      }}
      transition={{
        opacity: { duration: 0.35, delay: 1.0 + i * 0.08 },
        scale:   { duration: 0.35, delay: 1.0 + i * 0.08 },
        y:       { duration: 3 + i * 0.35, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 },
        x:       { duration: 3 + i * 0.35, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 },
      }}
      whileHover={{ scale: 1.2 }}
      className="flex items-center justify-center rounded-xl border transition-colors duration-200"
      style={{
        width: "36px",
        height: "36px",
        flexShrink: 0,
        background: "rgba(255,255,255,0.03)",
        borderColor: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        color: "rgba(255,255,255,0.35)",
        fontSize: "0.9rem",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "var(--accent)"
        e.currentTarget.style.color       = "var(--accent)"
        e.currentTarget.style.background  = "rgba(123,108,255,0.12)"
        e.currentTarget.style.boxShadow   = "0 0 14px rgba(123,108,255,0.3)"
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
        e.currentTarget.style.color       = "rgba(255,255,255,0.35)"
        e.currentTarget.style.background  = "rgba(255,255,255,0.03)"
        e.currentTarget.style.boxShadow   = "none"
      }}
    >
      <Icon />
    </motion.a>
  )
}

/* desktop cards */
function SocialColumn() {
  return (
    <div className="hidden lg:flex flex-col items-center gap-3 pr-4">
      {/* up line */}
      <motion.div
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.12))", transformOrigin: "top" }}
      />
      {socials.map((item, i) => (
        <SocialIcon key={item.label} item={item} i={i} floatDir="y" />
      ))}
      {/* down line */}
      <motion.div
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(255,255,255,0.12), transparent)", transformOrigin: "top" }}
      />
    </div>
  )
}

/* mobile cards */
function SocialRow() {
  return (
    <div className="flex lg:hidden flex-wrap justify-center gap-2 mb-6">
      {socials.map((item, i) => (
        <SocialIcon key={item.label} item={item} i={i} floatDir="x" />
      ))}
    </div>
  )
}

/* Featured project card */
function FeaturedCard() {
  const [activeIdx, setActiveIdx] = useState(0)
  const proj = projects[activeIdx]

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-120, 120], [6, -6])
  const rotateY = useTransform(mouseX, [-120, 120], [-6, 6])

  return (
    <div className="flex flex-col items-center lg:items-end w-full">

      {/* mobile row */}
      <SocialRow />

      {/* desktop hori wrapper*/}
      <div className="flex items-center gap-0 w-full justify-end">

        {/* desktop vertical social column */}
        <SocialColumn />

        {/* card wrapper */}
        <div className="relative flex flex-col items-end">

          {/* ambient orbs */}
          <motion.div className="absolute rounded-full pointer-events-none"
            style={{ width:240, height:240, top:"-5%", right:"-6%", background:`radial-gradient(circle, ${proj.accentColor}28 0%, transparent 70%)`, filter:"blur(50px)" }}
            animate={{ y:[0,-18,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
          />
          <motion.div className="absolute rounded-full pointer-events-none"
            style={{ width:130, height:130, bottom:"15%", left:"-8%", background:"radial-gradient(circle, rgba(61,255,209,0.18) 0%, transparent 70%)", filter:"blur(32px)" }}
            animate={{ y:[0,14,0] }} transition={{ duration:8, repeat:Infinity, ease:"easeInOut", delay:1 }}
          />

          {/* label */}
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3 mr-1"
            style={{ color:"var(--text-muted)", opacity:0.45 }}>
            Featured Work
          </span>

          {/* card */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle:"preserve-3d", width:"320px", background:"rgba(255,255,255,0.03)", border:`1px solid ${proj.accentColor}30`, backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)", boxShadow:`0 8px 32px ${proj.accentColor}20, inset 0 1px 0 rgba(255,255,255,0.06)`, transition:"border-color 0.4s ease, box-shadow 0.4s ease" }}
            onMouseMove={e => {
              const rect = e.currentTarget.getBoundingClientRect()
              mouseX.set(e.clientX - rect.left  - rect.width  / 2)
              mouseY.set(e.clientY - rect.top   - rect.height / 2)
            }}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
            animate={{ y:[0,-14,0], rotate:[-0.5,0.3,-0.5] }}
            transition={{ duration:7, repeat:Infinity, ease:"easeInOut" }}
            className="relative rounded-2xl p-6"
          >
            <div className="absolute rounded-full pointer-events-none" style={{ width:60, height:60, top:-10, left:-10, background:`radial-gradient(circle, ${proj.accentColor}80 0%, transparent 70%)`, filter:"blur(10px)", opacity:0.5 }} />
            <div className="absolute rounded-full pointer-events-none" style={{ width:50, height:50, bottom:-8, right:-8, background:"radial-gradient(circle, rgba(61,255,209,0.6) 0%, transparent 70%)", filter:"blur(10px)", opacity:0.4 }} />

            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 font-mono text-[10px] uppercase tracking-widest"
              style={{ background:`${proj.accentColor}15`, border:`1px solid ${proj.accentColor}30`, color:proj.accentColor }}>
              <motion.span className="w-1.5 h-1.5 rounded-full" style={{ background:proj.accentColor }}
                animate={{ opacity:[1,0.4,1] }} transition={{ duration:2, repeat:Infinity }} />
              {proj.badge}
            </div>

            {/* tabs */}
            <div className="flex gap-2 mb-4">
              {projects.map((p,i) => (
                <button key={i} onClick={() => setActiveIdx(i)}
                  className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border transition-all duration-200"
                  style={{
                    background:  i===activeIdx ? `${p.accentColor}20` : "transparent",
                    borderColor: i===activeIdx ? `${p.accentColor}50` : "rgba(255,255,255,0.08)",
                    color:       i===activeIdx ? p.accentColor        : "rgba(255,255,255,0.3)",
                  }}>
                  {["Game","Web","UI"][i]}
                </button>
              ))}
            </div>

            {/* thumbnail */}
            <div className="relative w-full rounded-xl mb-4 overflow-hidden flex items-center justify-center"
              style={{ height:"130px", background:proj.thumbGradient, border:`1px solid ${proj.accentColor}15` }}>
              <div className="absolute inset-0" style={{ backgroundImage:`linear-gradient(${proj.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${proj.gridColor} 1px, transparent 1px)`, backgroundSize:"22px 22px" }} />
              <div className="absolute top-2 left-2.5 flex gap-1.5">
                {["#ef4444","#f59e0b","#22c55e"].map(c => (
                  <div key={c} className="w-2 h-2 rounded-full" style={{ background:c, opacity:0.8 }} />
                ))}
              </div>
              <div className="relative flex flex-col gap-2 w-3/4">
                {proj.barColors.map((bg,i) => (
                  <motion.div key={i} className="h-2 rounded-full"
                    style={{ background:bg, width:["100%","70%","85%"][i] }}
                    animate={{ opacity:[0.7,1,0.7] }}
                    transition={{ duration:2.5, delay:i*0.3, repeat:Infinity }} />
                ))}
              </div>
            </div>

            <motion.h3 key={proj.title} initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}
              className="font-display font-bold text-base mb-1" style={{ color:"var(--text)" }}>
              {proj.title}
            </motion.h3>
            <motion.p key={proj.desc} initial={{ opacity:0 }} animate={{ opacity:1 }}
              className="font-mono text-xs leading-relaxed mb-4" style={{ color:"var(--text-muted)" }}>
              {proj.desc}
            </motion.p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {proj.tags.map((tag,i) => (
                <span key={tag} className="font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full border"
                  style={proj.tagStyles[i] ? { background:proj.tagStyles[i].bg, color:proj.tagStyles[i].color, borderColor:proj.tagStyles[i].border } : {}}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <Link href="/projects" className="font-mono text-xs flex items-center gap-1.5 group transition-all duration-200"
                style={{ color:proj.accentColor }}>
                View Project <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
              <span className="font-mono text-[10px] px-2 py-1 rounded-md border"
                style={{ background:`${proj.accentColor}08`, borderColor:`${proj.accentColor}20`, color:"rgba(255,255,255,0.3)" }}>
                {proj.stat}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/* page */
export default function Page() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const statItems = [
    { label: "Digital Projects", value: "10+" },
    { label: "Games on Itch.io", value: "4+" },
    { label: "Responsive Web Apps", value: "4+" },
    { label: "Creating Interactive Experiences", value: "3+" },
  ]

  return (
    <>
      <Navbar />

      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute rounded-full blur-[120px] opacity-20" style={{ width:"600px", height:"600px", top:"-10%", left:"-10%", background:"radial-gradient(circle, #7b6cff, transparent)" }} />
        <div className="absolute rounded-full blur-[100px] opacity-15" style={{ width:"400px", height:"400px", bottom:"10%", right:"-5%", background:"radial-gradient(circle, #3dffd1, transparent)" }} />
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>

      <main
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32"
        style={{ paddingTop:"10vh", paddingBottom:"8vh" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 items-center w-full max-w-7xl">

          {/* LEFT */}
          <div className="max-w-xl">
            <motion.p initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5, delay:0.1 }}
              className="font-mono text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-3" style={{ color:"var(--accent2)" }}>
              <span className="inline-block w-8 h-px" style={{ background:"var(--accent2)", boxShadow:"0 0 6px var(--accent2)" }} />
              Creative Portfolio
            </motion.p>

            <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.2, ease:[0.22,1,0.36,1] }}
              className="font-display font-extrabold leading-[1.0] mb-3"
              style={{ fontSize:"clamp(3rem, 8vw, 7rem)", color:"var(--text)", letterSpacing:"-0.03em" }}>
              Kahlaa
            </motion.h1>

            <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.3, ease:[0.22,1,0.36,1] }}
              className="font-display font-extrabold leading-[1.0] mb-8"
              style={{ fontSize:"clamp(3rem, 8vw, 7rem)", letterSpacing:"-0.03em" }}>
              <span className="shimmer-text">Aulia Jemima</span>
            </motion.h1>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.6, delay:0.5 }} className="flex flex-wrap gap-3 mb-10">
              {roles.map((role,i) => (
                <span key={role} className="font-mono text-sm px-4 py-1.5 rounded-full border"
                  style={{ color:i===0?"var(--accent2)":"var(--text-muted)", borderColor:i===0?"rgba(123,108,255,0.3)":"rgba(61,255,209,0.3)", background:i===0?"rgba(123,108,255,0.06)":"rgba(61,255,209,0.06)" }}>
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.6 }}
              className="font-display text-base sm:text-lg mb-10 max-w-xl leading-relaxed" style={{ color:"var(--text-muted)" }}>
              Creative Front-End Developer with a background in game development and visual design.
            </motion.p>

            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.7 }} className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-glow font-mono text-sm px-6 py-3 rounded-xl border font-medium"
                style={{ background:"var(--accent)", borderColor:"var(--accent)", color:"#fff", boxShadow:"0 0 20px rgba(123,108,255,0.3)" }}>
                View Projects
              </Link>
              <Link href="/experience" className="btn-glow font-mono text-sm px-6 py-3 rounded-xl border" style={{ borderColor:"var(--border)", color:"var(--text-muted)" }}>Experience</Link>
              <Link href="/contact"    className="btn-glow font-mono text-sm px-6 py-3 rounded-xl border" style={{ borderColor:"var(--border)", color:"var(--text-muted)" }}>Contact</Link>
            </motion.div>

            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.85 }} className="flex flex-wrap gap-8 mt-12">
              {statItems.map((s, idx) => (
                <motion.div
                  key={s.label}
                  className="flex flex-col cursor-default group"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: isMobile ? 0.4 : 0.5,
                    delay: 0.85 + (isMobile ? idx * 0.05 : idx * 0.08),
                    ease: "easeOut"
                  }}
                  whileHover={isMobile ? {} : { scale: 1.05 }}
                  style={isMobile ? {} : {
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }}
                  onMouseEnter={!isMobile ? (e) => {
                    const elem = e.currentTarget
                    elem.style.filter = "drop-shadow(0 0 16px rgba(123,108,255,0.4))"
                    elem.style.textShadow = "0 0 12px rgba(123,108,255,0.3)"
                  } : undefined}
                  onMouseLeave={!isMobile ? (e) => {
                    const elem = e.currentTarget
                    elem.style.filter = "drop-shadow(0 0 0px rgba(123,108,255,0))"
                    elem.style.textShadow = "none"
                  } : undefined}
                >
                  <span 
                    className="font-display font-extrabold text-3xl"
                    style={{ 
                      color: "var(--accent)",
                      transition: "color 0.3s ease"
                    }}
                  >
                    {s.value.includes("Years") ? s.value : <CountUp value={s.value} isMobile={isMobile} />}
                  </span>
                  <span 
                    className="font-mono text-xs uppercase tracking-wider"
                    style={{ 
                      color: "var(--text-muted)",
                      transition: "color 0.3s ease"
                    }}
                  >
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* right */}
          <motion.div
            initial={{ opacity:0, x:40 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.8, delay:0.5, ease:[0.22,1,0.36,1] }}
            className="flex items-center justify-end"
            style={{ minHeight:"520px" }}
          >
            <FeaturedCard />
          </motion.div>

        </div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2, duration:0.8 }} className="w-full mt-16">
          <hr className="hr-accent" />
        </motion.div>
      </main>
    </>
  )
}