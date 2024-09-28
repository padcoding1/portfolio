import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { headshot, bwmap, worldmap } from "../assets";

const Hero = () => {
	return (
		<div className={`${styles.mobileScreen} relative min-h-[calc(100vh-(85px))] sm:min-h-[calc(100vh-(105px))] md:top-[106px]`}>

			{/* White on Black World Map for Smallest Mobile */}
			<div className="z-6 absolute top-0 left-0 w-[100%] h-[100%]">
				<img
					src={bwmap}
					alt="world map"
					className="w-full h-full sm:block hidden object-cover"
				/>
			</div>

			{/* Black on White World Map
			<div className="z-7 absolute top-0 left-0 w-[100%] h-[100%]">
				<img
					src={worldmap}
					alt="world map"
					className="w-full h-full block object-cover"
				/>
				
			</div> */}

			{/* Gradient */}
			<div className="absolute left-0 h-[100%] w-[100%] opacity-95 
				bg-hero-mobile sm:bg-hero md:bg-hero-medium lg:bg-hero-large xl:bg-hero-extra-large overflow-hidden">

			</div>
			<section
				className="relative flex sm:flex-row flex-col mx-auto h-full overflow-hidden"
			>
				{/* bg-hero-mobile sm:bg-hero overflow-hidden */}

				<div
					className={`${styles.mobileScreen} z-9 md:pt-[5vh] lg:pt-[4vh] xl:pt-[3vh] pt-[5vh] 2xl:pl-[0vh] xl:pl-[8vh] pl-[5vw] xl:pr-[75vh] lg:pr-[60vh] pr-[20vh] max-w-7xl mx-auto flex flex-row 
						justify-start gap-3`}
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

					<div></div>
				</div>

				<div>
					<img
						className="absolute z-10 right-[50%] transform translate-x-1/2 bottom-[0px] 
            				h-[49vh] lg:right-[20%] xl:right-[25%] 2xl:right-[23%]
							lg:h-[70vh] xl:h-[70vh] 2xl:h-[80vh]
							lg:mr-[5vw] 2xl:mr-[8vw]
							"
						src={headshot}
						alt="A profile picture of Philip Dillon"
					/>
				</div>

				<div
					className="slider z-20 absolute lg:bottom-4 md:bottom-14 xs:bottom-6 bottom-10 w-full 
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
			</section>
		</div>
	);
};

export default Hero;
