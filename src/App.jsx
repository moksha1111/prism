import { useEffect, useState } from 'react'
import useSmoothScroll from './hooks/useSmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Capabilities from './components/Capabilities'
import Work from './components/Work'
import Process from './components/Process'
import Footer from './components/Footer'

function Curtain() {
  const [up, setUp] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setUp(true), 800)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className={`curtain ${up ? 'up' : ''}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="display text-bone text-3xl flex items-center gap-3">
          <span className="block w-3 h-3 rotate-45 bg-amber" />
          prism
        </div>
      </div>
    </div>
  )
}

export default function App() {
  useSmoothScroll()
  return (
    <>
      <Curtain />
      <Navbar />
      <main className="relative">
        <Hero />
        <Manifesto />
        <Capabilities />
        <Work />
        <Process />
        <Footer />
      </main>
    </>
  )
}
