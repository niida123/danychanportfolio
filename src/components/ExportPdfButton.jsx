import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { pdf } from '@react-pdf/renderer'
import { FileDown, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import PortfolioDocument from './PortfolioDocument'

const PDF_FILENAME = 'Dany_Chan_Portfolio.pdf'

/**
 * Generates the portfolio PDF from existing site data (see
 * PortfolioDocument.jsx) and triggers a browser download for it.
 * Status states: idle -> generating -> done | error -> idle
 */
export default function ExportPdfButton({ className = '', labelClassName = '' }) {
  const [status, setStatus] = useState('idle')
  const isBusy = status === 'generating'

  const handleExport = useCallback(async () => {
    if (isBusy) return
    setStatus('generating')

    try {
      const blob = await pdf(<PortfolioDocument />).toBlob()
      const url = URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.download = PDF_FILENAME
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      setStatus('done')
      setTimeout(() => setStatus('idle'), 2200)
    } catch (err) {
      console.error('Failed to generate portfolio PDF:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3200)
    }
  }, [isBusy])

  const label =
    status === 'generating'
      ? 'Generating…'
      : status === 'done'
      ? 'Downloaded'
      : status === 'error'
      ? 'Try again'
      : 'Export PDF'

  return (
    <motion.button
      type="button"
      onClick={handleExport}
      disabled={isBusy}
      whileHover={!isBusy ? { y: -2 } : undefined}
      whileTap={!isBusy ? { scale: 0.97 } : undefined}
      aria-label={isBusy ? 'Generating portfolio PDF' : 'Export portfolio as PDF'}
      aria-busy={isBusy}
      title="Export Portfolio PDF"
      className={`inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-ink outline-none transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-70 sm:text-sm ${className}`}
    >
      {isBusy && <Loader2 size={15} className="shrink-0 animate-spin" aria-hidden="true" />}
      {status === 'done' && <CheckCircle2 size={15} className="shrink-0 text-good" aria-hidden="true" />}
      {status === 'error' && <AlertCircle size={15} className="shrink-0 text-red-400" aria-hidden="true" />}
      {status === 'idle' && <FileDown size={15} className="shrink-0" aria-hidden="true" />}

      <span className={labelClassName}>{label}</span>

      {/* Announced to screen readers without duplicating the visible label */}
      <span className="sr-only" role="status" aria-live="polite">
        {status === 'generating'
          ? 'Generating your portfolio PDF, please wait.'
          : status === 'done'
          ? 'Portfolio PDF downloaded.'
          : status === 'error'
          ? 'Something went wrong generating the PDF. Please try again.'
          : ''}
      </span>
    </motion.button>
  )
}
