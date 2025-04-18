import React from 'react';
import { motion } from 'framer-motion';

const GetInTouch = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const contacts = [
    {
      name: 'LinkedIn',
      icon: 'https://cdn-icons-png.flaticon.com/128/145/145807.png',
      link: 'https://www.linkedin.com/in/lawar-james-chaudhary-404a74284/',
      ring: 'ring-sky-500',
    },
    {
      name: 'Instagram',
      icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
      link: 'https://www.instagram.com/laiberchaudhary/',
      ring: 'ring-pink-500',
    },
    {
      name: 'GitHub',
      icon: 'https://cdn-icons-png.flaticon.com/128/733/733553.png',
      link: 'https://github.com/lawarjameschaudhary',
      ring: 'ring-gray-700',
    },
    {
      name: 'Facebook',
      icon: 'https://cdn-icons-png.flaticon.com/128/145/145802.png',
      link: 'https://www.facebook.com/profile2626201',
      ring: 'ring-blue-600',
    },
  ];

  return (
    <div
      id="contact"
      className="w-full bg-gradient-to-b from-black via-neutral-900 to-black py-24 px-6 text-white"
    >
      <motion.div
        className="text-center mb-20"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-700 text-transparent bg-clip-text">
          Let's Connect
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I’d love to hear from you — whether it’s a project, collaboration or just a chat.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className={`group bg-white/5 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:shadow-${contact.ring} hover:bg-white/10 ring-1 ${contact.ring} ring-opacity-30 hover:ring-opacity-70`}
          >
            <div className={`w-16 h-16 p-3 rounded-full bg-white/10 mb-4 ring-2 ${contact.ring}`}>
              <img src={contact.icon} alt={contact.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-medium">{contact.name}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Email Contact */}
      <motion.div
        className="mt-20 text-center"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-400 mb-4">Prefer email?</p>
        <a
          href="mailto:lawarjames077@gmail.com"
          className="inline-block text-white text-lg font-semibold px-6 py-3 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
        >
          lawarjames67929@gmail.com
        </a>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
