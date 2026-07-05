import { motion } from 'framer-motion'
import { ExternalLink, FileCode2 } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50"
    >
    <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-surface2 to-surface">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <FileCode2 size={34} className="text-muted transition-transform duration-300 group-hover:scale-110 group-hover:text-accent" />
      )}
      <span className="absolute right-3 top-3 rounded-full border border-border bg-canvas/70 px-2.5 py-0.5 font-mono text-[10px] text-muted backdrop-blur">
        {project.category}
      </span>
    </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-1 font-mono text-[11px] text-muted">{project.file}</p>
        <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface2 px-2.5 py-0.5 font-mono text-[11px] text-accent2"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.features.slice(0, 4).map((feature) => (
            <span key={feature} className="text-[11px] text-muted before:mr-1 before:content-['·']">
              {feature}
            </span>
          ))}
          {project.features.length > 4 && (
            <span className="text-[11px] text-muted">+{project.features.length - 4} more</span>
          )}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
          <a
            href={project.github}
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            <GithubIcon size={15} /> Code
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent2"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  )
}
