import { useState, useEffect } from 'react'

export default function Navbar() {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav${stuck ? ' stuck' : ''}`}>
      <a href="#" className="logo">
        <div className="logo-mark" />
        AXIOM
      </a>
      <ul className="nav-links">
        <li><a href="#services" onClick={e => { e.preventDefault(); scrollTo('services') }}>Services</a></li>
        <li><a href="#projects" onClick={e => { e.preventDefault(); scrollTo('projects') }}>Projects</a></li>
        <li><a href="#about" onClick={e => { e.preventDefault(); scrollTo('about') }}>About</a></li>
        <li><a href="#blog" onClick={e => { e.preventDefault(); scrollTo('blog') }}>Insights</a></li>
        <li>
          <button className="nav-btn" onClick={() => scrollTo('contact')}>
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  )
}
