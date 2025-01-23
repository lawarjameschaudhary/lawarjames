import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

const Education = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animation duration and trigger only once
  }, []);

  return (
    <div
      id="education"
      className="flex flex-col px-2 bg-black pb-20 border-b-[0.1px] border-blue-300"
    >
      
      <div
        className="text-white font-extrabold text-3xl md:text-5xl lg:text-7xl flex justify-center mt-12 md:mt-20 lg:mt-28 pb-4 md:pb-6 lg:pb-9"
        data-aos="fade-up"
      >
        <h1 className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text">
          Education
        </h1>
      </div>

      
      <div
        className="flex flex-col justify-center mt-8 sm:mt-28 items-center bg-black"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="border-2 bg-gray-100 shadow-white rounded-2xl w-full md:w-4/5 lg:w-3/5 p-4">
          <div className="flex flex-col gap-4 md:gap-6">
            
            <div
              className="flex flex-col md:flex-row justify-center gap-4 md:justify-between items-center px-2 md:px-6 lg:px-10 pt-4 md:pt-8 lg:pt-12"
              data-aos="zoom-in"
            >
              <div className="flex items-center gap-2 border-2 rounded-full px-3 py-2 md:px-4 md:py-3 bg-gray-300 text-blue-500 text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/18784/18784553.png"
                  alt="date"
                  className="w-6 h-3 md:w-8 md:h-4"
                />
                <h1 className="font-extrabold text-xs md:text-sm lg:text-base leading-4 md:leading-5 lg:leading-7">
                  2022-2025
                </h1>
              </div>
              <div className="flex items-center border-2 border-gray-300 rounded-full px-3 py-2 md:px-4 md:py-3 text-center bg-gray-300">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10484/10484468.png"
                  alt="graduation"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <h1 className="font-extrabold text-xs md:text-sm lg:text-base leading-4 md:leading-5 lg:leading-7">
                  Graduation
                </h1>
              </div>
            </div>

            
            <div
              className="flex flex-col md:flex-row gap-2 md:gap-4 px-2 md:px-6 lg:px-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="border-2 rounded-full p-2 md:p-3 bg-gray-300 text-xs md:text-sm lg:text-base">
                Bachelors Degree
              </div>
              <div className="border-2 rounded-full p-2 md:p-3 bg-gray-300 text-xs md:text-sm lg:text-base">
                Bsc.CSIT
              </div>
            </div>

            
            <div
              className="text-section px-2 md:px-6 lg:px-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="text-lg md:text-xl lg:text-2xl leading-6 md:leading-8 lg:leading-10 text-gray-950 font-black">
                BSC. Computer Science and Information Technology
              </h1>

              
              <div
                className="location-uni mt-3 flex flex-col gap-4 md:gap-1 lg:gap-2"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="university-section flex items-center gap-3 md:gap-4 lg:gap-5">
                  <div className="bg-white p-1 rounded-full">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2231/2231696.png"
                      alt="university"
                      className="w-4 h-6 md:w-5 md:h-7 lg:w-6 lg:h-7"
                    />
                  </div>
                  <div className="text-sm md:text-base lg:text-lg leading-5 md:leading-6 lg:leading-7 font-bold">
                    Tribhuvan University
                  </div>
                </div>
                <div className="location-section flex items-center gap-3 md:gap-4 lg:gap-5">
                  <div className="bg-white p-1 rounded-full">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/149/149060.png"
                      alt="location"
                      className="w-4 h-6 md:w-5 md:h-7 lg:w-6 lg:h-7"
                    />
                  </div>
                  <div className="text-sm md:text-base lg:text-lg leading-5 md:leading-6 lg:leading-7 font-bold">
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
};

export default Education;