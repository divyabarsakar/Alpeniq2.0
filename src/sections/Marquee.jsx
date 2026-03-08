const ITEMS = [
  'Software Development', 'Cloud Architecture', 'AI & Data Engineering',
  'DevOps & Automation', 'Innovation & PoC', 'API Design', 'Infrastructure as Code'
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-dot">◆</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
