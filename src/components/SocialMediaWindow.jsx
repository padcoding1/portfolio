import { FaEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaGithub, FaFileAlt} from 'react-icons/fa'; // Importing the icons
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import { useTheme } from '../ThemeContext'; // Import useTheme

const SocialMediaWindow = () => {
  const { theme } = useTheme(); // Use the theme context
  // Define the pulse animation
  const pulse = {
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.75,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed z-50 opacity-[0.92]">
    <div className="fixed z-50 hidden md:block bottom-0 left-4 items-left gap-y-3 flex flex-col 
      bg-eerieBlack opacity-[1] md:m-3 p-2 rounded-lg shadow-lg gap-2">
      
      <motion.a
        href=""
        className="font-poppins uppercase font-bold flex flex-col md:flex-row gap-2 justify-center"
        style={{ color:theme }} 
        aria-label="Resume"
        // whileHover="pulse" // Apply the pulse animation on hover
        // variants={pulse}
      >


        <span className="block hover:text-flashWhite flex flex-col md:flex-row gap-2" onClick={() =>
                window.open(
                  'https://docs.google.com/document/d/1MlkrHaJElhbbUHBxumsuU31yBGgufrVyjP04ApKBweM/edit?usp=sharing', //paste the link to your resume here
                  '_blank'
                )
              }><FaFileAlt className="md:w-[20px] md:h-[20px]" />Resume</span>

        
      </motion.a>
    </div>

      <div className="fixed z-50 bottom-[45%] md:bottom-0 right-1 md:right-4 items-left flex flex-col md:flex-row gap-2 bg-eerieBlack opacity-[1] md:m-3 p-2 rounded-lg shadow-lg gap-2">
      <motion.a
        href="mailto:padcoding@gmail.com"
        className=""
        style={{ color:theme }} 
        aria-label="Email"
        // whileHover="pulse" // Apply the pulse animation on hover
        // variants={pulse}
      >
        <FaEnvelope className="w-[29px] h-[29px] md:w-[26px] md:h-[26px] hover:text-flashWhite" />
      </motion.a>
      <motion.a
        href="https://linkedin.com/in/padcoding"
        className=""
        style={{ color:theme }} 
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        // whileHover="pulse" // Apply the pulse animation on hover
        // variants={pulse}
      >
        <FaLinkedin className="w-[29px] h-[29px] md:w-[26px] md:h-[26px] hover:text-flashWhite" />
      </motion.a>
      <motion.a
        href="https://github.com/padcoding1"
        className=""
        style={{ color:theme }} 
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        // whileHover="pulse" // Apply the pulse animation on hover
        // variants={pulse}
      >
        <FaGithub className="w-[29px] h-[29px] md:w-[26px] md:h-[26px] hover:text-flashWhite" />
      </motion.a>
      <motion.a
        href="https://instagram.com/philofthefuture1000"
        className=""
        style={{ color:theme }} 
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        // whileHover="pulse" // Apply the pulse animation on hover
        // variants={pulse}
      >
        <FaInstagram className="w-[29px] h-[29px] md:w-[26px] md:h-[26px] hover:text-flashWhite" />     
      </motion.a>
    </div>
    </div>

  );
};

export default SocialMediaWindow;
