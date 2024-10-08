import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { githubButton, githubHover, heroku, herokuHover } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { useTheme } from '../ThemeContext'; // Import useTheme

const ProjectCard = ({
	id,
	name,
	description,
	image,
	repo,
	demo,
	index,
	active,
	handleClick,
}) => {
	return (
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className={`relative ${
				active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
			} flex items-center justify-center min-w-[170px] 
      h-[350px] cursor-pointer card-shadow`}
			onClick={() => handleClick(id)}
		>
			<div
				className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"
			></div>

			<img
				src={image}
				alt={name}
				className="absolute w-full h-full object-cover object-top rounded-[24px]"
			/>

			{active !== id ? (
				<div className="flex items-center justify-start pr-[4.5rem]">
					<h3
						className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20"
					>
						{name}
					</h3>
				</div>
			) : (
				<>
					<div
						className="absolute bottom-0 p-6 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-[24px] z-20"
					>
						{/* <div className="absolute inset-0 flex justify-end m-3">
							<div
								onClick={() => window.open(repo, "_blank")}
								className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]"
							>
								<img
									src={github}
									alt="source code"
									className="w-4/5 h-4/5 object-contain"
								/>
							</div>
						</div> */}

						<h2
							className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]"
						>
							{name}
						</h2>
						<p
							className="text-silver sm:text-[15px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]"
						>
							{description}
						</p>
            <div className="flex flexwrap justify-between">
						<button
							className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[143px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
            transition duration-[0.2s] 
              ease-in-out"
							onClick={() => window.open(demo, "_blank")}
							onMouseOver={(e) => {
								e.currentTarget.style.color = theme;
								document
									.querySelector(".btn-demo")
									.setAttribute("src", herokuHover);
							}}
							onMouseOut={(e) => {
								e.currentTarget.style.color = "";
								document
									.querySelector(".btn-demo")
									.setAttribute("src", heroku);
							}}
						>
							<img
								src={heroku}
								alt="heroku"
								className="btn-demo sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain"
							/>
							LIVE DEMO
						</button>


            <button
							className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[143px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              transition duration-[0.2s] 
              ease-in-out"
							onClick={() => window.open(repo, "_blank")}
							onMouseOver={(e) => {
								e.currentTarget.style.color = theme;
								document
									.querySelector(".btn-github")
									.setAttribute("src", githubHover);
							}}
							onMouseOut={(e) => {
								e.currentTarget.style.color = "";
								document
									.querySelector(".btn-github")
									.setAttribute("src", githubButton);
							}}
						>
							<img
								src={githubButton}
								alt="github"
								className="btn-github sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain"
							/>
							GITHUB
						</button>
            </div>
					</div>
				</>
			)}
		</motion.div>
	);
};

const Projects = () => {
	const { theme } = useTheme(); // Use the theme context
	const [active, setActive] = useState("");

	return (
		<div className="-mt-5">
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>Case Studies</p>
				<h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-4 mb-2 pb-5 text-taupe text-[19px] max-w-3xl leading-[30px]"
				>
					Dive into my collection of projects! Here creativity meets code,
					featuring eye-catching, responsive interfaces and efficient,
					scalable backends. Each project highlights my ability to conquer complex challenges 
          and bring projects to life with precision and energy.
          
         
				</motion.p>
			</div>

			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<div className="mt-[20px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
					{projects.map((project, index) => (
						<ProjectCard
							key={project.id}
							index={index}
							{...project}
							active={active}
							handleClick={setActive}
						/>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Projects, "projects");
