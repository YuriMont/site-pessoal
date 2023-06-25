import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Projects from './components/projects'
import Skills from './components/skills'

export default function Home() {
  return (
    <main>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
