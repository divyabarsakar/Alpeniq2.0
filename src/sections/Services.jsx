import { Reveal } from '../components/Reveal'

const SERVICES = [
  { num: '01', icon: '⌨', name: 'Software Dev & DevOps', desc: 'Full-cycle development with modern DevOps practices. We ship fast, iterate confidently, and keep systems stable at scale.' },
  { num: '02', icon: '◈', name: 'AI & Data Management', desc: 'Unlock the intelligence within your data. We build pipelines, models, and AI-powered workflows tailored to your operations.' },
  { num: '03', icon: '☁', name: 'Cloud & Infrastructure', desc: 'Cloud migrations, architecture design, and full infrastructure automation — efficient, secure, and future-proof.' },
  { num: '04', icon: '⚡', name: 'Innovation & PoC', desc: 'De-risk your big ideas. We prototype fast, validate early, and help you decide what\'s worth building — before you commit.' },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-inner">
        <Reveal><div className="section-label">Our Core Expertise</div></Reveal>
        <div className="services-header">
          <Reveal>
            <h2 className="sec-title">Digital <span className="s">expertise</span><br />for your growth</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="services-sub">From first concept to production systems — we engineer solutions that perform under real-world conditions.</p>
          </Reveal>
        </div>
        <Reveal>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div className="svc-card" key={s.num}>
                <div className="svc-num">{s.num} —</div>
                <div className="svc-icon">{s.icon}</div>
                <div className="svc-name">{s.name}</div>
                <div className="svc-desc">{s.desc}</div>
                <a href="#contact" className="svc-link">Explore →</a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
