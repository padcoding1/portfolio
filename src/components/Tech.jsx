import { motion } from "framer-motion";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Ball } from "./canvas";
// import { Ball } from './Ball';
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import Loader from "./Loader";
import { useInView } from "react-intersection-observer";
import { Preload, Text } from "@react-three/drei";

const TechBalls = ({ techs }) => {
	const { ref, inView } = useInView({
		triggerOnce: true, // Only load once when it comes into view
		threshold: 0.1, // Load when 10% of the component is visible
	});
	return (
    <div ref={ref} className="flex flex-wrap justify-center mt-8">
    {inView &&
      techs.map((tech, index) => (
        <div key={tech.name} className="w-[170px] h-[130px] mt-5"> {/* Increased height of the container */}
          <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />}>
              <Ball imgUrl={tech.icon} /> {/* Moved ball slightly up */}
              <Text
                position={[0, -3.5, 0]} // Moved text further down to create more gap
                fontSize={1.2} // Adjust font size for responsive display
                lineHeight={1.2}
                color="lightgray" // Slightly gray color
                anchorY="bottom"
              >
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
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubTextLight}>My skills</p>
				<h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
			</motion.div>
			<div className="flex flex-wrap justify-center">
				<div className="flex flex-wrap justify-center gap-y-4 gap-x-5 mt-1">
					<TechBalls techs={technologies} />

					{/* {languages.map((language) => (
            <div className="w-32 h-32" key={language.name}>
              <BallCanvas icon={language.icon} />
              <h3 className="text-taupe text-[14px] font-bold text-center">
                {language.name}
              </h3>
            </div>
          ))} */}
				</div>

				{/* <div className="flex flex-wrap justify-center gap-y-8 gap-x-5 mt-14">
          {othertech.map((tech) => (
            <div className="w-32 h-32" key={tech.name}>
              <BallCanvas icon={tech.icon} />
              <h3 className="text-taupe text-[14px] font-bold text-center">
                {tech.name}
              </h3>
            </div>
          ))}
        </div> */}
			</div>
		</>
	);
};

export default SectionWrapper(Tech, "tech");
