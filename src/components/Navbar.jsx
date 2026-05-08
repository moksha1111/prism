import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 px-6 sm:px-10 py-5 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-ink/60 border-b border-haze/30' : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="block w-3 h-3 rotate-45 bg-amber pulse text-amber/40" />
          <span className="display text-bone text-2xl">prism</span>
          <span className="hidden sm:inline mono text-[10px] tracking-widest3 text-mute ml-2">/ STUDIO 2026</span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-sm text-mist">
          <a href="#manifesto" className="ulink">Manifesto</a>
          <a href="#capabilities" className="ulink">Capabilities</a>
          <a href="#work" className="ulink">Work</a>
          <a href="#contact" className="ulink">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href="#contact"
            className="mono text-[11px] tracking-widest2 px-4 py-2 rounded-full border border-amber/40 text-amber hover:bg-amber hover:text-ink transition-colors"
          >
            START A PROJECT
          </a>
        </div>
      </div>
    </header>
  )
}
