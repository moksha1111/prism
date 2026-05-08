/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0F1E',          // background — deep ink blue
        depth: '#0F1628',         // surface
        slate: '#1B2540',         // raised surface
        haze: '#2A344F',          // border / faint
        mute: '#6E7791',          // muted text
        mist: '#A4ADC3',          // secondary text
        bone: '#E8ECF5',          // primary text
        amber: '#FFB144',         // primary accent (gold)
        ice: '#5BC8FF',           // secondary accent
        ember: '#FF6B6B',         // tertiary
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
}
