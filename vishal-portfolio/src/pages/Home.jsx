import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SEO from '../components/layout/SEO'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Experience from '../components/experience/Experience'
import Education from '../components/education/Education'
import ContactForm from '../components/contact/ContactForm'

function Home() {
  return (
    <div className="bg-black text-white">
      <SEO />
      <Navbar />

      <section id="home" className="flex h-screen items-center justify-center pt-16">
        <Hero />
      </section>

      <section id="about" className="flex min-h-screen items-center justify-center py-20">
        <About />
      </section>

      <section id="skills" className="flex min-h-screen items-center justify-center py-20">
        <Skills />
      </section>

      <section id="projects" className="flex min-h-screen items-center justify-center py-20">
        <Projects />
      </section>

      <section id="experience" className="flex min-h-screen items-center justify-center py-20">
        <Experience />
      </section>

      <section id="education" className="flex min-h-screen items-center justify-center py-20">
        <Education />
      </section>

      <section id="contact" className="flex min-h-screen items-center justify-center py-20">
        <ContactForm />
      </section>

      <Footer />
    </div>
  )
}

export default Home
