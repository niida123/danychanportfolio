import { motion } from 'framer-motion'
import { Layout, Server, Database, Wrench } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/skills'

const groupIcons = {
  frontend: Layout,
  backend: Server,
  database: Database,
  tools: Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          path="skills.jsx"
          title="Tools and technologies I reach for"
          description="A working toolkit built from real projects — the same imports I'd expect to see at the top of my own files."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const Icon = groupIcons[group.id] ?? Layout
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
                className="rounded-2xl border border-border bg-surface p-6"
              >
              <div className="mb-5 flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
                <Icon size={14} className="text-accent" />

                <span className="text-accent">import</span>

                <span className="text-ink">
                  {'{'} {group.label} {'}'}
                </span>

                <span className="text-accent">
                  from
                </span>

                <span className="text-accent2">
                  '{group.path}'
                </span>
              </div>


                <div className="space-y-4">
                  {group.items.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-ink">{skill.name}</span>
                        <span className="font-mono text-xs text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 0.8, delay: i * 0.06, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-good"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
