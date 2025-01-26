import React from 'react';
import { motion } from 'framer-motion';

const GetInTouch = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between animations of child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      id="social-media"
      className="bg-black flex flex-col items-center border-b-[0.1px] md:py-28 pb-28 border-b-blue-300"
    >
      <div className="technology w-full px-4" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header Section */}
        <motion.div
          className="text-white text-center font-extrabold text-2xl md:text-4xl lg:text-7xl flex justify-center mt-12 pb-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text">
            Contact With Me
          </h1>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          className="flex gap-4 md:gap-6 lg:gap-8 flex-wrap justify-center mt-6 md:mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {[
            {
              name: 'LinkedIn',
              icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png',
              link: 'https://www.linkedin.com/in/lawar-james-chaudhary-404a74284/',
              color: 'text-sky-700',
            },
            {
              name: 'Instagram',
              icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
              link: 'https://www.instagram.com/laiberchaudhary/',
              color: 'text-red-600',
            },
            {
              name: 'GitHub',
              icon: 'https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png',
              link: 'https://github.com/lawarjameschaudhary',
              color: 'text-black',
            },
            {
              name: 'Facebook',
              icon: 'https://e7.pngegg.com/pngimages/991/568/png-clipart-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png',
              link: 'https://www.facebook.com/profile2626201',
              color: 'text-sky-700',
            },
            {
              name: 'lawarjames67929@gmail.com',
              icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968534.png',
              link: 'mailto:lawarjames077@gmail.com',
              color: '',
            },
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3 hover:scale-105 transition-transform duration-300 ease-in-out">
                <img src={item.icon} alt={item.name} className="w-8 md:w-12" />
                <div className={`text-md md:text-3xl font-extrabold ${item.color}`}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;
