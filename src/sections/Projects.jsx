import { Reveal } from '../components/Reveal'

const PROJECTS = [
  {
    label: 'NEXPAY',
    glow: 'rgba(184,255,0,.07)',
    tags: ['FinTech', 'Mobile', 'API'],
    title: 'NexPay — Integrated Payment Flow at Scale',
    desc: 'A seamless payment integration built directly into a consumer app with 2M+ users. Designed for zero-downtime launch and highest compliance standards.',
    highlights: ['Launch with zero incidents', 'PCI-DSS compliant architecture', 'Sub-200ms transaction response'],
    reverse: false,
  },
  {
    label: 'IOTGRID',
    glow: 'rgba(0,212,255,.06)',
    tags: ['IoT', 'GCP', 'Startup'],
    title: 'IoTGrid — World\'s First App-Controlled Smart Infrastructure',
    desc: 'We guided a hardware startup from prototype to market, building the full cloud backend, IoT data pipeline, and user-facing mobile interface.',
    highlights: ['Hybrid GCP + AWS IoT architecture', 'Realtime device control via app', 'Integrated billing & reservations'],
    reverse: true,
  },
  {
    label: 'VOLTIQ',
    glow: 'rgba(255,77,109,.06)',
    tags: ['Energy', 'Platform', 'Microservices'],
    title: 'VoltIQ — Modular Platform for Energy Sector Agility',
    desc: 'Replaced a legacy monolith with self-contained microservices, unlocking independent deployment cadences and massively reducing time-to-feature.',
    highlights: ['Monolith → SCS migration', '4× faster feature deployment', 'Future-proof scalable foundation'],
    reverse: false,
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-inner">
        <Reveal><div className="section-label">Selected Work</div></Reveal>
        <div className="projects-header">
          <Reveal>
            <h2 className="sec-title">Success stories from <span className="s">our clients</span></h2>
          </Reveal>
          <Reveal delay={1}>
            <a href="#" className="view-all">All Projects →</a>
          </Reveal>
        </div>
        <div className="projects-list">
          {PROJECTS.map((p) => (
            <Reveal key={p.label}>
              <div className={`proj-row${p.reverse ? ' reverse' : ''}`}>
                <div className="proj-img">
                  <div className="proj-img-inner">{p.label}</div>
                  <div className="proj-img-overlay" />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg,${p.glow},transparent 60%)` }} />
                </div>
                <div className="proj-info">
                  <div>
                    <div className="proj-tags">
                      {p.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}
                    </div>
                    <h3 className="proj-title">{p.title}</h3>
                    <p className="proj-desc">{p.desc}</p>
                  </div>
                  <div className="proj-foot">
                    <div className="proj-highlights">
                      {p.highlights.map(h => <div className="proj-highlight" key={h}>{h}</div>)}
                    </div>
                    <div className="proj-arrow">→</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
