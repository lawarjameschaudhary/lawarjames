import React from 'react';
import { motion } from 'framer-motion';

const Discuss = () => {
  // Variants for child components
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <div className="bg-black pt-20 md:pt-28 pb-20 md:pb-28 border-b border-blue-300">
    
      <div className="mx-auto w-[95%] md:w-full max-w-7xl flex flex-col items-center">
        
        <motion.div
          className="design-text text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text">
            Discuss Project
          </h1>
        </motion.div>

        <div className="Main-part mt-20 sm:mt-28 w-full bg-gray-800 rounded-2xl flex flex-col items-center gap-9 pb-20">
         
          <motion.div
            className="image border-2 border-blue-500 rounded-full p-1 mt-16 sm:mt-20"
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocK7svk8wURS2FaxZidKLSwrZETm9Jh3ACl6Baj6nyDsxt5wT14=s576-c-no"
              alt="Developer-image"
              className="w-32 sm:w-40 md:w-48 mx-auto rounded-full"
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
            className="sub-topic text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extralight text-center"
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1>Frontend Developer | Web Designer | Graphics Designer</h1>
          </motion.div>

       
          <motion.div
            className="buttons flex flex-col sm:flex-row gap-5 sm:gap-7"
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="first-button border-2 border-blue-600 flex rounded-full px-4 sm:px-5 py-3 sm:py-4 items-center gap-3 hover:text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="image-div">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/724/724822.png"
                  alt="download"
                  className="w-8 sm:w-9"
                />
              </div>
              <div className="text-div text-xl sm:text-2xl font-medium">
                <h1 className="text-blue-700">
                  <a href="https://internepal.com.np/customer/2025-01-25-08-25-20-Lawar-James-Chaudhary.pdf">
                    Resume
                  </a>
                </h1>
              </div>
            </div>

            <div className="first-button bg-gray-300 flex rounded-full px-4 sm:px-5 py-3 sm:py-4 items-center gap-3 hover:bg-white hover:text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="image-div">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2190/2190552.png"
                  alt="message"
                  className="w-8 sm:w-10"
                />
              </div>
              <div className="text-div text-xl sm:text-2xl font-medium">
                <h1 className="text-blue-700">
                  <button>
                    <a href="https://www.linkedin.com/in/lawar-james-chaudhary-404a74284/">
                      Discuss Project
                    </a>
                  </button>
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Discuss;
