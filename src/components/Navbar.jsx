import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo, logoShadow } from "../assets";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useTheme } from '../ThemeContext'; // Import useTheme
import { hexToFilter } from 'css-filter-converter'; // Import the library

const Navbar = () => {
  const { theme } = useTheme(); // Use the theme context
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

   // Convert hex color to CSS filter using the library
   const filterStyle = hexToFilter(theme);

  // Define the scrollToSection function
  const scrollToSection = (id, offset = 0) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = offset; // Adjust this value for a custom offset
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setActive(id); // Set the active link
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const observerOptions = {
        root: null,
        threshold: 0.1, // Adjust the threshold as needed
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActive(id); // Update active state when section is in view
          }
        });
      }, observerOptions);

      sections.forEach((section) => observer.observe(section));

      // Clean up the observer when the component is unmounted
      return () => observer.disconnect();
    };

    handleScroll();
  }, []);

  return (
    <nav
      className={`${styles.padding} w-full flex items-center py-2 fixed 
      md:top-0 md:bottom-auto bottom-0 z-30 bg-flashWhite md:opacity-[0.92] xxs:h-[12vh]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl xl:max-w-full mx-auto xl:mx-[1rem] px-[1.5rem]">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
		  
        >
			<div className="logo-container relative max-w-7xl sm:w-[90px] sm:h-[90px] md:md:w-[90px] md:h-[90px] w-[70px] h-[70px] object-contain">
          <img
		  
            src={logo}
            alt="logo black layer"
            className="absolute z-32 max-w-7xl sm:w-[90px] sm:h-[90px] md:md:w-[90px] md:h-[90px] w-[70px] h-[70px] object-contain"
			style={{
				
				
			  }}
          />
		  <img
		  	
            src={logoShadow}
            alt="logo shadow layer"
            className="absolute z-31 max-w-7xl sm:w-[90px] sm:h-[90px] md:md:w-[90px] md:h-[90px] w-[70px] h-[70px] object-contain"
			style={{
				filter: filterStyle.color,
				mixBlendMode: 'normal'
				
			  }}
          />
		  </div>
        </Link>
        <ul className="list-none hidden md:flex flex-row md:gap-8 lg:gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "" : "text-eerieBlack"
              } hover:text-taupe md:text-[24px] xmd:text-[30px] lg:text-[24px] font-black font-mova 
              uppercase tracking-tighter cursor-pointer nav-links`}
              onClick={() => scrollToSection(nav.id, -90)} // Add custom offset here for desktop
              style={{ color: active === nav.id ? theme : '' }} // Apply theme color dynamically
            >
              <a>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="md:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <>
              <div
                className={`p-6 bg-flashWhite opacity-[0.9] fixed 
                bottom-[calc(68px+1rem)] right-0 w-full h-[45vh] menu ${
                toggle ? "menu-open" : "menu-close"
              }`}
              >
                <ul
                  className="list-none flex flex-col mt-[0.4rem] 
                  items-start justify-end"
                >
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`${
                        active === nav.id ? "" : "text-eerieBlack"
                      } text-[5vh] font-bold font-mova 
                      uppercase tracking-[1px] cursor-pointer`}
                      onClick={() => {
                        scrollToSection(nav.id, -80); // Custom offset for mobile too
                        setToggle(!toggle);
                      }}
                      style={{ color: active === nav.id ? theme : '' }} // Apply theme color dynamically
                    >
                      <a>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer mr-[15px]"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
            </>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="sm:w-[62px] sm:h-[62px] w-[55x] h-[55px] 
              object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;