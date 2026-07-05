import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Expand, ChevronLeft, ChevronRight, Download } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { certificates } from '../data/experience'

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null
  const active = isOpen ? certificates[activeIndex] : null

  function close() {
    setActiveIndex(null)
  }

  function next() {
    setActiveIndex((i) => (i + 1) % certificates.length)
  }

  function prev() {
    setActiveIndex((i) => (i - 1 + certificates.length) % certificates.length)
  }

  // Keyboard controls while the lightbox is open
  useEffect(() => {
    if (!isOpen) return
    function onKey(e) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  return (
    <section id="certificates" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          path="certificates.jsx"
          title="Certificates"
          description="Credentials that back up the skills above. Tap any card for a full-size view."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`View full-size ${cert.title} certificate`}
                className="relative block aspect-[4/3] w-full overflow-hidden border-b border-border bg-white"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-contain p-3"
                />
                <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-canvas/80 text-ink shadow-glass backdrop-blur transition-colors group-hover:bg-accent group-hover:text-white">
                  <Expand size={14} />
                </span>
              </button>

              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-ink">{cert.title}</h3>
                <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-glass"
            >
              <button
                onClick={close}
                aria-label="Close certificate preview"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
              >
                <X size={18} />
              </button>

              <div className="relative flex flex-1 items-center justify-center bg-white">
                <img
                  src={active.image}
                  alt={active.title}
                  className="max-h-[70vh] w-full object-contain"
                />

                {certificates.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Previous certificate"
                      className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next certificate"
                      className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-border p-4">
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{active.title}</h3>
                  <p className="text-xs text-muted">
                    {active.issuer} · {activeIndex + 1} of {certificates.length}
                  </p>
                </div>
                <a
                  href={active.image}
                  download
                  className="flex shrink-0 items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <Download size={14} /> Save
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}