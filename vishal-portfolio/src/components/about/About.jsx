import { motion } from 'framer-motion'
import { fadeInUp } from '../../lib/animations'

// Small data array — keeping it local to this file since it's only
// used here (bigger datasets like skills/projects get their own data/ file later)
const stats = [
  { label: 'Years of Experience', value: '1+' },
  { label: 'MCA CGPA', value: '9.1' },
  { label: 'Real-World Projects', value: '3+' },
]

function About() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl px-6"
    >
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
        About Me
      </h2>
      <h3 className="mb-8 text-3xl font-bold md:text-4xl">
        Beyond the code, there's a person.
      </h3>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <p className="mb-4 text-gray-300">
          My journey didn't start with code — it started with a B.Sc. in
          Chemistry. Somewhere along the way, I realized I was more curious
          about how things <em>work</em> than what they're made of, so I
          pivoted into computer applications, finishing my MCA with a 9.1
          CGPA.
        </p>
        <p className="mb-4 text-gray-300">
          Today I work as a Full Stack Developer, building real websites and
          automation tools that real businesses depend on — from REST APIs to
          a Python tool that saves hours of manual reporting every month.
          I'm not chasing buzzwords; I'm chasing problems worth solving.
        </p>
        <p className="text-gray-300">
          Outside of deadlines, I'm the person who'll automate a task just
          because doing it manually twice felt unnecessary. That curiosity is
          what I bring to every team I work with — remote-friendly, always
          learning, and looking for the next interesting problem.
        </p>

        {/* Stats row — map over the small array above, each needs a unique key */}
        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-cyan-400 md:text-3xl">
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default About
