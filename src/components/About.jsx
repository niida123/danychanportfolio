import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Server, GraduationCap, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { stats } from '../data/social'
import { useCountUp } from '../hooks/useCountUp'

const passions = [
  { icon: Code2, label: 'Web Development' },
  { icon: Palette, label: 'UI/UX' },
  { icon: Server, label: 'Backend Development' },
  { icon: GraduationCap, label: 'Learning New Technologies' },
  { icon: Users, label: 'Team Collaboration' },
]

function StatCard({ stat, index }) {
  const [start, setStart] = useState(false)
  const value = useCountUp(stat.value, { start })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setStart(true)}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass rounded-2xl px-5 py-6 text-center"
    >
      <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        {value}
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="mt-1.5 text-xs text-muted sm:text-sm">{stat.label}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <SectionHeading
            path="about.jsx"
            title="A developer who enjoys turning problems into working software."
            description="I'm a motivated Information Technology student with hands-on experience in full-stack web development using Laravel, MySQL, JavaScript, and Bootstrap. I enjoy building modern web applications and solving real-world problems, from the database schema all the way up to the interface someone actually clicks on."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center gap-3"
          >
            <p className="mb-1 font-mono text-xs text-muted">// what keeps me interested</p>
            {passions.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={17} />
                </span>
                <span className="text-sm text-ink">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard stat={stat} index={i} key={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
