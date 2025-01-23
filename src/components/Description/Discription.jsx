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
   
      <div
        className="text-white font-extrabold text-3xl md:text-5xl lg:text-7xl flex justify-center pb-4 md:pb-6 lg:pb-9"
        data-aos="fade-up"
      >
        <h1 className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text">
          About Me
        </h1>
      </div>

      
      <div
        className="w-[90%] md:w-[70%] flex flex-col gap-5 md:gap-10"
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
                src="https://lh3.googleusercontent.com/a/ACg8ocJq5BfZoZH-Qbs_FDCrHavshXm9-LTvVPSrPvHwQTvbu7hVdY0I=s576-c-no"
                alt="Developer-image"
                className="w-24 md:w-32 mx-auto rounded-full"
              />
            </div>

            <div className="text-white font-extrabold text-3xl md:text-5xl lg:text-6xl flex items-center text-center justify-center">
              <h1 className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text">
                I Love
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
          <h1 className="text-white p-3 md:p-7 text-md md:text-xl leading-7 md:leading-loose font-extralight md:font-light">
            A passionate front end developer graduating with{' '}
            <b className="font-extrabold">Bsc. Computer Science and Information Technology</b>{' '}
            and experienced in crafting captivating digital experiences. My expertise lies in leveraging cutting-edge
            technologies such as ReactJs, HTML, CSS, Tailwindcss, JavaScript, and Photoshop. I take pride in my ability
            to design seamless user interfaces and components that align perfectly with the intended aesthetic, creating
            responsive websites that adapt gracefully to any device. My skill set also extends to proficient API
            integration, ensuring the seamless flow of data between the frontend and backend. In addition, I'm known for
            writing clean, well-structured code that not only functions flawlessly but also enhances the overall
            maintainability of projects. Thank you! I will deliver you the best website you are searching for.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Discription;