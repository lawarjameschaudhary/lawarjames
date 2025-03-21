import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Discription = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      id="/about"
      className="bg-black flex flex-col items-center justify-center py-20 md:py-28 border-blue-300 border-b-[0.1px]"
    >
      
      <div className="mx-auto w-[90%] md:w-full max-w-6xl">
        {/* Title Section */}
        <div
          className="text-white font-extrabold text-3xl md:text-5xl lg:text-7xl flex justify-center pb-4 md:pb-6 lg:pb-9"
          data-aos="fade-up"
        >
          <h1 className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text">
            About Me
          </h1>
        </div>

       
        <div
          className="flex flex-col gap-5 md:gap-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
         
          <div className="i-love-section">
            <div
              className="headier-section flex gap-8 md:gap-14 items-center"
              data-aos="zoom-in"
            >
              <div className="icon-section border-2 rounded-full border-blue-500 p-2">
                <img
                  src="https://scontent.fktm23-1.fna.fbcdn.net/v/t39.30808-6/271135120_600616894346087_5071994625557431309_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=18ExWjuWbccQ7kNvgE4WHXX&_nc_oc=AdmY2r85f04fdOUJdWmsxgTg2FkZLabG_DSYUmZqDQEPXiyOfLP_5YYD2Ukkq6fhPgnQM9P0cP0wKOPTqffqe2Lc&_nc_zt=23&_nc_ht=scontent.fktm23-1.fna&_nc_gid=vlsyWBi2vDYQkhk0QF5YAQ&oh=00_AYFfdESGGr4QOsLLXVpYv3dI7TgDOx3H1VRfvFEnDXzo1g&oe=67E321D7"
                  alt="Developer-image"
                  className="w-24 md:w-32 mx-auto rounded-full"
                />
              </div>

              <div className="text-white font-extrabold text-3xl md:text-5xl lg:text-6xl flex items-center text-center justify-center">
                <h1 className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text">
                  My Hobbies
                </h1>
              </div>
            </div>

          
            <div
              className="icons-section text-white flex gap-5 flex-wrap mt-10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {[
                { label: 'Listening Music', icon: 'https://cdn-icons-png.flaticon.com/128/10874/10874038.png' },
                { label: 'Travelling', icon: 'https://cdn-icons-png.flaticon.com/128/3089/3089627.png' },
                { label: 'Money', icon: 'https://cdn-icons-png.flaticon.com/128/12740/12740855.png' },
                { label: 'Mountain', icon: 'https://cdn-icons-png.flaticon.com/128/3337/3337973.png' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="first-button bg-gray-300 flex rounded-full px-2 md:px-5 py-3 md:py-4 items-center gap-1 md:gap-3"
                  data-aos="fade-up"
                  data-aos-delay={`${500 + index * 100}`}
                >
                  <div className="image-div">
                    <img src={item.icon} alt={item.label} className="w-[20px] md:w-[40px]" />
                  </div>
                  <div className="text-blue-500 text-md md:text-3xl">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

        
          <div
            className="bg-gray-800 rounded-2xl"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <h1 className="text-gray-300 p-3 md:p-7 text-md md:text-xl leading-7 md:leading-loose font-extralight md:font-light">
              Hello, I'm Lawar James chaudhary. 
              A passionate front end developer graduating with{' '}
              <b className="font-extrabold">Bsc. Computer Science and Information Technology</b>. 
              I have acquired specialized knowledge and skills on ReactJS, HTML, CSS, Javascript, Tailwind CSS, and Photoshop. 
              These skills have helped me to be placed in the field of web development. 
              Making responsive websites adaptable to any device is one of my specialties. 
              My skill set also extends to proficient API integration, ensuring seamless data flow between the front end and back end.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discription;
