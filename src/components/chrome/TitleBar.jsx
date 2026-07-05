import { navItems } from '../../data/social'

export default function TitleBar({ activeId }) {
  const active = navItems.find((n) => n.id === activeId) ?? navItems[0]
  return (
    <div className="hidden items-center gap-3 border-b border-border bg-surface2 px-4 py-1.5 font-mono text-[11px] text-muted sm:flex">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F5A66B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F5D76B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#6EE7B7]" />
      </div>
      <span className="ml-2 select-none">
        dany-chan-portfolio — <span className="text-ink">{active.file}</span>
      </span>
    </div>
  )
}
