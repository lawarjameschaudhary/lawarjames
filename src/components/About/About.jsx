import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-black px-6 md:px-8 lg:px-12 py-10 flex flex-col items-center pb-20 md:pb-28 border-b-[0.1px] border-blue-300">
      {/* Title Section */}
      <div
        className="text-white font-extrabold text-3xl md:text-5xl lg:text-7xl flex justify-center mt-10 md:mt-16 pb-4"
        data-aos="fade-up"
      >
        <h1 className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text">
          Experience
        </h1>
      </div>

      {/* Experience Section */}
      <div
        className="w-full flex flex-col mt-8 sm:mt-16 items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="bg-white w-full flex flex-col border-2 rounded-3xl shadow-lg max-w-5xl">
          {/* Company and Duration */}
          <div
            className="flex flex-col md:flex-row justify-between items-center p-6 md:p-8 gap-4"
            data-aos="zoom-in"
          >
            <div className="flex items-center bg-gray-300 rounded-full px-4 py-2 gap-4 w-full md:w-auto">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2695/2695907.png"
                alt="company-logo"
                className="w-[50px] md:w-[70px]"
              />
              <div>
                <h1 className="font-extrabold text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">
                  Obtained Infotech
                </h1>
                <div className="flex items-center gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/149/149060.png"
                    alt="location"
                    className="w-4 md:w-5"
                  />
                  <p className="font-semibold text-sm md:text-base">
                    Narayangarh, Chitwan, Nepal
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex items-center bg-gray-300 px-4 py-2 rounded-full gap-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/18784/18784553.png"
                alt="date"
                className="w-8 md:w-10"
              />
              <h1 className="font-extrabold text-sm md:text-base">
                FEB 2023 - NOV 2023
              </h1>
            </div>
          </div>

          {/* Role */}
          <div
            className="flex items-center gap-4 md:gap-6 px-6 md:px-8 mt-4"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3242/3242257.png"
              alt="coding"
              className="w-8 md:w-10"
            />
            <h1 className="font-extrabold text-xl md:text-2xl lg:text-3xl">
              Web Developer
            </h1>
          </div>

          {/* Responsibilities */}
          <div
            className="text-part-about mt-6 px-6 md:px-8 pb-6 font-bold"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/16821/16821067.png"
                alt="arrow"
                className="w-6 md:w-8"
              />
              <h1 className="text-sm md:text-base lg:text-lg">
                Designed numerous responsive themes using HTML/CSS and ReactJS,
                ensuring user-friendly and visually appealing web interfaces.
              </h1>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/16821/16821067.png"
                alt="arrow"
                className="w-6 md:w-8"
              />
              <h1 className="text-sm md:text-base lg:text-lg">
                Successfully integrated REST APIs, enhancing website
                functionality and user experience.
              </h1>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/16821/16821067.png"
                alt="arrow"
                className="w-6 md:w-8"
              />
              <h1 className="text-sm md:text-base lg:text-lg">
                Proficiently worked with PHP and MySQL, handling CRUD operations
                using PHP to manage and manipulate data effectively.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
