import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, FolderGit2 } from 'lucide-react'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { scrollToId } from '../utils/scrollTo'
import profilePhoto from '../assets/Chan Dany.JPG'

const roles = ['Full Stack Web Developer', 'Laravel Developer', 'React Developer', 'REST API Builder']

export default function Hero() {
  const typed = useTypingEffect(roles, { pause: 1400 })

  return (
    <section id="home" className="relative overflow-hidden pt-20 sm:pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[100px] animate-floaty" />
        <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-accent2/20 blur-[110px] animate-floaty [animation-delay:2s]" />
        <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-good/10 blur-[90px] animate-floaty [animation-delay:4s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-good">
            <span className="h-1.5 w-1.5 rounded-full bg-good" /> available for junior roles
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-accent">Dany Chan</span>
          </h1>

          <p className="mt-3 h-8 font-mono text-lg text-accent2 sm:text-xl">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-accent2 align-middle animate-blink" />
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I build modern, scalable, and user-friendly web applications using Laravel,
            React, JavaScript, PHP, and MySQL.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToId('projects')}
              className="flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white shadow-glass"
            >
              <FolderGit2 size={16} /> View Projects
            </motion.button>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/Chan Dany Resume.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-ink"
            >
              <Download size={16} /> Download CV
            </motion.a>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToId('contact')}
              className="flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-muted hover:text-ink"
            >
              <Mail size={16} /> Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="glass overflow-hidden rounded-2xl shadow-glass">
            <div className="flex items-center gap-1.5 border-b border-border bg-surface2 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F5A66B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F5D76B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#6EE7B7]" />
              <span className="ml-2 font-mono text-[11px] text-muted">developer.json</span>
            </div>
            <div className="p-6 font-mono text-[13px] leading-relaxed sm:text-sm">
              <p><span className="text-muted">{'{'}</span></p>
              <p className="pl-4"><span className="text-accent">"name"</span>: <span className="text-accent2">"Dany Chan"</span>,</p>
              <p className="pl-4"><span className="text-accent">"role"</span>: <span className="text-accent2">"Full Stack Developer"</span>,</p>
              <p className="pl-4"><span className="text-accent">"stack"</span>: [</p>
              <p className="pl-8 text-good">"Laravel", "React", "PHP",</p>
              <p className="pl-8 text-good">"JavaScript", "MySQL"</p>
              <p className="pl-4">],</p>
              <p className="pl-4"><span className="text-accent">"focus"</span>: <span className="text-accent2">"clean, scalable systems"</span>,</p>
              <p className="pl-4"><span className="text-accent">"status"</span>: <span className="text-good">"open_to_work"</span></p>
              <p><span className="text-muted">{'}'}</span></p>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-8 hidden h-28 w-28 overflow-hidden rounded-2xl border border-border bg-surface shadow-glass sm:flex">
            <img
              src={profilePhoto}
              alt="Portrait of Dany Chan"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToId('about')}
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="mx-auto mb-8 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted lg:absolute lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2"
      >
        <ArrowDown size={16} />
      </motion.button>
    </section>
  )
}
