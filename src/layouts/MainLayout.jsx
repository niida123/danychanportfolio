import { useTheme } from '../hooks/useTheme'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { navItems } from '../data/social'
import TitleBar from '../components/chrome/TitleBar'
import TabBar from '../components/chrome/TabBar'
import ScrollProgress from '../components/ScrollProgress'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'

const sectionIds = navItems.map((n) => n.id)

export default function MainLayout({ children }) {
  const { theme, toggle } = useTheme()
  const activeId = useScrollSpy(sectionIds)

  return (
    <div className="min-h-screen bg-canvas font-body text-ink antialiased">
      <ScrollProgress />
      <TitleBar activeId={activeId} />
      <TabBar activeId={activeId} theme={theme} onToggleTheme={toggle} />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  )
}
