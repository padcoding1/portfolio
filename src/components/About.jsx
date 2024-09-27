import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<motion.div
			variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
			className="xs:w-[200px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-jetLight rounded-[20px] py-5 px-1 min-h-[200px] flex justify-evenly items-center flex-col"
			>
				<img src={icon} alt={title} className="w-16 h-16 object-contain" />
				<h3 className="text-orange text-[18px] font-bold text-center">
					{title}
				</h3>
			</div>
		</motion.div>
	);
};

const About = () => {
	return (
		<div className="-mt-[8rem]">
			<motion.div variants={textVariant()}>
				<h2 className={styles.sectionHeadTextSmall}>Hi, I'm Philip!</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-taupe text-[18px] max-w-3xl leading-[25px]"
			>
				Whether it’s front-end, back-end, or full-stack, there’s nothing
				quite like the rush of writing code, running it, and watching
				everything fall perfectly into place—like solving a puzzle in real
				time. <br></br>
				<br></br>
				Fueled by my background in IT operations, I’ve honed my
				problem-solving skills to build cutting-edge applications. From
				crafting sleek interfaces to rock-solid backends, I thrive on
				turning ideas into impactful software. Coding isn’t just a job—it’s
				my craft, and I’m always ready to dive into new projects and tools,
				bringing energy and collaboration to every team.
				<br></br>
				<br></br>
				Outside of coding, you’ll find me mountaineering, rock climbing,
				weightlifting, learning Italian, or riding my motorcycle!
			</motion.p>

			<div className="mt-10 flex flex-wrap gap-5">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(About, "about");
