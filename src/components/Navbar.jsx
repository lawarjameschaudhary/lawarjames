import React, { useEffect, useState } from "react";

const Navbar = ({ scrollToSection }) => {
  const [navButtons, setNavButtons] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY>50)
      {
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  },[]);

  const toggleButton = () => {
    setNavButtons(!navButtons);
  };

  return (
    <div className={`bg-black fixed right-0 left-0 top-0 opacity-100 z-10 transition-opacity duration-300 ${scrolled ? "bg-white opacity-95" : "bg-transparent opacity-100"}`}>
      <div className="flex justify-between bg-[white] px-4 py-3 md:px-16 md:py-5 items-center flex-wrap">
        
        <div className="text-black text-lg md:text-4xl font-extrabold font-sans">
          <button onClick={() => scrollToSection("home")} className="hover:text-blue-600">
            Lawar
          </button>
        </div>

        
        <div className="md:hidden">
          <button onClick={toggleButton} className="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png"
              alt="navigation bar"
              className="w-[30px]"
            />
          </button>
        </div>

       
        <div className="hidden md:flex gap-8 font-bold text-base lg:text-xl">
          {["Home", "Projects", "About", "Skills", "Contact"].map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, ""))}
              className="relative text-black hover:text-transparent bg-clip-text bg-blue-500 group"
            >
              <span className="absolute bottom-[-4px] left-0 h-[3px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
              {item}
            </button>
          ))}
        </div>
      </div>

      {navButtons && (
        <div className="fixed top-14 right-0 bg-slate-600 w-full md:w-1/2 h-screen text-white p-6">
          <ul className="space-y-4">
            {[
              "Home",
              "Discription",
              "Education",
              "Projects",
              "About",
              "Skills",
              "Discuss",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    toggleButton();
                    scrollToSection(item.toLowerCase().replace(/ /g, ""));
                  }}
                  className="block text-left text-lg hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 transition-transform transform hover:scale-105"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
