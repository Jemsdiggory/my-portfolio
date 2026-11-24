import Navbar from "../components/Navbar"
import GameVideo from "./GameVideo"
import { gameProjects } from "../projects/projectsData"
import { experience } from "../data/experience"
import { education } from "../data/education"
import { getMediumPosts, MEDIUM_PROFILE } from "../lib/medium"

export const metadata = {
  title: "Game Developer",
  description: "Gameplay programming and game design portfolio of Kahlaa Aulia Jemima, an Indonesian game developer.",
}

const systems = [
  { title: "Gameplay Systems", description: "TODO: Describe a gameplay system, its design constraints, and your implementation decisions.", code: "// TODO: Add a verified gameplay code excerpt" },
  { title: "AI & Interaction", description: "TODO: Explain an AI or interaction system and how you tested it.", code: "// TODO: Add a verified AI or interaction excerpt" },
]

const groupOrder = { game: 0, both: 1, design: 2 }
const rankYear = (period) => /present/i.test(period) ? 9999 : Number(period.match(/\d{4}/)?.[0] || 0)
const sortedExperience = [...experience].sort((a, b) => groupOrder[a.track] - groupOrder[b.track] || rankYear(b.period) - rankYear(a.period))

const contacts = [
  { label: "Email", text: "jemimadiggory@gmail.com", href: "mailto:jemimadiggory@gmail.com" },
  { label: "LinkedIn", text: "Jemima05", href: "https://linkedin.com/in/jemima05" },
  { label: "GitHub", text: "JemsDiggory", href: "https://github.com/JemsDiggory" },
  { label: "Instagram", text: "@jeymss00", href: "https://instagram.com/jeymss00" },
  { label: "itch.io", text: "jemsdiggory", href: "https://jemsdiggory.itch.io" },
  { label: "Discord", text: "jems1717", href: "https://discord.gg/jems1717" },
  { label: "GitLab", text: "@jemimadiggory", href: "https://gitlab.com/jemimadiggory" },
]

function uniqueGameTags(tags, engine, platform) {
  const omitted = new Set([engine, platform].map((value) => value.trim().toLowerCase()))
  const seen = new Set()
  return tags.filter((tag) => {
    const normalized = tag.trim().toLowerCase()
    if (!normalized || omitted.has(normalized) || seen.has(normalized)) return false
    seen.add(normalized)
    return true
  })
}

async function MediumSection() {
  const posts = await getMediumPosts()
  return (
    <section id="writing" className="px-6 py-20 sm:px-12 lg:px-24 bg-white/[.02] scroll-mt-20" style={{ scrollMarginTop: "64px" }}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
          <div><p className="font-mono text-xs uppercase tracking-[.25em] text-violet-300">Writing &amp; Devlogs</p><h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Notes from the process</h2></div>
          <a href={MEDIUM_PROFILE} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-cyan-200 underline underline-offset-4">View all on Medium ↗</a>
        </div>
        {posts.length > 0 && <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{posts.map((post) => <article key={post.link} className="overflow-hidden rounded-2xl border border-white/10 bg-[#10111b]">
          {post.image && <img src={post.image} alt="" loading="lazy" className="w-full aspect-video object-cover" /> /* eslint-disable-line @next/next/no-img-element */}
          <div className="p-5"><p className="font-mono text-[10px] text-white/45">{post.date}</p><h3 className="font-display text-lg font-bold mt-2">{post.title}</h3>
            {post.categories.length > 0 && <div className="flex flex-wrap gap-1.5 mt-3">{post.categories.map((tag) => <span key={tag} className="rounded-full bg-violet-400/10 px-2.5 py-1 font-mono text-[9px] text-violet-200">{tag}</span>)}</div>}
            {post.excerpt && <p className="text-sm text-white/60 leading-relaxed mt-3">{post.excerpt}</p>}
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-flex mt-5 font-mono text-xs text-cyan-200 underline underline-offset-4">Read on Medium ↗</a>
          </div>
        </article>)}</div>}
      </div>
    </section>
  )
}

