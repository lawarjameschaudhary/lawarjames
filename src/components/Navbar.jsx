import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ scrollToSection }) => {
  const [navButtons, setNavButtons] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleButton = () => {
    setNavButtons(!navButtons);
  };

  const menuItems = [
    "Home",
    "Description",
    "Education",
    "Projects",
    "About",
    "Skills",
    "Discuss",
    "Contact",
  ];

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-md"
          : "bg-white shadow-md"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-2xl md:text-4xl font-extrabold font-logo bg-gradient-to-r from-blue-500 to-emerald-500 text-transparent bg-clip-text"
        >
          Lawar
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-medium text-base lg:text-lg">
          {["Home", "Projects", "About", "Skills", "Contact"].map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative text-gray-800 group hover:text-blue-600 transition-all transform group hover:scale-105"
            >
              {item}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-emerald-500 group-hover:w-full transition-all duration-500"></span>
            </button>
          ))}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleButton}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png"
              alt="menu"
              className="w-[28px] transition-transform transform hover:scale-110"
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {navButtons && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-gradient-to-br from-slate-900 to-emerald-900 text-white p-6 z-40"
          >
            <div className="flex justify-end mb-6">
              <button onClick={toggleButton}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png"
                  alt="close"
                  className="w-6"
                />
              </button>
            </div>
            <ul className="space-y-6 text-lg font-semibold">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      scrollToSection(item.toLowerCase().replace(/\s+/g, ""));
                      toggleButton();
                    }}
                    className="block w-full text-left hover:text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 transition-transform transform hover:translate-x-2 group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
