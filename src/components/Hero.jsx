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
					className={`absolute inset-0 sm:top-[100px] top-[90px] 
          lg:top-[150px] xl:top-[180px] 2xl:-left-[350px] pl-10
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
				>
					<div>
						<h1
							className={`font-black text-eerieBlack  
								2xl:text-[140px] xl:text-[100px] lg:text-[100px] sm:text-[75px] xs:text-[60px] 
								text-[80px] 
								leading-[0.8em] text-eerieBlack font-poppins uppercase`}>
							Philip Dillon{" "}
							<p
								className="text-orange text-[45px] lg:text-[55px] sm:text-[30px] 
                text-eerieBlack font-roadrage
            	uppercase leading-[1em] -mt-2 tracking-widest text-shadow-solid-2 drop-shadow-glow
                "
							>
								Software<br></br>
								Developer
							</p>
						</h1>
						<p
							className={`text-eerieBlack lg:text-[30px] sm:text-[26px] xs:text-[20px] 
								text-[26px] lg:leading-[40px] mt-5 text-eerieBlack 
								font-poppins uppercase font-black`}
						>
							{/* Software Developer <br className="sm:block hidden" /> */}
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
						className="absolute bottom-0 ml-[0vw] 
            2xl:ml-[55vw] lg:ml-[65vw] md:ml-[60vw] xmd:ml-[60vw] sm:ml-[10vw]
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
