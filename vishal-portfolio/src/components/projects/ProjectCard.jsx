import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function ProjectCard({ title, description, tech, github, live, comingSoon }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        {/* comingSoon is true only for placeholder projects with no real links yet */}
        {comingSoon && (
          <span className="shrink-0 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
            Coming Soon
          </span>
        )}
      </div>

      <p className="mb-4 flex-1 text-sm text-gray-400">{description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Only render links that actually exist — github/live are optional per project */}
      {(github || live) && (
        <div className="flex gap-4 border-t border-white/10 pt-4 text-sm">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 transition hover:text-cyan-400"
            >
              <FaGithub /> Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 transition hover:text-cyan-400"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}

export default ProjectCard
