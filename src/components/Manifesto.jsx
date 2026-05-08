import SplitWords from './SplitWords'
import Reveal from './Reveal'
import Marquee from './Marquee'

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative px-6 sm:px-10 py-32 sm:py-44 border-t border-haze/30">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="flex items-center gap-3 mb-12">
          <span className="block w-2 h-2 rotate-45 bg-amber" />
          <span className="mono text-[11px] tracking-widest3 text-mist">01 — A QUIET MANIFESTO</span>
        </Reveal>

        <h2 className="display text-bone text-[7vw] sm:text-[5vw] leading-[0.98]">
          <span className="block">
            <SplitWords text="A good site is" stagger={70} />
          </span>
          <span className="block">
            <span className="display-italic text-amber">
              <SplitWords text="a piece of glass" delay={250} stagger={70} />
            </span>
          </span>
          <span className="block text-mist/60">
            <SplitWords text="held against the world." delay={500} stagger={70} />
          </span>
        </h2>

        <div className="mt-24 grid md:grid-cols-2 gap-12 md:gap-24">
          <Reveal>
            <p className="text-mist text-lg leading-relaxed mb-8">
              We don't think of websites as documents or interfaces. We think of them as
              <span className="text-bone"> small refractive objects</span> — things you turn
              over in your hand to watch the light move.
            </p>
            <p className="text-mist text-lg leading-relaxed">
              The work begins long before pixels. Color first, then weight, then rhythm. Type set
              with the same care you'd give a poem. Motion tuned the way a piano gets tuned —
              slowly, by ear.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ul className="border-t border-haze/40">
              {[
                ['LIGHT', 'Direction, color, temperature — designed before content.'],
                ['WEIGHT', 'Typographic mass that anchors the eye on first glance.'],
                ['RHYTHM', 'A tempo of breaths and pauses, never the same twice.'],
                ['DEPTH', 'Layers behind layers; the object has thickness, not just a face.'],
              ].map(([k, v]) => (
                <li key={k} className="grid grid-cols-12 gap-4 py-5 border-b border-haze/40 group">
                  <span className="col-span-3 mono text-[11px] tracking-widest2 text-amber">{k}</span>
                  <span className="col-span-9 text-mist text-[15px] leading-relaxed group-hover:text-bone transition-colors">
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* skewed marquee divider */}
      <div className="mt-32 -mx-6 sm:-mx-10 border-y border-haze/30 py-7 bg-depth/40">
        <div className="skewed-marquee">
          <Marquee>
            {['REFRACT', 'BEND', 'GLOW', 'SLOW DOWN', 'OBSERVE', 'TUNE', 'LISTEN'].map((w, i) => (
              <span key={i} className="display text-[6vw] text-bone px-12 flex items-center gap-12">
                {w}
                <span className="block w-3 h-3 rotate-45 bg-amber" />
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
