import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaClock } from 'react-icons/fa'
import { fadeInLeft } from '../../lib/animations'
import { sendContactMessage } from '../../lib/api'

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' }

// Parent variant staggers each field's entrance instead of the whole
// form fading in as one block — gives the "more alive" feel that was asked for.
const formContainerVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

function ContactForm() {
  // One state object for all 4 fields — simpler than 4 separate useState calls
  // since they all change the same way (typing updates one key at a time).
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | error
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      await sendContactMessage(form)
      setForm(initialForm)
      navigate('/thank-you')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message)
    }
  }

  return (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
      {/* Left column: heading + context */}
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
          Let's Connect
        </span>

        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Start a{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Conversation
          </span>
        </h3>

        <p className="mb-8 max-w-md text-gray-400">
          Have a project in mind, a freelance gig, or just want to say hi?
          I'd love to hear from you — fill out the form and I'll get back to
          you directly.
        </p>

        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
            <FaClock />
          </span>
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Response Time
            </p>
            <p className="font-medium text-gray-200">Usually within 24–48 hours</p>
          </div>
        </div>
      </motion.div>

      {/* Right column: the form card */}
      <motion.form
        variants={formContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        onSubmit={handleSubmit}
        className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10"
      >
        <motion.div variants={fieldVariants} className="mb-5 grid gap-4 md:grid-cols-2">
          <div className="group">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-400 transition-colors group-hover:text-cyan-300">
              Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors duration-200 hover:border-cyan-400/40 focus:border-cyan-400"
            />
          </div>
          <div className="group">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-400 transition-colors group-hover:text-cyan-300">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors duration-200 hover:border-cyan-400/40 focus:border-cyan-400"
            />
          </div>
        </motion.div>

        <motion.div variants={fieldVariants} className="mb-5 grid gap-4 md:grid-cols-2">
          <div className="group">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-400 transition-colors group-hover:text-cyan-300">
              Phone
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors duration-200 hover:border-cyan-400/40 focus:border-cyan-400"
            />
          </div>
          <div className="group">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-400 transition-colors group-hover:text-cyan-300">
              Subject
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Project Inquiry"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors duration-200 hover:border-cyan-400/40 focus:border-cyan-400"
            />
          </div>
        </motion.div>

        <motion.div variants={fieldVariants} className="group mb-6">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-400 transition-colors group-hover:text-cyan-300">
            Message
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            whileHover={{ scale: 1.005 }}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="How can I help you?"
            className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors duration-200 hover:border-cyan-400/40 focus:border-cyan-400"
          />
        </motion.div>

        <motion.button
          variants={fieldVariants}
          whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(34,211,238,0.45)' }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === 'submitting'}
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 py-3.5 font-medium text-black transition-colors duration-200 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
          {status !== 'submitting' && (
            <FaPaperPlane className="transition-transform duration-200 group-hover:translate-x-1" />
          )}
        </motion.button>

        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-sm text-red-400"
          >
            {errorMessage || 'Could not send message. Please try again.'}
          </motion.p>
        )}
      </motion.form>
    </div>
  )
}

export default ContactForm
