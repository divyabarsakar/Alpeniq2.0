import { useState } from 'react'
import { Reveal } from '../components/Reveal'

const CHIPS = ['Software Dev', 'AI & Data', 'Cloud Infra', 'Innovation / PoC', 'Other']
const PERKS = [
  'Free initial consultation — no strings attached',
  'Direct access to senior engineers from day one',
  'Response within 24 hours, guaranteed',
]

export default function Contact() {
  const [activeChips, setActiveChips] = useState(['Software Dev'])

  const toggleChip = (chip) => {
    setActiveChips(prev =>
      prev.includes(chip) ? prev.filter(c => c !== chip) : [...prev, chip]
    )
  }

  return (
    <section className="contact" id="contact">
      <div className="section-inner">
        <div className="contact-wrap">
          <div className="contact-left">
            <Reveal><div className="section-label">Get In Touch</div></Reveal>
            <Reveal>
              <h2 className="contact-title">Let's build something <span className="s">remarkable</span></h2>
            </Reveal>
            <Reveal>
              <p className="contact-body">
                No commitment, no pressure. Tell us what you're trying to build — we'll come back to you within 24 hours with thoughts and next steps.
              </p>
            </Reveal>
            <Reveal>
              <div className="contact-perks">
                {PERKS.map(p => <div className="contact-perk" key={p}>{p}</div>)}
              </div>
            </Reveal>
            <Reveal>
              <div className="contact-person">
                <div className="person-avatar">AX</div>
                <div>
                  <div className="person-name">Alex Müller</div>
                  <div className="person-role">Co-Founder & Lead Architect</div>
                  <a href="mailto:hello@axiom.dev" className="person-email">hello@axiom.dev</a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="contact-right">
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <div className="form-row">
                <div className="form-field">
                  <label>First Name *</label>
                  <input type="text" placeholder="Jane" />
                </div>
                <div className="form-field">
                  <label>Last Name *</label>
                  <input type="text" placeholder="Smith" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Email *</label>
                  <input type="email" placeholder="jane@company.com" />
                </div>
                <div className="form-field">
                  <label>Company</label>
                  <input type="text" placeholder="Acme Inc." />
                </div>
              </div>
              <div className="form-chips">
                {CHIPS.map(chip => (
                  <span
                    key={chip}
                    className={`form-chip${activeChips.includes(chip) ? ' active' : ''}`}
                    onClick={() => toggleChip(chip)}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                <div className="form-field">
                  <label>Message *</label>
                  <textarea placeholder="Tell us about your project..." />
                </div>
              </div>
              <button type="submit" className="form-submit">Send Message →</button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
