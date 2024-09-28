import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-2 fixed 
			md:top-0 md:bottom-auto bottom-0 z-30 bg-flashWhite md:opacity-[0.92] xxs:h-[12vh]`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl xl:max-w-full mx-auto xl:mx-[1rem] px-[1.5rem]">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>

					<img
						src={logo}
						alt="logo"
						className="max-w-7xl sm:w-[90px] sm:h-[90px] md:md:w-[90px] md:h-[90px] w-[70px] h-[70px] object-contain"
					/>
				</Link>
				<ul className="list-none hidden md:flex flex-row md:gap-8 lg:gap-14 mt-2">
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`${
								active === nav.title ? "text-french" : "text-eerieBlack"
							} hover:text-taupe md:text-[24px] xmd:text-[30px] lg:text-[24px] font-black font-mova 
                uppercase tracking-tighter cursor-pointer nav-links`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				{/* mobile */}
				<div className="md:hidden flex flex-1 w-screen justify-end items-center">
					{toggle ? (
						<>
						<div
							className={`p-6 bg-flashWhite opacity-[0.9] fixed 
                bottom-[calc(68px+1rem)] right-0 w-full h-[45vh] menu ${
							toggle ? "menu-open" : "menu-close"
						}`}
						>
						
							<ul
								className="list-none flex flex-col mt-[0.4rem] 
                items-start justify-end"
							>
								{navLinks.map((nav) => (
									<li
										id={nav.id}
										key={nav.id}
										className={`${
											active === nav.title
												? "text-orange"
												: "text-eerieBlack"
										} text-[5vh] font-bold font-mova 
                      uppercase tracking-[1px] cursor-pointer`}
										onClick={() => {
											setToggle(!toggle);
											setActive(nav.title);
										}}
									>
										<a href={`#${nav.id}`}>{nav.title}</a>
									</li>
								))}
							</ul>
							
						</div>
					<div className="flex justify-end">
						<img
							src={close}
							alt="close"
							className="w-[22px] h-[22px] object-contain cursor-pointer mr-[15px]"
							onClick={() => setToggle(!toggle)}
						/>
					</div>
					</>
					) : (
						<img
							src={menu}
							alt="menu"
							className="sm:w-[62px] sm:h-[62px] w-[55x] h-[55px] 
							object-contain cursor-pointer"
							onClick={() => setToggle(!toggle)}
						/>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
