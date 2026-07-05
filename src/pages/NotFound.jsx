import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-canvas px-4 text-center font-body text-ink">
      <p className="font-mono text-sm text-muted">error.jsx</p>
      <h1 className="font-display text-6xl font-semibold text-accent">404</h1>
      <p className="max-w-sm text-muted">
        This route doesn't resolve to a component. Let's get you back to a page that exists.
      </p>
      <Link
        to="/"
        className="mt-2 flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white"
      >
        <Home size={16} /> Back to home
      </Link>
    </div>
  )
}
