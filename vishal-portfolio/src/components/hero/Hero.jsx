import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import profilePhoto from '../../assets/images/profile.png'
import { fadeInLeft, fadeInRight } from '../../lib/animations'

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Hero() {
  return (
    <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
      {/* Left column: intro text + CTA */}
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-cyan-400">Hi, I am</p>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Vishal Kumar</h1>

        <h2 className="mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Website Developer',
              2000,
              'Java Developer',
              2000,
              'React Developer',
              2000,
              'Web Developer',
              2000,
              'Automation Engineer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={65}
            repeat={Infinity}
            cursor={true}
          />
        </h2>

        <p className="mb-8 max-w-md text-gray-400">
          I build clean, modern web applications with React, Java, and Spring
          Boot — and I love automating the boring stuff along the way.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="rounded-full bg-cyan-500 px-6 py-3 font-medium text-black transition hover:bg-cyan-400"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Get In Touch
          </button>
        </div>
      </motion.div>

      {/* Right column: photo with glow ring */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative h-64 w-64 md:h-80 md:w-80">
          {/* Glow ring — blurred gradient circle sitting behind the photo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-40 blur-2xl" />

          <img
            src={profilePhoto}
            alt="Vishal Kumar"
            className="relative h-full w-full rounded-full border-2 border-cyan-400/50 object-cover"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
