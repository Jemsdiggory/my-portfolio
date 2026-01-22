"use client"

import { motion } from "framer-motion"

const gameProjects = [
  {
    title: "Vita-Dulu by Tealcean Studio",
    icon: "/game-icons/icongame1.jpg",
    link: "https://jemsdiggory.itch.io/vita-dulu",
    description:
      "3D Simulation and Educational Game(About traditional snacks in Indonesia) developed using Unity. I was responsible for programming overall Gameplay mechanics, NPC AI Behaviour, and Interactive systems. PC & Mobile Platforms",
    team: "Programmer (Me), Game Designer (Arnelita & Tealcean team), Artist (Arnelita & Marisa)",
  },

  {
    title: "Rise Against by Tealcean Studio",
    icon: "/game-icons/icongame2.png",
    link: "https://jemsdiggory.itch.io/rise-against",
    description:
      "2D RPG and Educational Game(About environmental issues) developed using Unity. My role included programming quest systems, AI & Combat systems, dialogue systems, and inventory management. PC Platforms",
    team: "Programmer (Me), Game Designer (Tealcean team), Artist (Arnelita)",
  },

  {
    title: "Let's Explore by Tealcean Studio",
    icon: "/game-icons/icongame3.png",
    link: "https://jemsdiggory.itch.io/lets-explore",
    description:
      "2D Educational Game(Arithmetic and Indonesian Tourism), designed for children aged 6–9 years old. Developed using Unity, I focused on programming mini-game mechanics, interactive systems, and UI/UX design. PC Platforms",
    team: "Programmer (Me), Game Designer (Arnelita & Tealcean team), Artist (Marisa & Arnelita)",
  },

  {
    title: "Roblorant by Jemi",
    icon: "/game-icons/icongame4.png",
    link: "https://jemsdiggory.itch.io/tugas-game-fps",
    description:
      "3D FPS Game Assignment developed using Unity. I was responsible for programming core gameplay mechanics, including player movement, shooting mechanics, and enemy AI. Web based Game",
    team: "Programmer (Me), Assets from Unity Asset Store",
  },

  {
    title: "Congklak Adventures by Team 7",
    icon: "/game-icons/icongame5.png",
    link: "https://dycals.itch.io/congklak-adventures",
    description:
      "2D Educational Game(Traditional Congklak Game) developed using Unity. My role as a UI Artist. PC Platforms",
    team: "UI Artist(Me), Programmer (Adit & Farhan), Game Designer (Ghina & Me), Environment Artist (Giebran & Nayda)",
  },
]

const webProjects = [
  {
    title: "MLBB Vote Web Login",
    image: "/front-end/web1.png",
    description:
      "A responsive game-inspired website built using HTML, CSS, and JavaScript. Features include interactive hero cards, role-based filtering, login flow, and dynamic UI animations",
    source: "https://github.com/Jemsdiggory/Molevote-Dummy",
    demo: "https://molevotedummy.netlify.app/",
  },
  {
    title: "To do list Web",
    image: "/front-end/web2.png",
    description:
      "Web app built with HTML, CSS, and JavaScript. Features include task management, completed task tracking, interactive sound effects, and a game inspired UI dashboard.",
    source: "https://github.com/Jemsdiggory/toolis-web",
    demo: "https://toolis-web.netlify.app/",
  },
  {
    title: "Valorant info Web",
    image: "/front-end/web3.png",
    description:
      "A game-themed landing page inspired by VALORANT, built to showcase information about the game, agents, and music with a clean, game-style UI. This project is created as a front-end practice and portfolio project using vanilla web technologies.",
    source: "https://github.com/Jemsdiggory/V-INFO-web",
    demo: "https://v-info.netlify.app/",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 px-6 py-32 bg-zinc-950 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h2>

        {/* game projects */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold mb-10">
            🎮 Game Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {gameProjects.map((game, i) => (
              <motion.a
                key={game.title}
                href={game.link}
                target="_blank"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="
                  block
                  p-6
                  rounded-2xl
                  border border-zinc-800
                  bg-zinc-900/60
                  hover:border-blue-400
                  hover:bg-zinc-900
                  transition
                "
              >
                <img
                    src={game.icon}
                    alt={game.title}
                    className="
                        w-50 h-50
                        mb-4
                        object-contain
                        rounded-lg
                    "
                    />


                <h4 className="text-xl font-semibold mb-3">
                  {game.title}
                </h4>

                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  {game.description}
                </p>

                <p className="text-zinc-400 text-sm">
                  <span className="font-medium text-white">Team:</span>{" "}
                  {game.team}
                </p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* front-end projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-10">
            🌐 Front-End Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {webProjects.map((web, i) => (
              <motion.div
                key={web.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="
                  rounded-2xl
                  border border-zinc-800
                  bg-zinc-900/60
                  overflow-hidden
                "
              >
                <img
                  src={web.image}
                  alt={web.title}
                  className="w-full h-40 object-cover"
                />

                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2">
                    {web.title}
                  </h4>

                  <p className="text-zinc-400 text-sm mb-4">
                    {web.description}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={web.source}
                      target="_blank"
                      className="
                        px-4 py-2 text-sm
                        rounded-lg
                        border border-zinc-700
                        hover:bg-zinc-800
                        transition
                      "
                    >
                      Source
                    </a>

                    <a
                      href={web.demo}
                      target="_blank"
                      className="
                        px-4 py-2 text-sm
                        rounded-lg
                        bg-blue-400
                        hover:bg-blue-500
                        transition
                      "
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
