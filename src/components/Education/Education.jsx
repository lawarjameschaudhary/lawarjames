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
      className="flex flex-col px-4 md:px-8 lg:px-12 bg-black pb-20 border-b-[0.1px] border-blue-300"
    >
      {/* Section Heading */}
      <div
        className="text-white font-extrabold text-3xl md:text-5xl lg:text-7xl flex justify-center mt-12 md:mt-20 lg:mt-28 pb-4 md:pb-6 lg:pb-9"
        data-aos="fade-up"
      >
        <h1 className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text">
          Education
        </h1>
      </div>

      {/* Content Wrapper */}
      <div
        className="flex flex-col justify-center mt-8 sm:mt-16 items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="w-full max-w-6xl border-2 bg-gray-100 shadow-md rounded-2xl p-6">
          <div className="flex flex-col gap-6">
            {/* Date and Graduation */}
            <div
              className="flex flex-col md:flex-row justify-center gap-6 items-center px-4 pt-4"
              data-aos="zoom-in"
            >
              <div className="flex items-center gap-2 border-2 rounded-full px-4 py-2 bg-gray-300 text-blue-500 text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/18784/18784553.png"
                  alt="date"
                  className="w-6 h-6"
                />
                <span className="font-bold text-sm md:text-base">2022-2026</span>
              </div>
              <div className="flex items-center border-2 border-gray-300 rounded-full px-4 py-2 bg-gray-300 text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10484/10484468.png"
                  alt="graduation"
                  className="w-6 h-6"
                />
                <span className="font-bold text-sm md:text-base text-gray-700">
                  Graduation
                </span>
              </div>
            </div>

            {/* Degree Info */}
            <div
              className="flex flex-col md:flex-row gap-4 px-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="border-2 rounded-full px-4 py-2 bg-gray-300 text-xs md:text-sm lg:text-base font-semibold text-gray-800">
                Bachelor's Degree
              </div>
              <div className="border-2 rounded-full px-4 py-2 bg-gray-300 text-xs md:text-sm lg:text-base font-semibold text-gray-800">
                B.Sc. CSIT
              </div>
            </div>

            {/* University Details */}
            <div
              className="text-section px-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-black leading-tight">
                B.Sc. Computer Science and Information Technology
              </h1>

              <div
                className="location-uni mt-6 flex flex-col gap-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="university-section flex items-center gap-4">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2231/2231696.png"
                      alt="university"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm md:text-base lg:text-lg text-gray-700 font-semibold">
                    Tribhuvan University
                  </span>
                </div>
                <div className="location-section flex items-center gap-4">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/149/149060.png"
                      alt="location"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm md:text-base lg:text-lg text-gray-700 font-semibold">
                    Kirtipur, Kathmandu, Nepal
                  </span>
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
