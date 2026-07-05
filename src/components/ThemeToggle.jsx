import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light'
  return (
    <button
      onClick={onToggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className="relative flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-ink hover:border-accent"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {isLight ? <Sun size={16} /> : <Moon size={16} />}
      </motion.span>
    </button>
  )
}