export default function GameDevPage() {
  return (
    <main className="min-h-screen bg-[#080810] text-white">
      <Navbar />
      <section id="about" className="px-6 pt-36 pb-24 sm:px-12 lg:px-24 scroll-mt-20" style={{ scrollMarginTop: "64px" }}>
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[.3em] text-cyan-200">Kahlaa Aulia Jemima</p>
          <h1 className="font-display text-5xl sm:text-7xl font-extrabold mt-5">Game Developer</h1>
          <p className="font-mono text-sm sm:text-base text-white/60 mt-4">Gameplay Programming &amp; Game Design</p>
          <p className="max-w-3xl text-white/70 mt-7 leading-relaxed">I build gameplay and interactive systems with Unity and C#. My experience spans 2D and 3D RPG, FPS, and educational games, including quest systems, AI behavior, combat mechanics, and UI interactions. I work with teams and independently to bring gameplay features from concept to implementation.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="https://jemsdiggory.itch.io" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-violet-500 px-6 py-3 font-mono text-sm font-bold">Play My Games</a>
            <a href="/contact" className="rounded-xl border border-white/15 px-6 py-3 font-mono text-sm">Contact</a>
            <a href="/cv/Kahlaa-Aulia-Jemima-CV.pdf" download className="rounded-xl border border-cyan-200/40 px-6 py-3 font-mono text-sm text-cyan-100">Download CV</a>
          </div>
        </div>
      </section>

      <section id="games" className="px-6 py-20 sm:px-12 lg:px-24 bg-white/[.02] scroll-mt-20" style={{ scrollMarginTop: "64px" }}>
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[.25em] text-violet-300">Selected work</p><h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-10">Featured Games</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {gameProjects.map((game) => {
              const tags = uniqueGameTags(game.tags, game.engine, game.platform)
              return <article key={game.title} className="overflow-hidden rounded-2xl border border-white/10 bg-[#10111b]">
                <GameVideo game={game} />
                <div className="p-6">
                  <div className="flex flex-wrap justify-between gap-3 items-start"><div><h3 className="font-display text-2xl font-bold">{game.title}</h3><p className="font-mono text-xs text-white/50 mt-1">{game.studio}</p></div><span className="rounded-full bg-violet-400/15 px-3 py-1 font-mono text-[10px] uppercase text-violet-200">MY ROLE: {game.role}</span></div>
                  <p className="text-sm leading-relaxed text-white/65 mt-4">{game.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4 font-mono text-[10px]"><span className="rounded-full border border-white/10 px-3 py-1">{game.engine}</span><span className="rounded-full border border-white/10 px-3 py-1">{game.platform}</span>{tags.map((tag) => <span key={tag} className="rounded-full bg-white/[.06] px-3 py-1">{tag}</span>)}</div>
                  <ul className="mt-5 space-y-1 text-sm text-white/65">{game.highlights.map((highlight, index) => <li key={`${game.title}-${index}`}>• {highlight}</li>)}</ul>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 font-mono text-xs text-cyan-200 underline underline-offset-4">Play on itch.io ↗</a>
                </div>
              </article>
            })}
          </div>
        </div>
      </section>

      <section id="systems" className="px-6 py-20 sm:px-12 lg:px-24 scroll-mt-20" style={{ scrollMarginTop: "64px" }}><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[.25em] text-violet-300">Under the hood</p><h2 className="font-display text-3xl font-bold mt-3 mb-8">Systems Breakdown</h2><div className="grid md:grid-cols-2 gap-6">{systems.map((system) => <article key={system.title} className="rounded-2xl border border-white/10 p-6"><h3 className="font-display text-xl font-bold">{system.title}</h3><p className="text-sm text-white/60 mt-3">{system.description}</p><pre className="overflow-x-auto rounded-xl bg-black/40 p-4 mt-5 text-xs text-cyan-100"><code>{system.code}</code></pre></article>)}</div></div></section>

      <section id="experience" className="px-6 py-20 sm:px-12 lg:px-24 bg-white/[.02] scroll-mt-20" style={{ scrollMarginTop: "64px" }}><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[.25em] text-violet-300">Track record</p><h2 className="font-display text-3xl font-bold mt-3 mb-8">Experience</h2><div className="grid md:grid-cols-2 gap-5">{sortedExperience.map((item, index) => <article key={`${item.organization}-${item.role}`} className="rounded-2xl border border-white/10 bg-[#10111b] p-6"><p className="font-mono text-xs text-cyan-200">{item.period} <span className="ml-2 text-white/40">{item.track.toUpperCase()}</span></p><h3 className="font-display text-xl font-bold mt-3">{item.role}</h3><p className="font-mono text-sm text-violet-200 mt-1">{item.organization}</p><ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/65">{item.bullets.slice(0, 3).map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul><div className="flex flex-wrap gap-2 mt-5">{item.tags.map((tag) => <span key={`${index}-${tag}`} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] text-white/55">{tag}</span>)}</div></article>)}</div></div></section>

      <section id="education" className="px-6 py-20 sm:px-12 lg:px-24 scroll-mt-20" style={{ scrollMarginTop: "64px" }}><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[.25em] text-violet-300">Learning</p><h2 className="font-display text-3xl font-bold mt-3 mb-8">Education</h2><div className="grid md:grid-cols-2 gap-5">{education.map((item) => <article key={item.institution} className="rounded-2xl border border-white/10 bg-[#10111b] p-6"><p className="font-mono text-xs text-cyan-200">{item.period}</p><h3 className="font-display text-xl font-bold mt-3">{item.program}</h3><p className="font-mono text-sm text-violet-200 mt-1">{item.institution}</p>{item.details.map((detail) => <p key={detail} className="text-sm text-white/65 mt-4">{detail}</p>)}<div className="flex flex-wrap gap-2 mt-5">{item.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] text-white/55">{tag}</span>)}</div></article>)}</div></div></section>

      <MediumSection />

      <section id="skills" className="px-6 py-20 sm:px-12 lg:px-24 scroll-mt-20" style={{ scrollMarginTop: "64px" }}><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[.25em] text-violet-300">Toolbox</p><h2 className="font-display text-3xl font-bold mt-3 mb-8">Game Dev Skills</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{[
        { title: "Engines", items: ["Unity"] },
        { title: "Languages", items: ["C#"] },
        { title: "Networking", items: ["TODO: Add confirmed networking tools or concepts"] },
        { title: "Tools", items: ["Version control", "Agile development"] },
      ].map((group) => <article key={group.title} className="rounded-2xl border border-white/10 bg-[#10111b] p-5"><h3 className="font-mono text-xs uppercase text-violet-300">{group.title}</h3><p className="text-sm text-white/65 mt-3">{group.items.join(", ")}</p></article>)}</div></div></section>

      <section id="contact" className="px-6 py-24 sm:px-12 lg:px-24 text-center bg-white/[.02] scroll-mt-20" style={{ scrollMarginTop: "64px" }}><div className="mx-auto max-w-5xl"><p className="font-mono text-xs uppercase tracking-[.25em] text-violet-300">Contact</p><h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Let’s make a game players remember.</h2><div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mt-8">{contacts.map((contact) => <a key={contact.label} href={contact.href} target={contact.href.startsWith("mailto:") ? undefined : "_blank"} rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="font-mono text-xs text-cyan-200 underline underline-offset-4"><span className="text-white/45">{contact.label}: </span>{contact.text}</a>)}</div></div></section>
    </main>
  )
}
