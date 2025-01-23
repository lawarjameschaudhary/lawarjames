  import React from 'react';

  const Home = ({ scrollToSection }) => {
    return (
      <div className='bg-[url(https://img.freepik.com/free-vector/abstract-blue-circle-black-background-technology_1142-12714.jpg?ga=GA1.1.255780563.1737648427&semt=ais_hybrid)] bg-cover bg-center text-white font-Fanta leading-9  pl-12 pr-12 pt-20 xl:pt-52 md:pt-40 border-b-[0.1px] border-blue-300 pb-20'>
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
          <button className='text-white'><a href="https://www.linkedin.com/in/lawar-james-chaudhary-404a74284/">Hire Me</a></button>
  </button>

          <div className='relative'>
          <img src="https://lh3.googleusercontent.com/a/ACg8ocJq5BfZoZH-Qbs_FDCrHavshXm9-LTvVPSrPvHwQTvbu7hVdY0I=s576-c-no" alt="Developer-iamge" className='w-full max-w-[675px] mx-auto' />

            <div className='md:border-2 p-1 md:p-4  rounded-full text-center text-black bg-white flex items-center gap-1 md:gap-5 absolute top-[20%] md:top-[15%] right-[5%] xl:-right-[5%]'>
                <div className='Logo'><img src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png" alt="" className='w-6 md:w-9' /></div>
                <div className=' text-sm md:text-3xl'>Tailwind CSS</div>
              </div>
              <div className='md:border-2 p-1 md:p-4 rounded-full text-center bg-white flex items-center gap-1 md:gap-5 mr-20 absolute text-black top-[50%] sm:top-[45%] md:top-[45%] -left-[5%] md:-left-[15%] lg:-left-[20%] xl:-left-[35%]'>
                <div className='Logo'><img src="https://w7.pngwing.com/pngs/548/34/png-transparent-adobe-photoshop-macos-bigsur-icon-thumbnail.png" alt="" className='w-6 md:w-9'/></div>
                <div className=' text-sm md:text-3xl'>Photoshop</div>
              </div>
              <div className='md:border-2 p-1 md:p-4 rounded-full  text-center text-black bg-white flex items-center gap-1 md:gap-5 px-6 absolute top-[75%] sm:top-[70%] md:top-[75%] md:-left-[5%] lg:-left-[15%] xl:-left-[25%]'>
                <div className='Logo'><img src="https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png" alt="" className='w-6 md:w-9'/></div>
                <div className=' text-sm md:text-3xl'>Html </div>
              </div>
              <div className='border-2 p-1 md:p-4 rounded-full text-center text-black bg-white flex items-center gap-1 md:gap-5 absolute top-[25%] sm:top-[20%] md:top-[15%] sm:left-4 md:-left-0 xl:-left-[5%]'>
                <div className='Logo'><img src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png" alt="" className='w-6 md:w-9' /></div>
                <div className=' text-sm md:text-3xl'>ReactJS</div>
              </div>
              <div className='border-2 p-1 md:p-4 rounded-full text-center bg-white flex text-black items-center gap-1 md:gap-5 absolute top-[45%] md:top-[45%] -right-[5%] md:-right-[10%] lg:-right-[20%] xl:-right-[35%]' >
                <div className='Logo'><img src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png" alt="" className='w-6 md:w-9' /></div>
                <div className=' text-sm md:text-3xl'>JavaScript</div>
              </div>
              <div className='border-2 p-1 md:p-4 rounded-full text-center text-black   bg-white flex items-center gap-1 md:gap-5 px-6 absolute top-[70%] md:top-[75%] right-[10%] md:-right-0 lg:-right-[16%]' >
                <div className='Logo'><img src="https://w7.pngwing.com/pngs/393/49/png-transparent-css-logo.png" alt="" className='w-6 md:w-9' /></div>
                <div className=' text-sm md:text-3xl'>CSS</div>
              </div>
          </div>
        </div>
      </div>
    );
  };

  export default Home;