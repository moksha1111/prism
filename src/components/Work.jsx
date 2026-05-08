import { useState } from 'react'
import Reveal from './Reveal'
import SplitWords from './SplitWords'

const PROJECTS = [
  {
    n: '01',
    title: 'Halcyon Hotels',
    year: '2025',
    role: 'Identity · Site',
    type: 'Hospitality',
    accent: '#FFB144',
    grad: 'linear-gradient(135deg,#1a0e08 0%,#3a2410 50%,#FFB144 100%)',
  },
  {
    n: '02',
    title: 'Northbound',
    year: '2025',
    role: 'Site · WebGL',
    type: 'Cultural',
    accent: '#5BC8FF',
    grad: 'linear-gradient(135deg,#06121a 0%,#0c324a 50%,#5BC8FF 100%)',
  },
  {
    n: '03',
    title: 'Field Notes',
    year: '2024',
    role: 'Editorial · Type',
    type: 'Publication',
    accent: '#FF6B6B',
    grad: 'linear-gradient(135deg,#1a0a0e 0%,#3a141c 50%,#FF6B6B 100%)',
  },
  {
    n: '04',
    title: 'Quietude',
    year: '2024',
    role: 'Brand · System',
    type: 'Architecture',
    accent: '#E8ECF5',
    grad: 'linear-gradient(135deg,#15151D 0%,#2a2a35 50%,#E8ECF5 100%)',
  },
  {
    n: '05',
    title: 'Ember & Ash',
    year: '2024',
    role: 'Site · Commerce',
    type: 'Atelier',
    accent: '#FF8C42',
    grad: 'linear-gradient(135deg,#1a0d08 0%,#3a1c10 50%,#FF8C42 100%)',
  },
  {
    n: '06',
    title: 'Hum',
    year: '2023',
    role: 'Identity · Sound',
    type: 'Studio',
    accent: '#9DC8B0',
    grad: 'linear-gradient(135deg,#0e1a14 0%,#1c3a2c 50%,#9DC8B0 100%)',
  },
]

function ProjectTile({ p, index, hovered, setHovered }) {
  const isHover = hovered === index
  const isOther = hovered !== null && hovered !== index

  return (
    <Reveal
      delay={index * 100}
      className="group block relative aspect-[4/5] overflow-hidden border border-haze/40 tile"
      as="a"
    >
      <a
        href="#contact"
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className="absolute inset-0 block"
        style={{
          opacity: isOther ? 0.45 : 1,
          transition: 'opacity .6s ease',
        }}
      >
        <div
          className="absolute inset-0 transition-transform duration-1000"
          style={{
            background: p.grad,
            transform: isHover ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        {/* noise overlay */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-50 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />
        {/* darken bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

        {/* index marker */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between mono text-[10px] tracking-widest3 text-bone/85">
          <span>— {p.n}</span>
          <span>{p.type}</span>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="display text-bone text-3xl sm:text-4xl mb-2 transition-transform duration-700"
               style={{ transform: isHover ? 'translateX(6px)' : 'translateX(0)' }}>
            {p.title}
          </div>
          <div className="flex items-center justify-between mono text-[10px] tracking-widest2 text-bone/70">
            <span>{p.role}</span>
            <span>{p.year}</span>
          </div>
          <div
            className="mt-3 h-px transition-all duration-700"
            style={{
              width: isHover ? '100%' : '20%',
              background: p.accent,
            }}
          />
        </div>
      </a>
    </Reveal>
  )
}

export default function Work() {
  const [hovered, setHovered] = useState(null)
  return (
    <section id="work" className="relative px-6 sm:px-10 py-32 sm:py-44 border-t border-haze/30">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="flex items-center gap-3 mb-12">
          <span className="block w-2 h-2 rotate-45 bg-ember" />
          <span className="mono text-[11px] tracking-widest3 text-mist">03 — SELECTED WORK</span>
        </Reveal>

        <div className="flex items-end justify-between mb-16 gap-6">
          <h2 className="display text-bone text-[7vw] sm:text-[5vw] leading-[0.98]">
            <SplitWords text="A few panes" stagger={70} />
            <span className="block">
              <span className="display-italic text-amber">
                <SplitWords text="of glass." delay={200} stagger={70} />
              </span>
            </span>
          </h2>
          <Reveal className="hidden md:block max-w-md text-mist text-[15px] leading-relaxed">
            Six recent collaborations across hospitality, culture, publishing and architecture.
            Each one a different angle on the same instinct.
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectTile key={p.n} p={p} index={i} hovered={hovered} setHovered={setHovered} />
          ))}
        </div>

        <Reveal className="mt-16 flex justify-end">
          <a href="#contact" className="ulink mono text-[11px] tracking-widest2 text-mist">
            FULL ARCHIVE — 32 PROJECTS →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
