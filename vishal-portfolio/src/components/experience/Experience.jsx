import { experience } from '../../data/experience'
import TimelineItem from './TimelineItem'

function Experience() {
  return (
    <div className="w-full max-w-4xl px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Chronology
      </p>
      <h3 className="mb-12 text-3xl font-bold md:text-4xl">
        Experience{' '}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          &amp; Growth.
        </span>
      </h3>

      {/* Center vertical line — only visible on md+ (mobile uses the left-side line in TimelineItem) */}
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:left-1/2" />

        {experience.map((job, index) => (
          <TimelineItem key={job.role + job.company} {...job} fromLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  )
}

export default Experience
