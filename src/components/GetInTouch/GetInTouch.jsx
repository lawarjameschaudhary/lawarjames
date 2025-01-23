import React from 'react'

const GetInTouch = () => {
  return (
    <div id='social-media' className='bg-black flex flex-col items-center border-b-[0.1px] md:p-28 border-b-blue-300 pb-28'>
    <div className="technology">
      <div className='text-white text-center font-extrabold text-2xl md:text-4xl lg:text-7xl flex justify-center mt-12 pb-4'>
        <h1 className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text'>
          Contact With Me
        </h1>
      </div>
      <div className="flex gap-4 md:gap-6 lg:gap-8 flex-wrap justify-center mt-6 md:mt-12 ">
        <div className="bg-white flex rounded-full md:w-60 px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3 hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src="./src/assets/linkedin.png" alt="React JS" className='w-8 md:w-12' />
          <div className="text-md text-sky-700 md:text-3xl font-extrabold">
            <a href="https://www.linkedin.com/in/lawar-james-chaudhary-404a74284/">LinkedIn</a>
          </div>
        </div>
        <div className="bg-white flex rounded-full px-4 py-2 md:w-64 md:px-5 md:py-4 items-center gap-1 md:gap-3 hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src="./src/assets/instagram.png" alt="HTML" className='w-8 md:w-12' />
          <div className="text-md text-red-600 md:text-3xl font-extrabold">
            <a href="https://www.instagram.com/laiberchaudhary/">Instagram</a>
          </div>
        </div>
        <div className="bg-white flex rounded-full md:w-64 px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3 hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src="./src/assets/facebook.png" alt="JavaScript" className='w-8 md:w-12' />
          <div className="text-md text-sky-700 md:text-3xl font-extrabold">
            <a href="https://www.facebook.com/profile2626201">Facebook</a>
          </div>
        </div>
      </div>
      <div className='flex gap-4 md:gap-6 lg:gap-8 flex-wrap justify-center mt-6 md:mt-12'>
        <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3 hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src="./src/assets/new.png" alt="CSS" className='w-8 md:w-12' />
          <div className="text-md md:text-3xl font-extrabold">
            <a href="mailto:lawarjames077@gmail.com">lawarjames077@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default GetInTouch