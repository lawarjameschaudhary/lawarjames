import React from 'react';

const Home = () => {
  return (
    <div className='bg-[url(./src/assets/bg.jpg)] bg-cover bg-center text-white font-Fanta leading-9  pl-12 pr-12 pt-20 xl:pt-24 md:pt-40 border-b-[0.1px] border-blue-300 pb-20'>
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
        <button className='bg-transparent border border-blue-500 text-white p-3 px-8 shadow-md shadow-blue-500 rounded-full hover:shadow-lg hover:shadow-blue-500 hover:from-blue-400 hover:via-blue-800 hover:to-blue-950 hover:scale-105 duration-700 focus:outline-none hover:-translate-y-1'>
  Hire me
</button>

        <div className='relative'>
        <img src="./src/assets/image.png" alt="Developer-iamge" className='w-full max-w-[675px] mx-auto' />

          <div className='md:border-2 p-1 md:p-4  rounded-full text-center text-black bg-white flex items-center gap-1 md:gap-5 absolute top-[20%] md:top-[15%] right-[5%] xl:-right-[5%]'>
              <div className='Logo'><img src="./src/assets/tailwind.png" alt="" className='w-6 md:w-9' /></div>
              <div className=' text-sm md:text-3xl'>Tailwind CSS</div>
            </div>
            <div className='md:border-2 p-1 md:p-4 rounded-full text-center bg-white flex items-center gap-1 md:gap-5 mr-20 absolute text-black top-[50%] sm:top-[45%] md:top-[45%] -left-[5%] md:-left-[15%] lg:-left-[20%] xl:-left-[35%]'>
              <div className='Logo'><img src="./src/assets/photoshop.png" alt="" className='w-6 md:w-9'/></div>
              <div className=' text-sm md:text-3xl'>Photoshop</div>
            </div>
            <div className='md:border-2 p-1 md:p-4 rounded-full  text-center text-black bg-white flex items-center gap-1 md:gap-5 px-6 absolute top-[75%] sm:top-[70%] md:top-[75%] md:-left-[5%] lg:-left-[15%] xl:-left-[25%]'>
              <div className='Logo'><img src="./src/assets/Html.png" alt="" className='w-6 md:w-9'/></div>
              <div className=' text-sm md:text-3xl'>Html </div>
            </div>
            <div className='border-2 p-1 md:p-4 rounded-full text-center text-black bg-white flex items-center gap-1 md:gap-5 absolute top-[25%] sm:top-[20%] md:top-[15%] sm:left-4 md:-left-0 xl:-left-[5%]'>
              <div className='Logo'><img src="./src/assets/react.svg" alt="" className='w-6 md:w-9' /></div>
              <div className=' text-sm md:text-3xl'>React JS</div>
            </div>
            <div className='border-2 p-1 md:p-4 rounded-full text-center bg-white flex text-black items-center gap-1 md:gap-5 absolute top-[45%] md:top-[45%] -right-[5%] md:-right-[10%] lg:-right-[20%] xl:-right-[35%]' >
              <div className='Logo'><img src="./src/assets/javascript.png" alt="" className='w-6 md:w-9' /></div>
              <div className=' text-sm md:text-3xl'>JavaScript</div>
            </div>
            <div className='border-2 p-1 md:p-4 rounded-full text-center text-black   bg-white flex items-center gap-1 md:gap-5 px-6 absolute top-[70%] md:top-[75%] right-[10%] md:-right-0 lg:-right-[16%]' >
              <div className='Logo'><img src="./src/assets/css.png" alt="" className='w-6 md:w-9' /></div>
              <div className=' text-sm md:text-3xl'>CSS</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

