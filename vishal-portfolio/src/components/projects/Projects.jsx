import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

function Projects() {
  return (
    <div className="w-full max-w-5xl px-6">
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Projects
      </h2>
      <h3 className="mb-10 text-3xl font-bold md:text-4xl">Things I've built</h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
