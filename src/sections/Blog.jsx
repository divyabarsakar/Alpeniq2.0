import { Reveal } from '../components/Reveal'

const POSTS = [
  {
    cat: 'Security', date: '15.12.2025', read: '8 min', label: 'SEC_01',
    title: 'Defending AI Agents: What 1,600 Prompt-Injection Attacks Taught Us',
    excerpt: 'We co-hosted a live prompt-injection challenge and analyzed every attack vector. Simple system prompts aren\'t enough — here\'s what actually works.',
  },
  {
    cat: 'AI', date: '06.10.2025', read: '5 min', label: 'AI_02',
    title: 'Evaluating AI Agents with DeepEval & Arize Phoenix',
    excerpt: 'Traditional metrics don\'t work for LLM-based agents. We share what we learned integrating two evaluation frameworks in production.',
  },
  {
    cat: 'Cloud', date: '30.05.2025', read: '3 min', label: 'CLD_03',
    title: 'Google Cloud Next 2025: AI Trends That Will Shape the Next Year',
    excerpt: 'Our team was on the ground in Las Vegas. Here\'s what stood out — and what we\'re already building with.',
  },
]

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="section-inner">
        <Reveal><div className="section-label">Latest Thinking</div></Reveal>
        <div className="blog-header">
          <Reveal>
            <h2 className="sec-title">Trends & insights from <span className="s">our engineers</span></h2>
          </Reveal>
          <Reveal delay={1}>
            <a href="#" className="view-all">All Articles →</a>
          </Reveal>
        </div>
        <Reveal>
          <div className="blog-grid">
            {POSTS.map((p, i) => (
              <div className="blog-card" key={i}>
                <div className="blog-meta">
                  <span className="blog-cat">{p.cat}</span>
                  <span className="blog-date">{p.date}</span>
                  <span className="blog-read">{p.read}</span>
                </div>
                <div className="blog-img">{p.label}</div>
                <h3 className="blog-ttl">{p.title}</h3>
                <p className="blog-excerpt">{p.excerpt}</p>
                <a href="#" className="blog-link">Read More →</a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
