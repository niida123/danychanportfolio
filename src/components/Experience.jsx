import { motion } from 'framer-motion'
import { GitCommitHorizontal, GitBranch } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          path="experience.jsx"
          title="Where I've put these skills to work"
          description="A quick log of the hands-on work behind the numbers above."
        />

        <div className="relative mt-14 max-w-2xl">
          <div className="absolute left-[15px] top-2 h-full w-px bg-border" />

          {experience.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-10 pl-11 last:mb-0"
            >
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-surface text-accent">
                <GitBranch size={15} />
              </span>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">{job.role}</h3>
                  <span className="rounded-full border border-border bg-surface2 px-2.5 py-0.5 font-mono text-[11px] text-muted">
                    {job.period}
                  </span>
                </div>
                <p className="mb-4 font-mono text-xs text-muted">git checkout -b {job.branch}</p>

                <ul className="space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
                      <GitCommitHorizontal size={15} className="mt-0.5 shrink-0 text-good" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
