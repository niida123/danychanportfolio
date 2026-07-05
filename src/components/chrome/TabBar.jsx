import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navItems } from '../../data/social'
import { scrollToId } from '../../utils/scrollTo'
import ThemeToggle from '../ThemeToggle'

export default function TabBar({ activeId, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  function handleNav(id) {
    scrollToId(id)
    setOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-1 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNav('home')}
          className="mr-4 shrink-0 py-3 font-display text-sm font-semibold tracking-tight text-ink"
        >
          dany<span className="text-accent">.</span>chan
        </button>

        <div className="scrollbar-thin hidden flex-1 items-center overflow-x-auto lg:flex">
          {navItems.map((item) => {
            const isActive = item.id === activeId
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`group relative flex items-center gap-2 whitespace-nowrap border-r border-border px-4 py-3 font-mono text-[13px] transition-colors ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-good' : 'bg-transparent group-hover:bg-border'}`} />
                {item.file}
                {isActive && (
                  <motion.span
                    layoutId="active-tab"
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-accent"
                  />
                )}
              </button>
            )
          })}
        </div>

        <div className="ml-auto flex items-center gap-2 py-2 lg:ml-0">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink lg:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-surface lg:hidden"
          >
            <div className="flex flex-col px-4 py-2 font-mono text-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-2 border-b border-border/60 py-3 text-left last:border-none ${
                    item.id === activeId ? 'text-accent' : 'text-muted'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {item.file}
                  <span className="ml-auto text-xs text-muted">{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
