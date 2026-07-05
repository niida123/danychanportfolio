import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { education } from '../data/experience'

export default function Education() {
  return (
    <section id="education" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading path="education.jsx" title="Education" />

        <div className="mt-10 max-w-2xl space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <GraduationCap size={20} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{edu.degree}</h3>
                <p className="mt-1 text-sm text-muted">{edu.school}</p>
                <p className="mt-1 font-mono text-xs text-accent2">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
