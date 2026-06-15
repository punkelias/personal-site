import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Apps from './components/Apps'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleField from './components/ParticleField'

export default function App() {
  return (
    <>
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <Apps />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
