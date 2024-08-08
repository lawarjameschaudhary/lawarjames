import React from 'react';

const About = () => {
  return (
    <div className='bg-black p-6 flex flex-col items-center pb-28 border-b-[0.1px] border-blue-300'>
      <div className='text-white font-extrabold text-3xl md:text-5xl lg:text-7xl flex justify-center mt-10 md:mt-16 pb-4'>
        <h1 className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text'>Experience</h1>
      </div>
      <div className='w-full flex flex-col mt-8 sm:mt-28 items-center'>
        <div className='bg-white w-full flex flex-col border-2 rounded-3xl shadow-lg max-w-5xl'>
          <div className='flex flex-col md:flex-row justify-between items-center p-4 md:p-8  md:gap-2'>
            <div className='flex items-center bg-gray-300 rounded-full p-2 w-full md:w-[500px] md:gap-4 md:p-4'>
              <div className=''>
                <img src="./src/assets/info.png" alt="info" className='w-[50px] md:w-[70px]' />
              </div>
              <div className='text-left'>
                <h1 className='font-extrabold text-md md:text-xl lg:text-2xl leading-5 md:leading-7 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text'>
                  Obtained Infotech
                </h1>
                <div className='flex items-center gap-2'>
                  <img src="./src/assets/map.png" alt="location" className='w-4 md:w-5' />
                  <p className='font-semibold text-xs md:text-xl'>Narayangarh, Chitwan, Nepal</p>
                </div>
              </div>
            </div>
            <div className='flex items-center bg-gray-300 px-4 py-2 rounded-full gap-4 mt-4 md:mt-0'>
              <div className='w-8 md:w-10'>
                <img src="./src/assets/date.png" alt="date" className='w-full' />
              </div>
              <div>
                <h1 className='font-extrabold text-sm md:text-base leading-5 md:leading-7'>FEB 2023-NOV 2023</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6 px-4 md:px-8 mt-4">
            <div className="w-8 md:w-10">
              <img src="./src/assets/coding.png" alt="coding" className='w-full' />
            </div>
            <div>
              <h1 className='font-extrabold text-lg md:text-xl lg:text-2xl'>Web Developer</h1>
            </div>
          </div>
          <div className="text-part-about mt-4 p-4 font-bold">
            <div className='flex items-start gap-4 mb-4'>
              <img src="./src/assets/right.png" alt="arrow" className='w-6 md:w-8' />
              <h1 className='text-sm md:text-base lg:text-lg'>
                Designed numerous responsive themes using HTML/CSS and ReactJS, ensuring user-friendly and visually appealing web interfaces.
              </h1>
            </div>
            <div className='flex items-start gap-4 mb-4'>
              <img src="./src/assets/right.png" alt="arrow" className='w-6 md:w-8' />
              <h1 className='text-sm md:text-base lg:text-lg'>
                Successfully integrated REST APIs, enhancing website functionality and user experience.
              </h1>
            </div>
            <div className='flex items-start gap-4'>
              <img src="./src/assets/right.png" alt="arrow" className='w-6 md:w-8' />
              <h1 className='text-sm md:text-base lg:text-lg'>
                Proficiently worked with PHP and MySQL, handling CRUD operations using PHP to manage and manipulate data effectively.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
