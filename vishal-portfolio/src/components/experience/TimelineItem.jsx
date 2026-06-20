import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaChevronDown } from 'react-icons/fa'

// Only show this many bullet points by default — rest unlock via "See More".
const PREVIEW_COUNT = 2

// `fromLeft` decides which side of the center line this card sits on
// (desktop only) — Experience.jsx passes this based on index (even/odd).
function TimelineItem({ role, company, period, points, fromLeft }) {
  // Local state — starts collapsed (false), button click flips it.
  const [expanded, setExpanded] = useState(false)

  const visiblePoints = expanded ? points : points.slice(0, PREVIEW_COUNT)
  const hasMore = points.length > PREVIEW_COUNT

  const card = (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
    >
      <h4 className="mb-1 text-lg font-semibold text-white">{role}</h4>
      <p className="mb-3 text-sm text-gray-400">{company}</p>

      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300">
        <FaCalendarAlt /> {period}
      </span>

      <ul className="list-disc space-y-1 pl-5 text-sm text-gray-300">
        {visiblePoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-3 flex items-center gap-1 text-xs font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          {expanded ? 'Show Less' : 'See More'}
          <FaChevronDown className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      )}
    </motion.div>
  )

  return (
    <div className="relative mb-12 pl-10 md:grid md:grid-cols-2 md:gap-x-12 md:pl-0 md:last:mb-0">
      {/* Mobile: simple left-side line + dot (no zigzag, not enough width) */}
      <span className="absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-[#050507] md:left-1/2" />

      {fromLeft ? (
        <>
          {card}
          <div className="hidden md:block" />
        </>
      ) : (
        <>
          <div className="hidden md:block" />
          {card}
        </>
      )}
    </div>
  )
}

export default TimelineItem
