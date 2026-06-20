import { motion } from 'framer-motion'
import { iconMap } from './iconMap'

// itemVariants — used as the CHILD variant inside Skills.jsx's staggered container.
// No "initial"/"whileInView" here — the parent controls when this fires.
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
}

function SkillCard({ name, icon }) {
  const Icon = iconMap[icon]

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-cyan-400/50 hover:bg-white/10"
    >
      {Icon && <Icon className="text-2xl text-cyan-400" />}
      <p className="text-sm text-gray-200">{name}</p>
    </motion.div>
  )
}

export default SkillCard
