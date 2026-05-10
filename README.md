# Prism — creative studio with refractive glass octahedron

> Creative-studio landing page centered on a refractive glass octahedron with orbiting crystals.

**[Live demo →](https://prism-hmrd.onrender.com)**

![preview](docs/preview.gif)

## What it does

A studio site whose hero is a refractive glass octahedron lit by a `drei` Lightformer environment, with smaller crystals orbiting it. Below the hero: project case studies, services, and a contact CTA — all on an ink-blue palette with amber and ice accents.

## Tech

React 18 · Vite · Tailwind CSS v3 · React Three Fiber · `@react-three/drei`

## Highlights

- Refractive `MeshTransmissionMaterial` octahedron with chromatic aberration and roughness tuned for a "real-glass" feel
- `drei` Lightformer environment provides cheap, photo-grade studio lighting
- Orbiting crystal instances driven by sine-curve transforms in `useFrame`
- Ink-blue + amber + ice accent palette

## Run locally

```bash
npm install
npm run dev    # http://localhost:3540
```
