import { GithubIcon, LinkedinIcon, TelegramIcon } from './BrandIcons'
import { socialLinks } from '../data/social'

const iconMap = { Github: GithubIcon, Linkedin: LinkedinIcon, Send: TelegramIcon }

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Dany Chan. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon]
            return (
              <a
                key={link.id}
                href={link.url}
                aria-label={link.label}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={14} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
