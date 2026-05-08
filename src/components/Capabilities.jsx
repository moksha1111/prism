import Reveal from './Reveal'
import SplitWords from './SplitWords'

const CAPS = [
  {
    n: '01',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L36 28H4L20 4Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M20 4L20 36" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
        <path d="M4 28L36 28" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      </svg>
    ),
    title: 'Identity',
    desc:
      'Names, marks, type and voice — drawn so a brand reads at the size of a fingernail and the size of a billboard.',
    list: ['Naming & narrative', 'Type design', 'Logotype + marks', 'Voice + tone'],
  },
  {
    n: '02',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <circle cx="20" cy="20" r="4" fill="currentColor" />
      </svg>
    ),
    title: 'Sites',
    desc:
      'Bespoke websites built around a single mood — typography, motion, and shaders working together as one instrument.',
    list: ['Art direction', 'Custom WebGL & shaders', 'Motion choreography', 'CMS integration'],
  },
  {
    n: '03',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="6" width="28" height="28" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 14L34 14" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <path d="M14 6L14 34" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
    title: 'Systems',
    desc:
      'Design systems that hold their integrity at scale — components, tokens, motion grammars, and the words that bind them.',
    list: ['Token systems', 'Component libraries', 'Motion grammars', 'Documentation'],
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative px-6 sm:px-10 py-32 sm:py-44 border-t border-haze/30">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="flex items-center gap-3 mb-12">
          <span className="block w-2 h-2 rotate-45 bg-ice" />
          <span className="mono text-[11px] tracking-widest3 text-mist">02 — CAPABILITIES</span>
        </Reveal>

        <h2 className="display text-bone text-[7vw] sm:text-[5vw] leading-[0.98] mb-20">
          <SplitWords text="Three lenses." stagger={70} />
          <span className="block">
            <span className="display-italic text-ice">
              <SplitWords text="One studio." delay={250} stagger={70} />
            </span>
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-haze/40 border border-haze/40 rounded-sm overflow-hidden">
          {CAPS.map((c, i) => (
            <Reveal
              key={c.n}
              delay={i * 120}
              className="bg-ink p-8 sm:p-10 tile group hover:bg-depth"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="mono text-[10px] tracking-widest3 text-mute">{c.n}</span>
                <span className="text-amber transition-transform duration-700 group-hover:rotate-180">
                  {c.icon}
                </span>
              </div>
              <h3 className="display text-bone text-4xl mb-4">{c.title}</h3>
              <p className="text-mist text-[14px] leading-relaxed mb-8">{c.desc}</p>

              <ul className="border-t border-haze/40">
                {c.list.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between py-3 border-b border-haze/40 mono text-[12px] text-bone"
                  >
                    <span>{item}</span>
                    <span className="text-amber opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
