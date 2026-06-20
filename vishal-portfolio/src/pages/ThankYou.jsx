import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa'

function ThankYou() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaCheckCircle className="mx-auto mb-6 text-6xl text-cyan-400" />
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Message Sent!</h1>
        <p className="mx-auto mb-8 max-w-md text-gray-400">
          Thanks for reaching out. I usually reply within 24–48 hours —
          talk soon!
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-medium text-black transition hover:bg-cyan-400"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

export default ThankYou
