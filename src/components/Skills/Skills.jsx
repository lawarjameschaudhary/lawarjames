import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-black flex flex-col items-center border-b-[0.1px] md:p-28 border-b-blue-300 pb-28">

      {/* Skills Section Title */}
      <motion.div
        className="text-white font-extrabold text-3xl md:text-5xl lg:text-7xl flex justify-center mt-12 pb-4 md:pb-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-transparent bg-clip-text">
          My Skills
        </h1>
      </motion.div>

      {/* Designing Tools Section */}
      <motion.div
        className="design-tool flex flex-col items-center"
        variants={fadeInStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-center font-extrabold text-2xl md:text-4xl lg:text-5xl flex justify-center mt-6 md:mt-12 pb-4 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text"
          variants={fadeIn}
        >
          Design Tools I Use
        </motion.h1>
        <motion.div
          className="flex gap-6 md:gap-8 lg:gap-11 flex-wrap mt-6 md:mt-12 items-center justify-center"
          variants={fadeInStagger}
        >
          {[
            { name: 'Figma', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968705.png' },
            { name: 'Photoshop', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968520.png' },
          ].map((tool, index) => (
            <motion.div
              className="bg-white flex rounded-full px-6 py-3 md:px-8 md:py-5 items-center gap-4 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              key={index}
              variants={fadeIn}
            >
              <img src={tool.icon} alt={tool.name} className="w-12 md:w-14" />
              <div className="text-lg md:text-xl font-semibold text-gray-800">{tool.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Technology Section */}
      <motion.div
        className="technology mt-12"
        variants={fadeInStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-white text-center font-extrabold text-2xl md:text-4xl lg:text-5xl flex justify-center mt-12 pb-4 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text"
          variants={fadeIn}
        >
          Technologies I Use
        </motion.h1>
        <motion.div
          className="flex gap-8 md:gap-10 lg:gap-12 flex-wrap justify-center mt-6 md:mt-12"
          variants={fadeInStagger}
        >
          {[
            { name: 'React JS', icon: 'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png' },
            { name: 'HTML', icon: 'https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png' },
            { name: 'JavaScript', icon: 'https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png' },
            { name: 'Tailwind CSS', icon: 'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png' },
          ].map((tech, index) => (
            <motion.div
              className="bg-white flex rounded-full px-6 py-3 md:px-8 md:py-5 items-center gap-4 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              key={index}
              variants={fadeIn}
            >
              <img src={tech.icon} alt={tech.name} className="w-12 md:w-14" />
              <div className="text-md md:text-xl font-semibold text-gray-800">{tech.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
