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
      bottom-0 lg:top-0 z-20 bg-flashWhite sm:opacity-[0.97] lg:h-[80px] xxs:h-[12vh]`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
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
						className="sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] object-contain"
					/>
          
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`${
								active === nav.title ? "text-french" : "text-eerieBlack"
							} hover:text-taupe text-[21px] font-black font-mova 
                uppercase tracking-tighter cursor-pointer nav-links`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				{/* mobile */}
				<div className="sm:hidden flex flex-1 w-screen justify-end items-center">
					{toggle ? (
						<div
							className={`bg-flashWhite fixed 
                bottom-12 left-0 h-[40vh] w-screen z-30 opacity-[0.85] menu ${
							toggle ? "menu-open" : "menu-close"
						}`}
						>

              {/* Open Mobile Menu */}
							

							<ul
								className="text-[45px] list-none items-start justify-end mt-[0rem]"
							>
								{navLinks.map((nav) => (
									<li
										
										className={`pl-10 pr-10 font-bold font-mova 
                      uppercase tracking-[1px] cursor-pointer
                      ${ active === nav.title
												? "text-orange"
												: "text-eerieBlack"
										}`}
										onClick={() => {
											setToggle(!toggle);
											setActive(nav.title);
										}}
                    id={nav.id}
										key={nav.id}
									>
										<a href={`#${nav.id}`}>{nav.title}</a>
									</li>
								))}
							</ul>
              <div className="flex justify-end w-full absolute right-7 -bottom-7">
								<img
									src={close}
									alt="closeMobileMenuButton"
									className="w-[25px] h-[25px] object-contain cursor-pointer"
									onClick={() => setToggle(!toggle)}
								/>
							</div>
						</div>
					) : (
						<img
							src={menu}
							alt="menu"
							className="w-[34px] h-[34px] object-contain cursor-pointer"
							onClick={() => setToggle(!toggle)}
						/>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
