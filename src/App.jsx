import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import Services from './sections/Services'
import Projects from './sections/Projects'
import About from './sections/About'
import Blog from './sections/Blog'
import Contact from './sections/Contact'

function Divider() {
  return <div className="divider" />
}

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Divider />
      <Projects />
      <Divider />
      <About />
      <Divider />
      <Blog />
      <Divider />
      <Contact />
      <Footer />
    </>
  )
}
