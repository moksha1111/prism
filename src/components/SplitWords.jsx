import useInView from '../hooks/useInView'

export default function SplitWords({ text, className = '', delay = 0, stagger = 70 }) {
  const [ref, inView] = useInView()
  const words = text.split(' ')
  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className={`word-reveal ${inView ? 'visible' : ''}`}>
          <span style={{ transitionDelay: `${delay + i * stagger}ms` }}>
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </span>
  )
}
