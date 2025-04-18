import React from 'react';
import { motion } from 'framer-motion';

const Discuss = () => {
  // Variants for child components
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <div className="bg-black pt-28 pb-28 border-b border-blue-300">
      <div className="mx-auto w-[95%] md:w-full max-w-7xl flex flex-col items-center">

        <motion.div
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-white"
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text">
            Discuss Project
          </h1>
        </motion.div>

        <div className="Main-part mt-20 sm:mt-28 w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex flex-col items-center gap-9 pb-20 shadow-2xl">
          
          <motion.div
            className="image border-4 border-blue-600 rounded-full p-1 mt-16 sm:mt-20"
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocK7svk8wURS2FaxZidKLSwrZETm9Jh3ACl6Baj6nyDsxt5wT14=s576-c-no"
              alt="Developer-image"
              className="w-32 sm:w-40 md:w-48 mx-auto rounded-full shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex justify-center"
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text">
              Lawar James Chaudhary
            </h1>
          </motion.div>

          <motion.div
            className="sub-topic text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-center"
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1>Frontend Developer | Web Designer | Graphics Designer</h1>
          </motion.div>

          <motion.div
            className="buttons flex flex-col sm:flex-row gap-7"
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="first-button border-4 border-blue-600 flex rounded-full px-7 py-4 items-center gap-4 hover:text-xl transition transform ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 shadow-md">
              <div className="image-div">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/724/724822.png"
                  alt="download"
                  className="w-9"
                />
              </div>
              <div className="text-div text-xl font-medium">
                <a href="https://internepal.com.np/customer/2025-01-25-08-25-20-Lawar-James-Chaudhary.pdf" className="text-blue-700 hover:text-blue-800">
                  Resume
                </a>
              </div>
            </div>

            <div className="first-button bg-gray-300 flex rounded-full px-7 py-4 items-center gap-4 hover:bg-white hover:text-xl transition transform ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 shadow-md">
              <div className="image-div">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2190/2190552.png"
                  alt="message"
                  className="w-9"
                />
              </div>
              <div className="text-div text-xl font-medium">
                <a href="https://www.linkedin.com/in/lawar-james-chaudhary-404a74284/" className="text-blue-700 hover:text-blue-800">
                  Discuss Project
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Discuss;
