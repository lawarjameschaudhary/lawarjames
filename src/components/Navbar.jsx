import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Education from './Education/Education';
const Navbar = () => {
  const [navButtons, setNavButtons] = useState(false);

  const toggleButton = () => {
    setNavButtons(!navButtons);
  };

  return (
    <div className='bg-black'>
      <div className='flex justify-between bg-white rounded-full p-2 items-center flex-wrap z-50 '>
        <div className='text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          Lawar James Chaudhary
        </div>
        <div className='bg-black flex items-center rounded-full gap-7 xl:pl-5 sm:p-0 shadow-md shadow-black opacity-90'>
          <h1 className='text-white text-2xl hidden sm:block'>Menu</h1>
          <button 
            onClick={toggleButton} 
            className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 rounded-full p-4 shadow-lg hover:shadow-xl hover:from-blue-400 hover:via-blue-800 hover:to-blue-950 transition-all duration-300 hover:scale-105 focus:outline-none hover:-translate-y-[2px]'
          >
            <img src='./src/assets/navigation-bar.png' alt='navigation bar' height='auto' width='35px' />
          </button>
        </div>
      </div>
      {navButtons && (
        <div className='fixed top-20 right-2 bg-slate-600 rounded-2xl w-[250px] h-2/3 text-left p-4 z-50'>
          <ul className='space-y-4'>
            <li><NavLink to='/' className='text-white'>Home</NavLink></li>
            <li><NavLink to='/about' className='text-white'>About Me</NavLink></li>
            <li><NavLink to='/education' className='text-white'>Education</NavLink></li>
            <li><NavLink to='/experience' className='text-white'>Experience</NavLink></li>
            <li><NavLink to='/skills' className='text-white'>Skills</NavLink></li>
            <li><NavLink to='/projects' className='text-white'>Demo Projects</NavLink></li>
            <li><NavLink to='/social-media' className='text-white'>Social Media</NavLink></li>
            <li><NavLink to='/contact' className='text-white'>Contact Me</NavLink></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
