import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);


  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false); // Close the menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative bg-[url(./src/assets/bg.jpg)] bg-cover bg-center text-white font-Fanta leading-9 pl-12 pr-12 pt-20 xl:pt-24 md:pt-40 border-b-[0.1px] border-blue-300 pb-20'>
      <div className='flex flex-col items-center justify-center h-full gap-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl text-center font-bold'>
          Hello, I am{' '}
          <span className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 text-transparent bg-clip-text'>
            Lawar James Chaudhary
          </span>
        </h1>
        <h6 className='text-lg sm:text-xl md:text-2xl text-center'>
          A Front End Developer | Graphics Designer
        </h6>

        {/* Menu button */}
        <button
          onClick={toggleMenu}
          className='bg-transparent border border-blue-500 text-white p-3 px-8 shadow-md shadow-blue-500 rounded-full hover:shadow-lg hover:shadow-blue-500 hover:from-blue-400 hover:via-blue-800 hover:to-blue-950 hover:scale-105 duration-700 focus:outline-none hover:-translate-y-1'
        >
          Menu
        </button>

        {/* Sliding menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transform ${
            menuVisible ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-500 ease-in-out`}
        >
          <div className='flex flex-col p-6 h-full'>
            <button
              onClick={toggleMenu}
              className='self-end text-gray-600 hover:text-gray-900'
            >
              ✕
            </button>
            <ul className='mt-4 space-y-4'>
              <li className='hover:underline cursor-pointer'>Home</li>
              <li className='hover:underline cursor-pointer'>About</li>
              <li className='hover:underline cursor-pointer'>Projects</li>
              <li className='hover:underline cursor-pointer'>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
