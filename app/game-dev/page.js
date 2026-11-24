import Navbar from "../components/Navbar"
import GameVideo from "./GameVideo"
import { gameProjects } from "../projects/projectsData"

export const metadata = {
  title: "Game Developer",
  description: "Gameplay programming and game design portfolio of Kahlaa Aulia Jemima, an Indonesian game developer.",
}

const systems = [
  { title: "Gameplay Systems", description: "TODO: Describe a gameplay system, its design constraints, and your implementation decisions.", code: "// TODO: Add a verified gameplay code excerpt" },
  { title: "AI & Interaction", description: "TODO: Explain an AI or interaction system and how you tested it.", code: "// TODO: Add a verified AI or interaction excerpt" },
]

const devlogs = [
  { title: "TODO: Add a development article", href: "#" },
]

const skillGroups = [
  { title: "Engines", items: ["TODO: Add confirmed engines"] },
  { title: "Languages", items: ["TODO: Add confirmed languages"] },
  { title: "Networking", items: ["TODO: Add confirmed networking tools or concepts"] },
  { title: "Tools", items: ["TODO: Add confirmed development tools"] },
]

export default function GameDevPage() {
  return (
    <main className="min-h-screen bg-[#080810] text-white">
      <Navbar />
      <section className="px-6 pt-36 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[.3em] text-cyan-200">Kahlaa Aulia Jemima</p>
          <h1 className="font-display text-5xl sm:text-7xl font-extrabold mt-5">Game Developer</h1>
          <p className="font-mono text-sm sm:text-base text-white/60 mt-4">Gameplay Programming &amp; Game Design</p>
          <p className="max-w-2xl text-white/70 mt-7 leading-relaxed">TODO: Add a one-line value statement that reflects your game development focus.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="https://jemsdiggory.itch.io" target="_blank" rel="noreferrer" className="rounded-xl bg-violet-500 px-6 py-3 font-mono text-sm font-bold">Play My Games</a>
            <a href="/contact" className="rounded-xl border border-white/15 px-6 py-3 font-mono text-sm">Contact</a>
          </div>
        </div>
      </section>

      <section id="games" className="px-6 py-20 sm:px-12 lg:px-24 bg-white/[.02]">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[.25em] text-violet-300">Selected work</p><h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-10">Featured Games</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {gameProjects.map((game) => <article key={game.title} className="overflow-hidden rounded-2xl border border-white/10 bg-[#10111b]">
              <GameVideo game={game} />
              <div className="p-6">
                <div className="flex flex-wrap justify-between gap-3 items-start"><div><h3 className="font-display text-2xl font-bold">{game.title}</h3><p className="font-mono text-xs text-white/50 mt-1">{game.studio}</p></div><span className="rounded-full bg-violet-400/15 px-3 py-1 font-mono text-[10px] uppercase text-violet-200">MY ROLE: {game.role}</span></div>
                <p className="text-sm leading-relaxed text-white/65 mt-4">{game.description}</p>
                <div className="flex flex-wrap gap-2 mt-4 font-mono text-[10px]"><span className="rounded-full border border-white/10 px-3 py-1">{game.engine}</span><span className="rounded-full border border-white/10 px-3 py-1">{game.platform}</span>{game.tags.map((tag) => <span key={tag} className="rounded-full bg-white/[.06] px-3 py-1">{tag}</span>)}</div>
                <ul className="mt-5 space-y-1 text-sm text-white/65">{game.highlights.map((highlight, index) => <li key={`${game.title}-${index}`}>• {highlight}</li>)}</ul>
                <a href={game.link} target="_blank" rel="noreferrer" className="inline-flex mt-6 font-mono text-xs text-cyan-200 underline underline-offset-4">Play on itch.io ↗</a>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-12 lg:px-24"><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[.25em] text-violet-300">Under the hood</p><h2 className="font-display text-3xl font-bold mt-3 mb-8">Systems Breakdown</h2><div className="grid md:grid-cols-2 gap-6">{systems.map((system) => <article key={system.title} className="rounded-2xl border border-white/10 p-6"><h3 className="font-display text-xl font-bold">{system.title}</h3><p className="text-sm text-white/60 mt-3">{system.description}</p><pre className="overflow-x-auto rounded-xl bg-black/40 p-4 mt-5 text-xs text-cyan-100"><code>{system.code}</code></pre></article>)}</div></div></section>

      <section className="px-6 py-16 sm:px-12 lg:px-24 bg-white/[.02]"><div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12"><div><h2 className="font-display text-3xl font-bold">Writing &amp; Devlogs</h2><ul className="mt-5 space-y-3">{devlogs.map((item) => <li key={item.title}><a href={item.href} className="font-mono text-sm text-cyan-200 underline underline-offset-4">{item.title}</a></li>)}</ul></div><div><h2 className="font-display text-3xl font-bold">Game Dev Skills</h2><div className="grid grid-cols-2 gap-4 mt-5">{skillGroups.map((group) => <div key={group.title}><h3 className="font-mono text-xs uppercase text-violet-300">{group.title}</h3><p className="text-sm text-white/60 mt-2">{group.items.join(", ")}</p></div>)}</div></div></div></section>

      <section className="px-6 py-24 text-center"><p className="font-mono text-xs uppercase tracking-[.25em] text-violet-300">Have a game in mind?</p><h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">Let’s build something players remember.</h2><a href="/contact" className="inline-block mt-7 rounded-xl bg-cyan-300 px-6 py-3 font-mono text-sm font-bold text-slate-950">Get in touch</a></section>
    </main>
  )
}
