import { motion } from "framer-motion";
import React, { useState } from "react";
import { techCategories, technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion"; 
import { styles } from "../styles";

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // When a category ball is clicked, update the state to the selected category type
  const handleLogoClick = (categoryType) => {
    if (categoryType === selectedCategory) {
      setSelectedCategory(null); // Clear selection if the same category is clicked
    } else {
      setSelectedCategory(categoryType); // Set new category
    }
  };

  // Filter the technologies based on the selected category
  const selectedTechs = technologies.filter(
    (tech) => tech.type === selectedCategory
  );

  // Define the animation variant for pulsing
  const pulseVariant = {
    pulse: {
      scale: [1, 1.4, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };


  // Define the animation variant for pulsing glow
  const textGlowVariant = {
    pulse: {
      textShadow: [
        "0px 0px 0px rgba(255, 180, 0, 0.2)",
        "0px 0px 8px rgba(255, 180, 0, 0.5)",
        "0px 0px 16px rgba(255, 180, 0, 0.7)",
        "0px 0px 8px rgba(255, 180, 0, 0.5)",
        "0px 0px 0px rgba(255, 180, 0, 0.2)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

           {/* Display pulsing glow text if no category is selected */}
          
        <motion.div
          className="flex justify-center items-center"
          variants={textGlowVariant}
          animate="pulse"
        >
          <h2 className="mt-20 mb-12 text-center uppercase font-black lg:text-[40px] md:text-[28px] sm:text-[28px] text-[30px] font-poppins text-orange">
            Select a category to expand
          </h2>
        </motion.div>
      

      {/* Category Balls */}
      <div className="flex flex-wrap justify-center gap-y-4 gap-x-5 mt-10 md:justify-between">
        {techCategories.map((category) => (
          <div
            key={category.type}
            className="flex flex-col items-center cursor-pointer w-[40%] md:w-[20%]"
            onClick={() => handleLogoClick(category.type)}
          >
            <motion.div
              className={`w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-eerieBlack 
                rounded-full flex items-center justify-center transition-all duration-300 
                hover:scale-100 hover:shadow-[0_0_15px_#ffb400] ${
                selectedCategory === category.type
                  ? "ring-4 ring-yellow-500 shadow-[0_0_30px_#ffb400]"
                  : ""
              }`}
              variants={selectedCategory === category.type ? pulseVariant : {}}
              animate={selectedCategory === category.type ? "pulse" : ""}
            >
              <img
                src={category.icon}
                alt={category.type}
                className="w-16 h-16 sm:w-19 sm:h-19"
                style={{ filter: 'brightness(0) saturate(100%) invert(72%) sepia(97%) saturate(3000%) hue-rotate(7deg) brightness(101%) contrast(101%)' }} // To make logos #ffb400
              />
            </motion.div>
            <p className="mt-5 w-[100%] md:text-[18px] text-[16px] font-bold  font-poppins mt-2 text-center">{category.name}</p>
          </div>
        ))}
      </div>

      {/* Display pulsing glow text if no category is selected
      {!selectedCategory && (
        <motion.div
          className="flex justify-center items-center mt-10"
          variants={textGlowVariant}
          animate="pulse"
        >
          <h2 className="mt-20 text-center uppercase font-black lg:text-[40px] md:text-[28px] sm:text-[28px] text-[30px] font-poppins text-orange">
            Select a category to expand
          </h2>
        </motion.div>
      )} */}

      {/* Technology Balls - Conditionally render if a category is selected */}
      {selectedCategory && (
        <div className="flex flex-wrap justify-between p-10 gap-y-4 gap-x-10 mt-14 overflow-hidden rounded-lg shadow-[0_0_5px_#ffb400] ">
          {selectedTechs.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center cursor-pointer w-[20%] gap-x-5 md:justify-between"
            >
              <div className="w-18 h-18 sm:w-24 sm:h-24 md:w-25 md:h-25 lg:w-32 lg:h-32 bg-eerieBlack 
              rounded-full flex items-center justify-center transition-all duration-300 
              shadow-[0_0_5px_#ffb400]">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 sm:w-19 sm:h-19"
                  style={{ filter: 'brightness(0) saturate(100%) invert(72%) sepia(97%) saturate(3000%) hue-rotate(7deg) brightness(101%) contrast(101%)' }} // To make logos #ffb400
                />
              </div>
              <p className="w-[100%] md:text-[18px] text-[16px] text-orange font-bold  font-poppins mt-2 text-center whitespace-normal ">{tech.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "tech");
