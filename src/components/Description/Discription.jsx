import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Discription = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const hobbies = [
    { label: 'Listening Music', icon: 'https://cdn-icons-png.flaticon.com/128/10874/10874038.png' },
    { label: 'Travelling', icon: 'https://cdn-icons-png.flaticon.com/128/3089/3089627.png' },
    { label: 'Money', icon: 'https://cdn-icons-png.flaticon.com/128/12740/12740855.png' },
    { label: 'Mountain', icon: 'https://cdn-icons-png.flaticon.com/128/3337/3337973.png' },
  ];

  return (
    <section
      id="about"
      className="bg-black text-white flex flex-col items-center justify-center py-20 md:py-28 border-b border-blue-300"
    >
      <div className="w-[90%] md:w-full max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-lg font-medium">
            Get to know me better
          </p>
        </div>

        {/* My Hobbies */}
        <div className="mt-16 space-y-10" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div
              className="border-4 border-blue-500 rounded-full p-1 shadow-lg"
              data-aos="zoom-in"
            >
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocK7svk8wURS2FaxZidKLSwrZETm9Jh3ACl6Baj6nyDsxt5wT14=s576-c-no"
                alt="Lawar"
                className="w-28 md:w-40 rounded-full"
              />
            </div>

            <h3 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text text-center md:text-left">
              My Hobbies
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="400">
            {hobbies.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-3 flex items-center gap-3 hover:scale-105 transition duration-300"
                data-aos="fade-up"
                data-aos-delay={`${500 + index * 100}`}
              >
                <img src={item.icon} alt={item.label} className="w-6 md:w-8" />
                <span className="text-md md:text-lg text-blue-300 font-semibold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bio Section */}
        <div
          className="mt-16 bg-white/10 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-xl"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <p className="text-gray-200 text-base md:text-lg leading-7 md:leading-loose font-light">
            Hello, I'm <span className="text-blue-400 font-bold">Lawar James Chaudhary</span>,
            a passionate <strong className="text-blue-300">frontend developer</strong> currently pursuing a degree in 
            <strong className="font-bold"> B.Sc. Computer Science and Information Technology</strong>.
            <br /><br />
            I specialize in building responsive, dynamic websites using
            <span className="text-blue-400 font-medium"> ReactJS, HTML, CSS, JavaScript, Tailwind CSS</span>,
            and <span className="text-blue-400 font-medium">Adobe Photoshop</span>. My strength lies in
            creating visually appealing and user-friendly interfaces that adapt seamlessly across devices.
            <br /><br />
            I'm also skilled in integrating APIs to ensure efficient communication between frontend and backend systems,
            delivering smooth user experiences and functional web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discription;
