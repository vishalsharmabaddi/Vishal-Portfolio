import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
]

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold text-white"
        >
          Vishal<span className="text-cyan-400">.dev</span>
        </button>

        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-gray-300 transition hover:text-cyan-400"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-xl text-gray-300">
          <a
            href="https://github.com/vishalsharmabaddi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/vishal-kumar-35ab5525a"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="transition hover:text-cyan-400"
            aria-label="Contact me"
          >
            <MdEmail />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
