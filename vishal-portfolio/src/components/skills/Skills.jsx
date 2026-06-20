import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import SkillCard from './SkillCard'

// Parent variant — staggerChildren tells Framer Motion to animate each
// child (SkillCard) one after another instead of all at once.
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

function Skills() {
  return (
    <div className="w-full max-w-5xl px-6">
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Skills
      </h2>
      <h3 className="mb-10 text-3xl font-bold md:text-4xl">
        Tools I build with
      </h3>

      {/* One block per category, mapped from data/skills.js */}
      <div className="space-y-10">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h4 className="mb-4 text-lg font-semibold text-gray-300">
              {category.title}
            </h4>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
            >
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
