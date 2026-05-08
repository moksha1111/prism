import Reveal from './Reveal'
import Marquee from './Marquee'
import SplitWords from './SplitWords'

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-32 sm:pt-44 pb-10 overflow-hidden border-t border-haze/30">
      <div className="px-6 sm:px-10 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="block w-2 h-2 rotate-45 bg-amber pulse text-amber/40" />
            <span className="mono text-[11px] tracking-widest3 text-mist">05 — INTRODUCE YOURSELF</span>
          </div>
        </Reveal>

        <h2 className="display text-bone text-[12vw] sm:text-[9vw] leading-[0.95]">
          <span className="block">
            <SplitWords text="Tell us where" stagger={80} />
          </span>
          <span className="block">
            <span className="display-italic text-amber">
              <SplitWords text="the light" delay={250} stagger={80} />
            </span>{' '}
            <SplitWords text="should" delay={500} stagger={80} />
          </span>
          <span className="block text-mist/55">
            <SplitWords text="land first." delay={700} stagger={80} />
          </span>
        </h2>

        <div className="mt-14 sm:mt-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <a
              href="mailto:hello@prism.studio"
              className="inline-flex items-baseline gap-3 group"
            >
              <span className="display text-bone text-3xl sm:text-5xl ulink">hello@prism.studio</span>
              <span className="block w-2 h-2 rotate-45 bg-amber translate-y-[-4px]" />
            </a>
            <p className="mt-6 text-mist text-[14px] max-w-md leading-relaxed">
              We respond within two days. We pick up two new projects each quarter and turn down most
              of what arrives — not because it isn't good, but because attention is the work.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-8 text-[14px]">
            <div>
              <div className="mono text-[10px] tracking-widest3 text-mute mb-4">— LOCATIONS</div>
              <p className="text-bone leading-relaxed">
                Chernihiv, UA<br />
                Lisbon, PT<br />
                Available worldwide
              </p>
            </div>
            <div>
              <div className="mono text-[10px] tracking-widest3 text-mute mb-4">— ELSEWHERE</div>
              <ul className="space-y-2 text-bone">
                <li><a href="#" className="ulink">Instagram</a></li>
                <li><a href="#" className="ulink">Are.na</a></li>
                <li><a href="#" className="ulink">Read.cv</a></li>
                <li><a href="#" className="ulink">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* huge wordmark marquee */}
      <div className="mt-32">
        <Marquee>
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="display text-[20vw] sm:text-[16vw] text-bone leading-none flex items-center gap-12 px-12"
            >
              prism
              <span className="block w-5 h-5 rotate-45 bg-amber translate-y-[-1.5vw]" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="px-6 sm:px-10 max-w-[1400px] mx-auto mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mono text-[10px] tracking-widest2 text-mute">
        <span>© PRISM STUDIO 2026 — REFRACTION RESERVED</span>
        <span className="flex items-center gap-3">
          <span className="block w-1.5 h-1.5 rotate-45 bg-amber pulse text-amber/40" />
          DESIGNED BY HAND. TUNED BY EYE.
        </span>
        <span>v 0.1 / EDITION ONE</span>
      </div>
    </footer>
  )
}
