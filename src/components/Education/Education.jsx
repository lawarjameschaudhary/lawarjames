import React from 'react';

const Education = () => {
  return (
    <div id='education' className='flex flex-col bg-black p-4 pb-36 border-b-[0.1px] border-blue-300'>
      <div className='text-white font-extrabold text-3xl md:text-5xl lg:text-7xl flex justify-center mt-12 md:mt-20 lg:mt-28 pb-4 md:pb-6 lg:pb-9'>
        <h1 className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text'>
          Education
        </h1>
      </div>
      <div className='flex flex-col justify-center mt-8 sm:mt-28 items-center bg-black z-10'>
        <div className='border-2 border-blue-400 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 shadow-white rounded-2xl w-full md:w-4/5 lg:w-3/5 p-4'>
          <div className='flex flex-col gap-4 md:gap-6'>
            <div className='flex flex-col md:flex-row justify-center gap-4 md:justify-between items-center px-2 md:px-6 lg:px-10 pt-4 md:pt-8 lg:pt-12'>
              <div className='flex items-center border-2 border-black rounded-full px-3 py-2 md:px-4 md:py-3 bg-black text-blue-400 text-center'>
                <img src="./src/assets/date.png" alt="date" className='w-6 h-3 md:w-8 md:h-4' />
                <h1 className='font-extrabold text-xs md:text-sm lg:text-base leading-4 md:leading-5 lg:leading-7'>2022-2025</h1>
              </div>
              <div className='flex items-center border-2 border-gray-300 rounded-full px-3 py-2 md:px-4 md:py-3 text-center bg-gray-300'>
                <img src="./src/assets/graduation.png" alt="graduation" className='w-6 h-6 md:w-8 md:h-8' />
                <h1 className='font-extrabold text-xs md:text-sm lg:text-base leading-4 md:leading-5 lg:leading-7'>Graduation</h1>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-2 md:gap-4 px-2 md:px-6 lg:px-10'>
              <div className='border-2 rounded-full p-2 md:p-3 bg-gray-300 text-xs md:text-sm lg:text-base'>
                Bachelors Degree
              </div>
              <div className='border-2 rounded-full p-2 md:p-3 bg-gray-300 text-xs md:text-sm lg:text-base'>
                Bsc.CSIT
              </div>
            </div>
            <div className='text-section px-2 md:px-6 lg:px-12'>
              <h1 className='text-lg md:text-xl lg:text-2xl leading-6 md:leading-8 lg:leading-10 text-gray-950 font-black'>
                BSC. Computer Science and Information Technology
              </h1>
              <div className='location-uni mt-3 flex flex-col gap-4 md:gap-1 lg:gap-2'>
                <div className='university-section flex items-center gap-3 md:gap-4 lg:gap-5'>
                  <div className='bg-white p-1 rounded-full'>
                    <img src="./src/assets/school.png" alt="university" className='w-4 h-6 md:w-5 md:h-7 lg:w-6 lg:h-7'/>
                  </div>
                  <div className='text-sm md:text-base lg:text-lg leading-5 md:leading-6 lg:leading-7 font-bold'>
                    Tribhuvan University
                  </div>
                </div>
                <div className='location-section flex items-center gap-3 md:gap-4 lg:gap-5'>
                  <div className='bg-white p-1 rounded-full'>
                    <img src="./src/assets/map.png" alt="location" className='w-4 h-6 md:w-5 md:h-7 lg:w-6 lg:h-7'/>
                  </div>
                  <div className='text-sm md:text-base lg:text-lg leading-5 md:leading-6 lg:leading-7 font-bold'>
                    Kritipur, Kathmandu, Nepal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
