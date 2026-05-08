import Reveal from './Reveal'
import SplitWords from './SplitWords'

const STEPS = [
  {
    n: '01',
    label: 'CONVERSE',
    title: 'A long, careful listen.',
    body:
      'Two weeks of reading, listening, walking. We don\'t open a design tool until we can describe the brand in three sentences without hedging.',
  },
  {
    n: '02',
    label: 'ANGLE',
    title: 'Find the angle of incidence.',
    body:
      'Color, type, motion and voice — sketched as a single chord. Mood films come before pages so the temperature is agreed before the pixels.',
  },
  {
    n: '03',
    label: 'CRAFT',
    title: 'Hand-build, slowly.',
    body:
      'Custom front-ends, hand-tuned shaders, hand-typeset words. Every easing curve gets a name. Every silence gets a duration.',
  },
  {
    n: '04',
    label: 'TEND',
    title: 'A site is a living thing.',
    body:
      'After ship: a season of tending. Telemetry, editorial, motion patches. We don\'t leave a brand in the cold once it\'s walking.',
  },
]

export default function Process() {
  return (
    <section className="relative px-6 sm:px-10 py-32 sm:py-44 border-t border-haze/30 bg-depth/40">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="flex items-center gap-3 mb-12">
          <span className="block w-2 h-2 rotate-45 bg-amber" />
          <span className="mono text-[11px] tracking-widest3 text-mist">04 — PROCESS</span>
        </Reveal>

        <h2 className="display text-bone text-[7vw] sm:text-[5vw] leading-[0.98] mb-20 max-w-5xl">
          <SplitWords text="Slow, by design." stagger={70} />
          <span className="block text-mist/60">
            <span className="display-italic">
              <SplitWords text="Patient, on purpose." delay={250} stagger={70} />
            </span>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 100}
              className="relative p-8 sm:p-10 border border-haze/40 bg-ink/60 group hover:border-amber/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-10">
                <div className="mono text-[10px] tracking-widest3 text-amber">— {s.label}</div>
                <div className="display text-mist/30 text-7xl group-hover:text-amber/60 transition-colors">
                  {s.n}
                </div>
              </div>
              <h3 className="display text-bone text-3xl sm:text-4xl leading-tight mb-4">{s.title}</h3>
              <p className="text-mist text-[15px] leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
