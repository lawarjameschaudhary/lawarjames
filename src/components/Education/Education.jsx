import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="education"
      className="bg-black px-4 md:px-10 lg:px-20 py-16 border-b border-blue-400"
    >
      <div
        className="text-white text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-300 via-blue-600 to-blue-800 text-transparent bg-clip-text">
          Education
        </h2>
        <p className="mt-4 text-gray-400 text-base md:text-lg font-medium">
          My academic journey and learning path
        </p>
      </div>

      <div
        className="mt-16 flex justify-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl w-full max-w-6xl p-8 md:p-10 text-white space-y-8">
          {/* Date & Graduation */}
          <div
            className="flex flex-col md:flex-row justify-center gap-6 items-center"
            data-aos="zoom-in"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100/20 border border-blue-400/30 rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/128/18784/18784553.png"
                alt="date"
                className="w-5 h-5"
              />
              <span className="font-semibold text-sm text-blue-200">2022 - 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100/20 border border-blue-400/30 rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/128/10484/10484468.png"
                alt="graduation"
                className="w-5 h-5"
              />
              <span className="font-semibold text-sm text-blue-200">Graduation</span>
            </div>
          </div>

          {/* Degree Info */}
          <div
            className="flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="bg-blue-100/10 text-sm md:text-base px-4 py-2 rounded-full border border-blue-400/20 font-medium">
              Bachelor's Degree
            </span>
            <span className="bg-blue-100/10 text-sm md:text-base px-4 py-2 rounded-full border border-blue-400/20 font-medium">
              B.Sc. CSIT
            </span>
          </div>

          {/* Description and University Info */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl md:text-2xl font-bold text-blue-100">
              B.Sc. Computer Science and Information Technology
            </h3>

            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="500">
              <div className="flex items-center gap-3">
                <span className="bg-white p-2 rounded-full shadow-md">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2231/2231696.png"
                    alt="university"
                    className="w-5 h-5"
                  />
                </span>
                <span className="text-base md:text-lg font-medium text-gray-200">
                  Tribhuvan University
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-white p-2 rounded-full shadow-md">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/149/149060.png"
                    alt="location"
                    className="w-5 h-5"
                  />
                </span>
                <span className="text-base md:text-lg font-medium text-gray-200">
                  Kirtipur, Kathmandu, Nepal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
