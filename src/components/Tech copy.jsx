import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { techCategories, technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

	// When a category ball is clicked, update the state to the selected category type and track the click position
	const handleLogoClick = (categoryType, e) => {
		const rect = e.target.getBoundingClientRect();
		setClickPosition({
			x: rect.left + rect.width / 2,
			y: rect.top + rect.height / 2,
		});

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
			scale: [1, 1.8, 1],
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
				"0px 0px 0px rgba(255, 180, 0, 0.2)",
			],
			transition: {
				duration: 2,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	};

	// Animation for sliding in technology balls
  const techBallSlideIn = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      x: clickPosition.x - window.innerWidth / 2 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        duration: 0.8, 
        ease: "easeInOut" 
      } 
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      x: clickPosition.x - window.innerWidth / 2,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        duration: 0.5, 
        ease: "easeInOut" 
      },
    }
  };

	const openLinks = (links) => {
		if (Array.isArray(links)) {
			links.forEach((link) =>
				window.open(link, "_blank", "noopener noreferrer")
			);
		} else {
			window.open(links, "_blank", "noopener noreferrer");
		}
	};
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubTextLight}>My skills</p>
				<h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
			</motion.div>
			<h2 className="mt-16 mb-16 xl:mt-12 lg:mt-6 lg:mb-6 text-center uppercase font-black lg:text-[24px] md:text-[28px] sm:text-[24px] text-[20px] font-poppins text-orange">
				Select a category to expand
			</h2>

			{/* Category Balls */}
			<div
				className="flex flex-wrap mt-10 px-4 xs:px-6 gap-y-4 md:px-0 sm:gap-x-8 gap-x-5 md:gap-x-4  
      justify-between sm:justify-center"
			>
				{techCategories.map((category) => (
					<div
						key={category.type}
						className="flex flex-col items-center cursor-pointer w-[40%] md:w-[20%]"
						onClick={(e) => handleLogoClick(category.type, e)} // Pass click event to handle position
					>
						<motion.div
							className={`w-[60px] h-[60px] xs:w-[80px] xs:h-[80px]   bg-eerieBlack 
                rounded-full flex items-center justify-center transition-all duration-300 
                hover:scale-100 hover:shadow-[0_0_15px_#ffb400] ${
							selectedCategory === category.type
								? "ring-4 ring-yellow-500 shadow-[0_0_30px_#ffb400]"
								: ""
						}`}
							variants={
								selectedCategory === category.type ? pulseVariant : {}
							}
							animate={selectedCategory === category.type ? "pulse" : ""}
						>
							<img
								src={category.icon}
								alt={category.type}
								className="w-[40px] h-[40px] xs:w-[60px] xs:h-[60px]"
								style={{
									filter:
										"brightness(0) saturate(100%) invert(72%) sepia(97%) saturate(3000%) hue-rotate(7deg) brightness(101%) contrast(101%)",
								}} // To make logos #ffb400
							/>
						</motion.div>
						<p className="mt-5 w-[100%] md:text-[18px] text-[16px] font-bold  font-poppins mt-2 text-center whitespace-normal">
							{category.name}
						</p>
					</div>
				))}
			</div>

			{/* Display pulsing glow text if no category is selected

     {!selectedCategory && (
     <motion.div
        className="flex justify-center items-center"
        variants={textGlowVariant}
        animate="pulse"
      >
        <h2 className="mt-20 mb-12 text-center uppercase font-black lg:text-[40px] md:text-[28px] sm:text-[28px] text-[30px] font-poppins text-orange">
          Select a category to expand
        </h2>
      </motion.div>
     )} */}

			{/* Technology Balls - Conditionally render if a category is selected */}
			<AnimatePresence mode="wait">
				{selectedCategory && (
					<motion.div
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={techBallSlideIn}
						className="flex flex-wrap mt-10 xs:px-6 gap-y-4 md:px-0 sm:gap-x-8 gap-x-5 md:gap-x-4  
       justify-center"
					>
						{selectedTechs.map((tech) => (
							<div
								key={tech.name}
								className="flex flex-col items-center cursor-pointer w-[130px] gap-x-2 lg:px-0 justify-center"
								onClick={() => openLinks(tech.link)} // Handle multiple links
							>
								<div
									className="w-[60px] h-[60px] xs:w-[80px] xs:h-[80px] bg-eerieBlack 
    rounded-full flex items-center justify-center transition-all duration-300 
    shadow-[0_0_5px_#ffb400]"
								>
									<img
										src={tech.icon}
										alt={tech.name}
										className="w-[40px] h-[40px] xs:w-[60px] xs:h-[60px]"
										style={{
											filter:
												"brightness(0) saturate(100%) invert(72%) sepia(97%) saturate(3000%) hue-rotate(7deg) brightness(101%) contrast(101%)",
										}}
									/>
								</div>
								<p className="w-[100%] md:text-[18px] text-[16px] text-orange font-bold font-poppins mt-2 text-center whitespace-normal ">
									{tech.name}
								</p>
							</div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default SectionWrapper(Tech, "tech");
