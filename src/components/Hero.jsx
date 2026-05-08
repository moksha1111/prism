import { Suspense, useEffect, useState } from 'react'
import CrystalScene from '../three/CrystalScene'
import SplitWords from './SplitWords'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(id)
  }, [])

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* warm/cool haze backdrop */}
      <div className="light-haze" />

      {/* 3D canvas */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <CrystalScene />
        </Suspense>
        {/* gradient overscreen for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink pointer-events-none" />
      </div>

      {/* Top meta line */}
      <div className="relative z-10 px-6 sm:px-10 pt-28 sm:pt-32">
        <div
          className={`flex items-center gap-3 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
          <span className="block w-8 h-px bg-amber" />
          <span className="mono text-[11px] tracking-widest3 text-mist">EST. 2024 — DESIGN FOR THE WAY LIGHT MOVES</span>
        </div>
      </div>

      {/* Main display */}
      <div className="relative z-10 px-6 sm:px-10 mt-12 sm:mt-20 pb-40 max-w-[1400px] mx-auto">
        <h1 className="display text-bone text-[16vw] sm:text-[12vw] md:text-[10.5vw]">
          <span className="block">
            <SplitWords text="design" stagger={90} />
          </span>
          <span className="block">
            <span className="display-italic text-amber">
              <SplitWords text="that bends" delay={250} stagger={90} />
            </span>
          </span>
          <span className="block text-mist/70">
            <SplitWords text="the light." delay={500} stagger={90} />
          </span>
        </h1>

        <div className="mt-12 sm:mt-16 grid md:grid-cols-12 gap-8">
          <p
            className={`md:col-span-5 text-mist text-[15px] leading-relaxed transition-all duration-1000 delay-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            PRISM is a creative studio designing for the way light, motion and attention move
            through screens.
            <span className="text-bone"> We build sites that refract instead of reflect</span> —
            objects that take whatever you bring and give it back changed.
          </p>

          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-3 mono text-[11px] tracking-widest2 text-mist self-end">
            <div className="flex items-center justify-between border-t border-haze/40 pt-3">
              <span>EST.</span>
              <span className="text-bone">2024</span>
            </div>
            <div className="flex items-center justify-between border-t border-haze/40 pt-3">
              <span>BASED</span>
              <span className="text-bone">CHERNIHIV / WORLDWIDE</span>
            </div>
            <div className="flex items-center justify-between border-t border-haze/40 pt-3">
              <span>STATUS</span>
              <span className="text-amber flex items-center gap-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-amber pulse text-amber/40" />
                BOOKING Q4
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-8 right-6 sm:right-10 z-10 flex items-center gap-3 text-mist">
        <span className="mono text-[10px] tracking-widest3">SCROLL</span>
        <span className="block w-px h-10 bg-mist/40 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-1/2 bg-amber animate-[scrollLine_2s_ease-in-out_infinite]" />
        </span>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  )
}
