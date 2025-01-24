import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

function Project() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with duration and once trigger
  }, []);

  return (
    <div className="bg-black border-b-blue-300 border-b-[0.1px] pb-20 pt-6">
   
      <div
        className="text-white font-extrabold text-3xl md:text-5xl lg:text-7xl flex justify-center pt-10 md:pt-16 pb-4"
        data-aos="fade-up"
      >
        <h1 className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text text-center">
          Projects I've Worked On
        </h1>
      </div>

      <div
        className="grid grid-cols-1 mt-20 sm:mt-28 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        
        <div
          data-aos="zoom-in"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out h-full">
            <a href="https://github.com/lawarjameschaudhary/Ecommerce-website">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQGdZNDSexCrjg/feedshare-shrink_2048_1536/B4DZQTG7BrHcAs-/0/1735487374945?e=1740614400&v=beta&t=oEsazpXDfxvBMlPU9m5liTY-Naq49yHcVG1mI8ER0Ko"
                alt="Ecommerce site"
                className="w-full h-56 object-cover"
              />
              <div className="bg-gray-200 p-4 text-center">
                <h3 className="text-2xl md:text-3xl font-bold">Ecommerce Site</h3>
              </div>
              <div className="p-6 text-sm md:text-base leading-relaxed text-gray-500">
                I have created this E-Commerce site using HTML, CSS, JavaScript,
                React Js, Tailwind CSS, EmailJs, and Local Storage React. The
                owner can manage items, change prices, and get order notifications
                via email. Users can select items, add them to the cart, and place
                orders.
              </div>
            </a>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out h-full">
            <a href="https://github.com/lawarjameschaudhary/Hackathon-Project">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQFzl5v1f-7Oow/feedshare-shrink_2048_1536/B4DZQ0upT_GkAs-/0/1736051446549?e=1740614400&v=beta&t=skcWgq4NGhoEo5isxQDfmxqG_EUEO-qt9u2E575oH2E"
                alt="MeroKaam"
                className="w-full h-56 object-cover"
              />
              <div className="bg-gray-200 p-4 text-center">
                <h3 className="text-2xl md:text-3xl font-bold">MeroKaam</h3>
              </div>
              <div className="p-6 text-sm md:text-base leading-relaxed text-gray-500">
                MeroKaam is a job-search platform built with HTML, CSS,
                JavaScript, React, Tailwind CSS, NodeJs, ExpressJs, and MongoDB.
                It connects job seekers with employers and offers features to
                manage job postings effortlessly.
              </div>
            </a>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out h-full">
            <a href="https://lawarjameschaudhary.github.io/Swiper-Project/">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQEubB_snUs9FQ/feedshare-shrink_2048_1536/B4DZSUDzNPHUAo-/0/1737650823423?e=1740614400&v=beta&t=KCXXIoa4zHt10SIizzmsV3lQMb0MECkm3dwH5fgLoB0"
                alt="Swiper Project"
                className="w-full h-56 object-cover"
              />
              <div className="bg-gray-200 p-4 text-center">
                <h3 className="text-2xl md:text-3xl font-bold">Swiper Project</h3>
              </div>
              <div className="p-6 text-sm md:text-base leading-relaxed text-gray-500">
                Swiper Project is a platform built with HTML, CSS, and JavaScript.
                It uses SwiperJs for animations and ensures responsiveness for all
                screen sizes.
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
