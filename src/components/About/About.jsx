import React from 'react';

const About = () => {
  return (
    <div className='bg-black p-6 md:p-16 lg:p-28 flex flex-col items-center h-[100vh]'>
      <div className='text-white text-3xl md:text-5xl lg:text-7xl flex justify-center mt-10 md:mt-16 pb-4 md:pb-6 lg:pb-9'>
        <h1 className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text'>Experience</h1>
      </div>
      <div className='sm:w-screen md:h-[80%] md:w-[200%] flex flex-col items-center'>
        <div className='bg-white w-full md:w-3/4 lg:w-1/2 flex flex-col border-2 rounded-3xl shadow-lg'>
          <div className='flex flex-col md:flex-row justify-between items-center p-4 md:p-8'>
            <div className='flex items-center bg-gray-300 rounded-full gap-4 p-4'>
              <div className='w-16 md:w-20'>
                <img src="./src/assets/info.png" alt="info" className='w-full' />
              </div>
              <div className='text-left'>
                <h1 className='font-extrabold text-lg md:text-xl lg:text-2xl leading-5 md:leading-7 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text'>
                  Obtained Infotech
                </h1>
                <div className='flex items-center gap-2'>
                  <img src="./src/assets/map.png" alt="location" className='w-4 md:w-5' />
                  <p className='font-bold text-sm md:text-base'>Narayangarh, Chitwan, Nepal</p>
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
        <div className='second-class mt-8'>
          {/* Add content here if needed */}
        </div>
      </div>
    </div>
  );
}

export default About;
