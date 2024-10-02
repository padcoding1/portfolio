import { FaEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaGithub, FaFileAlt} from 'react-icons/fa'; // Importing the icons
import { motion } from 'framer-motion'; // Importing motion from framer-motion

const SocialMediaWindow = () => {
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
        className="text-orange font-poppins uppercase font-bold flex flex-col md:flex-row gap-2 justify-center"
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

      <div className="fixed z-50 bottom-[45%] md:bottom-0 right-4 items-left flex flex-col md:flex-row gap-2 bg-eerieBlack opacity-[1] md:m-3 p-2 rounded-lg shadow-lg gap-2">
      <motion.a
        href="mailto:padcoding@gmail.com"
        className="text-orange"
        aria-label="Email"
        // whileHover="pulse" // Apply the pulse animation on hover
        // variants={pulse}
      >
        <FaEnvelope className="w-[35px] h-[35px] md:w-[26px] md:h-[26px] hover:text-flashWhite" />
      </motion.a>
      <motion.a
        href="https://linkedin.com/in/padcoding"
        className="text-orange"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        // whileHover="pulse" // Apply the pulse animation on hover
        // variants={pulse}
      >
        <FaLinkedin className="w-[35px] h-[35px] md:w-[26px] md:h-[26px] hover:text-flashWhite" />
      </motion.a>
      <motion.a
        href="https://github.com/padcoding1"
        className="text-orange"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        // whileHover="pulse" // Apply the pulse animation on hover
        // variants={pulse}
      >
        <FaGithub className="w-[35px] h-[35px] md:w-[26px] md:h-[26px] hover:text-flashWhite" />
      </motion.a>
      <motion.a
        href="https://instagram.com/philofthefuture1000"
        className="text-orange"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        // whileHover="pulse" // Apply the pulse animation on hover
        // variants={pulse}
      >
        <FaInstagram className="w-[35px] h-[35px] md:w-[26px] md:h-[26px] hover:text-flashWhite" />
      
      {/* <div className="block md:hidden fixed z-50 bottom-[25%] md:bottom-24 right-4 items-left flex flex-col md:flex-row gap-2 bg-eerieBlack opacity-[1] md:m-3 p-2 rounded-lg shadow-lg gap-2">
       
        <div className=" flex flex-col p-2 text-orange text-center font-bold onClick={() =>
                window.open(
                  'https://docs.google.com/document/d/1MlkrHaJElhbbUHBxumsuU31yBGgufrVyjP04ApKBweM/edit?usp=sharing', //paste the link to your resume here
                  '_blank'
                )">
              <FaFileAlt className="md:w-[20px] md:h-[20px]" />
  <span className="block">R</span>
  <span className="block">E</span>
  <span className="block">S</span>
  <span className="block">U</span>
  <span className="block">M</span>
  <span className="block">E</span>
</div>
        </div> */}
        
      </motion.a>
    </div>
    </div>

  );
};

export default SocialMediaWindow;
