import { Reveal } from '../components/Reveal'

const STATS = [
  { num: '+8', label: 'Years of experience', type: 'plus' },
  { num: '+60', label: 'Projects shipped', type: 'plus' },
  { num: '+14', label: 'Industries served', type: 'plus' },
  { num: '100%', label: 'Innovation driven', type: 'pct' },
]

const VALUES = [
  { icon: '💡', name: 'Experience & Curiosity', desc: 'We blend proven engineering patterns with genuine curiosity for what\'s emerging. Always learning, always sharing.' },
  { icon: '⬡', name: 'Precision & Quality', desc: 'Swiss-level attention to craft. Every detail matters — from architecture decisions to the last unit test.' },
  { icon: '🤝', name: 'True Partnership', desc: 'We embed in your team, speak your language, and treat your challenges as our own. Long-term thinking always wins.' },
]

function StatNum({ raw }) {
  if (raw.startsWith('+')) {
    return <div className="stat-num"><span className="stat-plus">+</span>{raw.slice(1)}</div>
  }
  if (raw.endsWith('%')) {
    return <div className="stat-num">{raw.slice(0, -1)}<span className="stat-pct">%</span></div>
  }
  return <div className="stat-num">{raw}</div>
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-left">
            <Reveal><div className="section-label">Who We Are</div></Reveal>
            <Reveal>
              <h2 className="about-title">Your partner for <span className="s">innovative</span> software & cloud</h2>
            </Reveal>
            <Reveal>
              <p className="about-body">
                We're a tightly-knit team of engineers, architects, and product thinkers who care deeply about the code we ship and the problems we solve. We don't just deliver features — we own outcomes.
              </p>
            </Reveal>
            <Reveal>
              <div className="stats-grid">
                {STATS.map(s => (
                  <div className="stat-cell" key={s.label}>
                    <StatNum raw={s.num} />
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="about-right">
            <Reveal>
              <div className="values-list">
                {VALUES.map(v => (
                  <div className="value-item" key={v.name}>
                    <div className="value-icon">{v.icon}</div>
                    <div>
                      <div className="value-name">{v.name}</div>
                      <div className="value-desc">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
