import Link from "next/link";
import { motion } from "framer-motion";

export default function InfoSection() {
  return (
    <section id="info" className="min-h-screen flex flex-col justify-center items-center py-20 bg-gray-900">
      <div className="text-center max-w-3xl mx-auto">
        {/* Animate the heading with motion */}
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and a slight downward position
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
          viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of element is in view
          transition={{ duration: 1 }}
        >
          Welcome to My Photography Portfolio
        </motion.h2>

        {/* Animate the paragraph with motion */}
        <motion.p
          className="text-lg text-gray-300 mb-6"
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and a slight downward position
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
          viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of element is in view
          transition={{ duration: 1, delay: 0.2 }}
        >
          I&apos;m a passionate photographer specializing in capturing moments through the lens. From portraits to landscapes, I aim to tell stories that resonate through my photos. Browse my work and feel free to reach out if you&apos;d like to work together or have any inquiries.
        </motion.p>

        {/* Animate the button with motion */}
        <motion.div
        className="flex justify-center space-x-4"
          initial={{ opacity: 0 }} // Start with opacity 0
          whileInView={{ opacity: 1 }} // Fade in when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of element is in view
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white text-lg py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
          <Link
            href="/photos"
            className="inline-block bg-white text-blue-600 text-lg py-2 px-6 rounded-lg hover:bg-gray-300 transition"
          >
            View Photos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
