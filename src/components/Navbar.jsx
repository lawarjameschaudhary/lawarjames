import React, { useState } from 'react';

const Navbar = ({ scrollToSection }) => {
  const [navButtons, setNavButtons] = useState(false);

  const toggleButton = () => {
    setNavButtons(!navButtons);
  };

  return (
    <div className='bg-black'>
      <div className='flex justify-between bg-white rounded-full p-1 md:p-2 items-center flex-wrap z-50'>
        <div className='text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          Lawar James Chaudhary
        </div>
        <div className='bg-black flex items-center rounded-full gap-7 xl:pl-5 sm:p-0 shadow-md shadow-black opacity-90'>
          <h1 className='text-white text-2xl hidden sm:block'>Menu</h1>
          <button
            onClick={toggleButton}
            className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 rounded-full p-2 md:p-4 shadow-lg hover:shadow-xl hover:from-blue-400 hover:via-blue-800 hover:to-blue-950 transition-all duration-300 hover:scale-105 focus:outline-none hover:-translate-y-[2px]'
          >
            <img src='./src/assets/navigation-bar.png' alt='navigation bar' className='w-[30px] md:w-[35px]' />
          </button>
        </div>
      </div>
      {navButtons && (
        <div className='fixed top-17 md:top-20 right-1 md:right-2 bg-slate-600 rounded-2xl w-[200px] md:w-[250px] h-2/3 text-left p-4 z-50'>
          <ul className='space-y-4'>
            <li><button onClick={() => scrollToSection('home')} className='text-white'>Home</button></li>
            <li><button onClick={() => scrollToSection('discription')} className='text-white'>Discription</button></li>
            <li><button onClick={() => scrollToSection('education')} className='text-white'>Education</button></li>
            <li><button onClick={() => scrollToSection('about')} className='text-white'>About Me</button></li>
            <li><button onClick={() => scrollToSection('skills')} className='text-white'>Skills</button></li>
            <li><button onClick={() => scrollToSection('discuss')} className='text-white'>Discuss</button></li>
            <li><button onClick={() => scrollToSection('contact')} className='text-white'>Contact Me</button></li>
            <li><button onClick={() => scrollToSection('getInTouch')} className='text-white'>Get In Touch</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
