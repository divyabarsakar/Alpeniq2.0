export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-grid" />
      <div className="hero-glow" />
      <div className="hero-glow2" />

      <div className="hero-eyebrow">Innovation Driven Engineering</div>

      <h1 className="hero-h1">
        Build What's<br />
        <span className="serif">Genuinely</span><br />
        <span className="acc">Next.</span>
      </h1>

      <div className="hero-foot">
        <p className="hero-desc">
          // Your technology partner for<br />
          cloud-native software, AI systems,<br />
          and infrastructure that scales.
        </p>
        <div className="hero-ctas">
          <a href="#services" className="cta-primary" onClick={e => { e.preventDefault(); scrollTo('services') }}>
            Our Services →
          </a>
          <a href="#projects" className="cta-ghost" onClick={e => { e.preventDefault(); scrollTo('projects') }}>
            See Projects →
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="tick-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
