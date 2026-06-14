import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Apps from './components/Apps'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
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
