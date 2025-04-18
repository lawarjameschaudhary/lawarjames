import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const form = useRef();
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    setFormError('');
    setFormSuccess('');

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData);

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!data.from_name || !data.from_email || !data.from_phone || !data.from_college || !data.message) {
      setFormError('All fields are required.');
      return;
    }

    if (!gmailRegex.test(data.from_email)) {
      setFormError('Please enter a valid Gmail address.');
      return;
    }

    if (!/^\d+$/.test(data.from_phone)) {
      setFormError('Please enter a valid phone number (numbers only).');
      return;
    }

    try {
      await emailjs.sendForm('service_uzkuv7l', 'template_wgckv3s', form.current, '3ERo9wAPnsHLrBSEo');
      setFormSuccess('Email sent successfully!');
      form.current.reset();
    } catch (error) {
      setFormError('Failed to send email.');
      console.error('Failed to send email:', error.text);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Hook for scroll animations
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      className="bg-black flex flex-col items-center py-36 relative"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <motion.div
        ref={ref}
        className=" bg-white/10 backdrop-blur-xl border border-white/20 w-[95%] md:w-[80%] rounded-3xl flex flex-col items-center gap-10 md:gap-20 py-12 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out max-w-screen-xl mx-auto"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Contact Me
        </motion.h1>

        <motion.div className="form-section flex justify-center items-center w-[100%]" variants={itemVariants}>
          <div className="form-content w-[90%] relative">
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className=""
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row md:gap-12">
                  <motion.div className="w-full mb-4" variants={itemVariants}>
                    <div className="Name-content flex bg-blue-100/100 rounded-full py-3 px-3 items-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/1067/1067566.png"
                        alt="icon"
                        className="h-[30px] w-[30px]"
                      />
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Full Name"
                        className="w-full h-8 md:h-12 bg-blue-100/20 p-2 rounded-full text-base sm:text-lg outline-none"
                        autoComplete="on"
                        required
                      />
                    </div>
                  </motion.div>
                  <motion.div className="w-full mb-4" variants={itemVariants}>
                    <div className="email-contents flex bg-blue-100/100  rounded-full py-3 px-3 items-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/2165/2165061.png"
                        alt="icon"
                        className="h-[30px] w-[30px]"
                      />
                      <input
                        type="email"
                        name="from_email"
                        placeholder="Email"
                        className="w-full bg-blue-100/20 h-8 md:h-12 p-2 rounded-full text-base sm:text-lg outline-none"
                        pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
                        title="Please enter a valid Gmail address"
                        required
                        autoComplete="on"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-12">
                  <motion.div className="w-full mb-4" variants={itemVariants}>
                    <div className="Phone-content flex bg-gray-200 rounded-full py-3 px-3 items-center bg-blue-100/100">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/15634/15634417.png"
                        alt="icon"
                        className="h-[30px] w-[30px]"
                      />
                      <input
                        type="tel"
                        name="from_phone"
                        placeholder="Mobile No."
                        className="w-full h-8 md:h-12 p-2 rounded-full text-base sm:text-lg bg-blue-100/20 outline-none"
                        pattern="\d*"
                        title="Please enter a valid phone number (numbers only)"
                        required
                        autoComplete="on"
                      />
                    </div>
                  </motion.div>
                  <motion.div className="w-full mb-4" variants={itemVariants}>
                    <div className="collete-content flex bg-blue-100/100 rounded-full py-3 px-3">
                      <input
                        type="text"
                        name="from_college"
                        placeholder="Subject*"
                        className="w-full h-8 md:h-12 bg-blue-100/20 p-2 rounded-full text-base sm:text-lg outline-none"
                        autoComplete="on"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div className="w-full mb-4" variants={itemVariants}>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full bg-blue-100/100 border-gray-200 rounded-2xl p-3 text-base sm:text-lg focus:outline-none"
                  required
                  autoComplete="on"
                  placeholder="Message"
                ></textarea>
              </motion.div>

              {formError && (
                <motion.p
                  className="text-red-500 text-sm mb-4"
                  variants={itemVariants}
                >
                  {formError}
                </motion.p>
              )}
              {formSuccess && (
                <motion.p
                  className="text-green-500 text-sm mb-4"
                  variants={itemVariants}
                >
                  {formSuccess}
                </motion.p>
              )}

              <motion.div className="w-full flex justify-center mt-6" variants={itemVariants}>
                <button
                  type="submit"
                  className="bg-blue-600 text-white text-xl font-bold sm:text-xl border-none rounded-2xl px-12 py-3 hover:bg-black border-2 border-blue-500 hover:border-blue-600 hover:shadow-xl shadow-md transition-all duration-700"
                >
                  Submit
                </button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
