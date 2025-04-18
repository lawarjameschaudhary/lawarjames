import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Ecommerce Site",
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQGdZNDSexCrjg/feedshare-shrink_2048_1536/B4DZQTG7BrHcAs-/0/1735487374945?e=1745452800&v=beta&t=dMkpG8G65otK3nLUrdP-_2MZZb1M-LVqWqgJB7hgAFg",
      link: "https://github.com/lawarjameschaudhary/Ecommerce-website",
      description:
        "A feature-rich E-Commerce platform using React.js, Tailwind CSS, and Local Storage. Features include product management, real-time pricing updates, and order notifications via EmailJS.",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "DB JSON"],
    },
    {
      title: "MeroKaam",
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQFzl5v1f-7Oow/feedshare-shrink_2048_1536/B4DZQ0upT_GkAs-/0/1736051446549?e=1745452800&v=beta&t=1g5TMsXfQ252HUH--MZTk5Snp7mHWuD7ewOxXDt8BKk",
      link: "https://github.com/lawarjameschaudhary/Hackathon-Project",
      description:
        "MeroKaam is a MERN-based job search platform connecting job seekers with employers. It features job posting, listing, and application tracking to streamline recruitment.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
      ],
    },
    {
      title: "Swiper Project",
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQEubB_snUs9FQ/feedshare-shrink_2048_1536/B4DZSUDzNPHUAo-/0/1737650823423?e=1745452800&v=beta&t=hjCiAOEL7Wmo6BkiKES1W2YkvJhb0YfFnQNQ3VIC1Lc",
      link: "https://lawarjameschaudhary.github.io/Swiper-Project/",
      description:
        "A sleek and responsive animated website using HTML, CSS, JavaScript, and SwiperJS, designed for smooth transitions and mobile-first performance.",
      technologies: ["HTML", "CSS", "JavaScript", "SwiperJS"],
    },
  ];

  return (
    <section className="bg-black border-b border-blue-300 pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div
          className="text-white font-extrabold text-3xl md:text-5xl lg:text-6xl text-center pt-10 md:pt-16 pb-6"
          data-aos="fade-up"
        >
          <h1 className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-transparent bg-clip-text">
            Projects I've Worked On
          </h1>
          <p className="text-sm md:text-base text-gray-400 mt-4 font-medium">
            A showcase of impactful projects built with modern technologies
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="group bg-white/10 border border-white/10 backdrop-blur-md rounded-md shadow-xl hover:shadow-blue-600/40 hover:border-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-3 relative overflow-hidden"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden rounded-t-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between text-white">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-700/20 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-blue-400/30 hover:bg-blue-500/40 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
