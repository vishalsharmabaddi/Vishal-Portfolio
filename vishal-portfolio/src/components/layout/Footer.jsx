import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
        <p>&copy; {new Date().getFullYear()} Vishal Kumar. All rights reserved.</p>

        <div className="flex items-center gap-5 text-lg">
          <a
            href="https://github.com/vishalsharmabaddi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/vishal-kumar-35ab5525a"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
            aria-label="LinkedIn"
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
    </footer>
  )
}

export default Footer
