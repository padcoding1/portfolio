import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { headshot, bwmap, worldmap } from "../assets";

const Hero = () => {
	return (
		<>
			<div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
				<img
					src={bwmap}
					alt="world map"
					className="w-full h-full sm:block hidden object-cover"
				/>
			</div>
			<div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
				<img
					src={worldmap}
					alt="world map"
					className="w-full h-full sm:hidden block object-cover"
				/>
			</div>
			<section
				className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
			>
				<div
					className={`absolute inset-0 sm:top-[100px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
				>
					<div>
						<h1
							className={`${styles.heroNameText} font-poppins uppercase`}
						>
							Philip Dillon{" "}
							<p
								className={`${styles.heroDevText} text-orange font-roadrage uppercase  
								lg:-mt-2 xmd:-mt-3 md:-mt-2 -mt-2 tracking-widest text-shadow-solid-2 drop-shadow-glow`}
							>
								Software<br></br>
								Developer
							</p>
						</h1>
						<p
							className={`${styles.heroWordsText} mt-3 font-poppins uppercase font-black`}
						>
							Delightful.<br></br>
							Dynamic.<br></br>
							Driven.
						</p>
					</div>
					<div
						className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
					></div>

					<div></div>
				</div>

				<div
					className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
				>
					<a href="#about">
						<div
							className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
						>
							<motion.div
								animate={{
									y: [0, 24, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: "loop",
								}}
								className="w-3 h-3 rounded-full bg-taupe mb-1"
							/>
						</div>
					</a>
				</div>

				{/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
				<div>
					<img
						className="absolute bottom-0 ml-[50vw] 
            lg:ml-[65vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
						src={headshot}
						alt="A profile picture of Philip Dillon"
					/>
				</div>
			</section>
		</>
	);
};

export default Hero;
