'use client';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-14 pb-20 bg-black">
        <h1 className="text-4xl text-center py-10">About Me</h1>
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello! I&apos;m a passionate photographer who loves to capture the beauty of the world around me. From stunning landscapes to intimate portraits, I strive to tell unique stories through my lens. Whether it&apos;s a special moment or a stunning view, my goal is to preserve memories that last a lifetime.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            My Skills
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Over the years, I&apos;ve honed my skills in various areas of photography. Here are some of the techniques and styles I specialize in:
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 text-center p-6 rounded-lg">
              <h3 className="text-xl text-white mb-4">Portrait Photography</h3>
              <p className="text-gray-400">Capturing personalities and emotions through portraits that tell a story.</p>
            </div>
            <div className="bg-gray-800 text-center p-6 rounded-lg">
              <h3 className="text-xl text-white mb-4">Landscape Photography</h3>
              <p className="text-gray-400">Exploring the world and capturing breathtaking landscapes.</p>
            </div>
            <div className="bg-gray-800 text-center p-6 rounded-lg">
              <h3 className="text-xl text-white mb-4">Event Photography</h3>
              <p className="text-gray-400">Documenting moments at weddings, parties, and other special events.</p>
            </div>
            <div className="bg-gray-800 text-center p-6 rounded-lg">
              <h3 className="text-xl text-white mb-4">Product Photography</h3>
              <p className="text-gray-400">Showcasing products with professional lighting and compositions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Featured Photography Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Below are some of my favorite photography projects that highlight my style and creativity:
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-white mb-4">Portrait Session</h3>
              <p className="text-gray-400 mb-4">
                A set of portraits capturing the essence of different personalities, with natural light and intimate compositions.
              </p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-white mb-4">Urban Exploration</h3>
              <p className="text-gray-400 mb-4">
                Exploring the heart of the city, capturing its urban charm and architectural details.
              </p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-white mb-4">Nature Photography</h3>
              <p className="text-gray-400 mb-4">
                Capturing the beauty of nature with a focus on landscapes, wildlife, and serene environments.
              </p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            If you&apos;re interested in collaborating on a photography project or just want to say hello, I&apos;d love to hear from you. Feel free to reach out!
          </motion.p>
          <a href="mailto:your.email@example.com" className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-all duration-300">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
