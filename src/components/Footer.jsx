const SERVICES_LINKS = [
  { label: 'Software Dev & DevOps' },
  { label: 'AI & Data Management' },
  { label: 'Cloud & Infrastructure' },
  { label: 'Innovation & PoC' },
  { label: 'Staff Augmentation', coming: true },
]
const COMPANY_LINKS = ['About Us', 'Projects', 'Careers', 'Insights', 'Offices']

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="logo">
            <div className="logo-mark" />
            AXIOM
          </a>
          <p className="footer-tagline">
            Engineering-first technology partner for ambitious teams building the future.
          </p>
          <div className="footer-newsletter">
            <input className="footer-input" type="email" placeholder="your@email.com" />
            <button className="footer-sub-btn">→</button>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            {SERVICES_LINKS.map(s => (
              <li key={s.label}>
                <a href="#">
                  {s.label}
                  {s.coming && <span className="coming-tag">Soon</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul className="footer-links">
            {COMPANY_LINKS.map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Partner</h4>
          <div className="partner-badge"><span>Google Cloud</span>&nbsp;Partner</div>
          <ul className="footer-links" style={{ marginTop: '14px' }}>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Legal Notice</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 AXIOM. All rights reserved.</span>
        <span>Built with <span className="footer-heart">♥</span> in 🇨🇭</span>
      </div>
    </footer>
  )
}
