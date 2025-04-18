import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const roles = ["A Front End Developer", "Graphics Designer"];
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else {
        if (!isDeleting) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        } else {
          // Move to next role
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, roles]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="bg-[url('https://img.freepik.com/free-vector/abstract-blue-circle-black-background-technology_1142-12714.jpg?ga=GA1.1.255780563.1737648427&semt=ais_hybrid')] md:bg-cover bg-transparent bg-center text-white font-Fanta leading-9 pl-12 pr-12 pt-24 xl:pt-36 md:pt-40 border-b-[0.1px] border-blue-300 pb-20"
    >
      <div className="flex flex-col items-center justify-center h-full gap-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        {/* Title Section */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl text-center font-bold"
        >
          Hello, I am{' '}
          <span className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 text-transparent bg-clip-text">
            Lawar James Chaudhary
          </span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.h6
          className="font-bold text-lg sm:text-xl md:text-3xl bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 text-transparent bg-clip-text text-center h-[2.5rem] sm:h-[3rem] md:h-[3.5rem]"
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.h6>

        {/* Hire Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          aria-label="Hire Lawar James Chaudhary"
          className="bg-transparent border border-blue-500 text-white p-3 px-8 shadow-md shadow-blue-500 rounded-full hover:shadow-lg hover:shadow-blue-500 hover:scale-105 duration-700 focus:outline-none hover:-translate-y-1"
        >
          <a href="https://lh3.googleusercontent.com/a/ACg8ocJq5BfZoZH-Qbs_FDCrHavshXm9-LTvVPSrPvHwQTvbu7hVdY0I=s576-c-no" className="text-white">
            Hire Me
          </a>
        </motion.button>

        {/* Image and Icons Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="relative"
        >
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocJq5BfZoZH-Qbs_FDCrHavshXm9-LTvVPSrPvHwQTvbu7hVdY0I=s576-c-no"
            alt="Developer-image"
            className="w-full max-w-[675px] mx-auto hover:scale-105 transition-transform duration-700 ease-in-out"
          />

          {[
            { icon: 'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png', label: 'Tailwind CSS', style: 'top-[20%] right-[1%] xl:-right-[10%]' },
            { icon: 'https://w7.pngwing.com/pngs/548/34/png-transparent-adobe-photoshop-macos-bigsur-icon-thumbnail.png', label: 'Photoshop', style: 'top-[50%] md:top-[45%] -left-[10%] md:-left-[15%] lg:-left-[20%] xl:-left-[35%]' },
            { icon: 'https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png', label: 'Html', style: 'top-[75%] sm:top-[70%] md:top-[75%] md:-left-[5%] lg:-left-[15%] xl:-left-[25%]' },
            { icon: 'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png', label: 'ReactJS', style: 'top-[25%] -left-[7%] md:top-[20%] sm:left-4 md:-left-0 xl:-left-[15%]' },
            { icon: 'https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png', label: 'JavaScript', style: 'top-[45%] -right-[5%] md:-right-[10%] lg:-right-[20%] xl:-right-[35%]' },
            { icon: 'https://w7.pngwing.com/pngs/393/49/png-transparent-css-logo.png', label: 'CSS', style: 'top-[70%] md:top-[75%] right-[10%] md:-right-0 lg:-right-[16%]' },
          ].map(({ icon, label, style }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
              className={`border-2 p-1 md:p-4 rounded-full text-center text-black bg-white flex items-center gap-1 md:gap-5 px-1 md:px-6 absolute ${style}`}
            >
              <div className="Logo">
                <img src={icon} alt={label} className="w-6 md:w-9" />
              </div>
              <div className="text-sm md:text-3xl">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
