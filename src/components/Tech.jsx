import { motion } from "framer-motion";
import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Ball } from "./canvas";
import { techCategories, technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import Loader from "./Loader";
import { useInView } from "react-intersection-observer";
import { Preload, Text } from "@react-three/drei";

// TechCatBalls Component: Displays the technology categories (top-level)
const TechCatBalls = ({ techCats, onBallClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="h-[50vh] flex flex-wrap justify-center mt-8">
      {inView &&
        techCats.map((cat, index) => (
          <div
            key={cat.name}
            className="w-[170px] h-[130px] mt-5"
            onClick={() => onBallClick(cat.type)} // Pass type, not name
          >
            <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
              <Suspense fallback={<Loader />}>
                <Ball imgUrl={cat.icon} />
                <Text position={[0, -3.5, 0]} fontSize={1.2} lineHeight={1.2} color="white">
                  {cat.name}
                </Text>
              </Suspense>
              <Preload all />
            </Canvas>
          </div>
        ))}
    </div>
  );
};

// TechBalls Component: Displays the technologies under the selected category
const TechBalls = ({ techs }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="flex flex-wrap justify-center mt-8">
      {inView &&
        techs.map((tech, index) => (
          <div key={tech.name} className="w-[170px] h-[130px] mt-5">
            <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
              <Suspense fallback={<Loader />}>
                <Ball imgUrl={tech.icon} />
                <Text position={[0, -3.5, 0]} fontSize={1.2} lineHeight={1.2} color="lightgray">
                  {tech.name}
                </Text>
              </Suspense>
              <Preload all />
            </Canvas>
          </div>
        ))}
    </div>
  );
};

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // When a category ball is clicked, update the state to the selected category type
  const handleBallClick = (categoryType) => {
    if (categoryType === selectedCategory) {
      setSelectedCategory(null); // Clear selection if same category is clicked
    } else {
      setSelectedCategory(categoryType); // Set new category
    }
  };

  // Filter the technologies based on the selected category
  const selectedTechs = technologies.filter(
    (tech) => tech.type === selectedCategory
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      {/* Category Balls */}
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center gap-y-4 gap-x-5 mt-1">
          <TechCatBalls techCats={techCategories} onBallClick={handleBallClick} />
        </div>
      </div>

      {/* Technology Balls - Conditionally render if a category is selected */}
      {selectedCategory && (
        <div className="flex flex-wrap justify-center gap-y-4 gap-x-5 mt-8">
          <TechBalls techs={selectedTechs} />
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "tech");
