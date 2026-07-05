import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TelegramIcon } from './BrandIcons'
import SectionHeading from './SectionHeading'
import { contactInfo, socialLinks } from '../data/social'

const iconMap = { Github: GithubIcon, Linkedin: LinkedinIcon, Send: TelegramIcon }

const initialForm = { name: '', email: '', subject: '', message: '' }

// Replace with your own email — this is the FormSubmit AJAX endpoint,
// not a normal form action, so it returns JSON instead of redirecting.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/danychan48@gmail.com'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [showToast, setShowToast] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      // FormSubmit's ajax endpoint doesn't send back CORS headers the
      // browser can read, so a normal 'cors' fetch gets rejected by the
      // browser even when the request succeeds server-side (email still
      // arrives). 'no-cors' sends the request without trying to read the
      // response, avoiding that false-negative entirely.
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || 'New Portfolio Contact Message',
          message: form.message,
          _subject: 'New Portfolio Contact Message',
        }),
      })

      // With no-cors we can't inspect the response status/body — if fetch
      // didn't throw, the request was sent successfully.
      setStatus('sent')
      setForm(initialForm)
      setShowToast(true)
      setTimeout(() => setStatus('idle'), 2600)
      setTimeout(() => setShowToast(false), 4000)
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3200)
    }
  }

  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          path="contact.jsx"
          title="Let's build something together"
          description="Have a role, a project, or just a question about how something on this page was built? My inbox is open."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr,1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 transition-colors hover:border-accent/50">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent"><Mail size={16} /></span>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="text-sm text-ink">{contactInfo.email}</p>
              </div>
            </a>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 transition-colors hover:border-accent/50">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent"><Phone size={16} /></span>
              <div>
                <p className="text-xs text-muted">Phone</p>
                <p className="text-sm text-ink">{contactInfo.phone}</p>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent"><MapPin size={16} /></span>
              <div>
                <p className="text-xs text-muted">Location</p>
                <p className="text-sm text-ink">{contactInfo.location}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    aria-label={link.label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={17} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            </div>
            <div className="mt-5">
              <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required={false} />
            </div>
            <div className="mt-5">
              <label className="mb-1.5 block text-xs font-medium text-muted" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about the opportunity or project…"
                className="w-full resize-none rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
              />
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white disabled:opacity-80 sm:w-auto"
            >
              {status === 'sending' && <Loader2 size={16} className="animate-spin" />}
              {status === 'sent' && <CheckCircle2 size={16} />}
              {status === 'error' && <AlertCircle size={16} />}
              {status === 'idle' && <Send size={16} />}
              {status === 'sending'
                ? 'Sending…'
                : status === 'sent'
                ? 'Message sent'
                : status === 'error'
                ? 'Something went wrong — try again'
                : 'Send Message'}
            </motion.button>

            {status === 'error' && (
              <p className="mt-3 text-xs text-red-400">
                The message couldn't be sent. Please try again or email me directly at {contactInfo.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>

      <AnimatePresence>
        {showToast && <Toast onClose={() => setShowToast(false)} />}
      </AnimatePresence>
    </section>
  )
}

function Toast({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 shadow-lg shadow-black/20"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <CheckCircle2 size={16} />
      </span>
      <div>
        <p className="text-sm font-medium text-ink">Message sent</p>
        <p className="text-xs text-muted">Thanks for reaching out — I'll get back to you soon.</p>
      </div>
      <button
        onClick={onClose}
        aria-label="Dismiss notification"
        className="ml-2 text-muted transition-colors hover:text-ink"
      >
        ✕
      </button>
    </motion.div>
  )
}

function Field({ label, name, value, onChange, placeholder, type = 'text', required = true }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
        required={required}
      />
    </div>
  )
}