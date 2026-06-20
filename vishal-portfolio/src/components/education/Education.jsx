import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'
import { degrees, certifications } from '../../data/education'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
}

function Education() {
  return (
    <div className="w-full max-w-4xl px-6">
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Education & Certifications
      </h2>
      <h3 className="mb-10 text-3xl font-bold md:text-4xl">
        Where the knowledge comes from
      </h3>

      {/* Degrees — bigger cards, formal education */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10 grid gap-6 md:grid-cols-2"
      >
        {degrees.map((degree) => (
          <motion.div
            key={degree.title}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-cyan-400/40"
          >
            <FaGraduationCap className="mb-3 text-2xl text-cyan-400" />
            <h4 className="mb-1 font-semibold text-white">{degree.title}</h4>
            <p className="mb-2 text-sm text-gray-400">{degree.institution}</p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>{degree.period}</span>
              <span className="rounded-full border border-cyan-400/30 px-2 py-0.5 text-cyan-300">
                {degree.score}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications — smaller badge-style list, distinct from formal degrees */}
      <h4 className="mb-4 text-lg font-semibold text-gray-300">Certifications</h4>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-3 md:grid-cols-2"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert}
            variants={itemVariants}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300"
          >
            <FaCertificate className="mt-0.5 shrink-0 text-cyan-400" />
            <span>{cert}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Education
