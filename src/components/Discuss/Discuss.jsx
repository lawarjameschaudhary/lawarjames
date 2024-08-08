import React from 'react';

const Discuss = ({ scrollToSection }) => {
  
  return (
    <div className='bg-black pt-36 pb-28 flex flex-col items-center border-b border-blue-300'>
      <div className='design-text text-4xl sm:text-5xl md:text-6xl font-extrabold text-center'>
        <h1 className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text'>
          Discuss Project
        </h1>
      </div>
      <div className='Main-part mt-8 sm:mt-28 w-[95%] md:w-full max-w-7xl bg-gray-800 rounded-2xl flex flex-col items-center  gap-9 pb-20'>
        <div className='image border-2 border-blue-500 rounded-full p-1 mt-16 sm:mt-20'>
          <img src="./src/assets/image.png" alt="Developer-iamge" className='w-32 sm:w-40 md:w-48 mx-auto rounded-full' />
        </div>
        <div className='text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex justify-center'>
          <h1 className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text'>
            Lawar James Chaudhary
          </h1>
        </div>
        <div className='sub-topic text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extralight text-center'>
          <h1>Frontend Developer | Web Designer | Graphics Designer</h1>
        </div>
        <div className='buttons flex flex-col sm:flex-row gap-5 sm:gap-7'>
          <div className='first-button border-2 border-blue-600 flex rounded-full px-4 sm:px-5 py-3 sm:py-4 items-center gap-3'>
            <div className='image-div'>
              <img src="./src/assets/download.png" alt="download" className='w-8 sm:w-10' />
            </div>
            <div className='text-div text-xl sm:text-2xl font-medium'>
              <h1 className='text-blue-700'>Resume</h1>
            </div>
          </div>
          <div className='first-button bg-gray-300 flex rounded-full px-4 sm:px-5 py-3 sm:py-4 items-center gap-3'>
            <div className='image-div'>
              <img src="./src/assets/message.png" alt="message" className='w-8 sm:w-10' />
            </div>
            <div className='text-div text-xl sm:text-2xl font-medium'>
              <h1 className='text-blue-700'><button onClick={() => scrollToSection('contact')}>Discuss Project</button></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discuss;
