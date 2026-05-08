import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer, Sparkles, Edges } from '@react-three/drei'

// All meshes use the same cheap reflective material now — no transmission, no
// clearcoat → no extra render passes. Looks like polished amber crystal.
function ReflectGem({ args = [1, 0], strong = false, ...props }) {
  return (
    <mesh {...props}>
      <octahedronGeometry args={args} />
      <meshStandardMaterial
        metalness={strong ? 0.85 : 0.7}
        roughness={strong ? 0.08 : 0.12}
        color={'#FFD089'}
        envMapIntensity={strong ? 2.4 : 2.0}
      />
    </mesh>
  )
}

function Satellite({ radius, speed, tilt, size, phase = 0 }) {
  const groupRef = useRef(null)
  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * speed + phase
  })
  return (
    <group ref={groupRef} rotation={[tilt, 0, 0]}>
      <ReflectGem args={[size, 0]} position={[radius, 0, 0]} />
    </group>
  )
}

function WireGhost() {
  const ref = useRef(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y = -t * 0.18
    ref.current.rotation.x = Math.sin(t * 0.25) * 0.25
  })
  return (
    <mesh ref={ref} scale={2.4}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial transparent opacity={0} />
      <Edges threshold={1} color="#5BC8FF" />
    </mesh>
  )
}

function CenterCrystal() {
  const ref = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const smooth = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1
      target.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const dt = Math.min(delta, 0.05)
    smooth.current.x += (target.current.x - smooth.current.x) * Math.min(dt * 3, 1)
    smooth.current.y += (target.current.y - smooth.current.y) * Math.min(dt * 3, 1)

    ref.current.rotation.y = t * 0.22 + smooth.current.x * 0.4
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.18 + smooth.current.y * -0.3
    ref.current.rotation.z = Math.sin(t * 0.2) * 0.08
    const s = 1 + Math.sin(t * 0.6) * 0.025
    ref.current.scale.setScalar(s)
  })

  return <ReflectGem ref={ref} args={[1.35, 0]} strong />
}

function Scene() {
  const camTarget = useRef({ x: 0, y: 0 })
  useEffect(() => {
    const onMove = (e) => {
      camTarget.current.x = (e.clientX / window.innerWidth) * 2 - 1
      camTarget.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05)
    state.camera.position.x += (camTarget.current.x * 0.5 - state.camera.position.x) * Math.min(dt * 1.6, 1)
    state.camera.position.y += (camTarget.current.y * 0.35 - state.camera.position.y) * Math.min(dt * 1.6, 1)
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 2]} intensity={1.4} color="#FFD7A0" />
      <directionalLight position={[-5, 2, 4]} intensity={1.0} color="#5BC8FF" />

      {/* Tiny env map (64) baked once — reflections look the same at this size. */}
      <Environment background={false} resolution={64} frames={1}>
        <Lightformer form="rect" intensity={3.5} color="#FFB144" position={[6, 4, -6]} scale={[10, 10, 1]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={2.8} color="#5BC8FF" position={[-7, 3, 5]} scale={[10, 10, 1]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={1.4} color="#FF6B6B" position={[0, -5, 0]} scale={[6, 6, 1]} target={[0, 0, 0]} />
      </Environment>

      <CenterCrystal />

      <Satellite radius={2.8} speed={0.45} tilt={0.4} size={0.32} phase={0} />
      <Satellite radius={3.4} speed={-0.32} tilt={-0.6} size={0.22} phase={1.2} />
      <Satellite radius={2.4} speed={0.65} tilt={1.1} size={0.18} phase={2.4} />

      <WireGhost />

      <Sparkles count={45} scale={[8, 6, 6]} size={2.5} speed={0.25} color="#FFB144" opacity={0.6} />
      <Sparkles count={30} scale={[10, 7, 7]} size={1.5} speed={0.15} color="#5BC8FF" opacity={0.5} />
    </>
  )
}

export default function CrystalScene() {
  return (
    <Canvas
      dpr={1}                                              // fixed device pixel ratio — no upscaling cost
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 5.5], fov: 38 }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
