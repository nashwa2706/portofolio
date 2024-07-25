import React from "react";

const Navbar = () => {
	const handleScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			window.scrollTo({
				top: element.offsetTop,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="flex flex-row w-full justify-between px-5 py-5 shadow-lg bg-white text-gray-800 font-bold fixed top-0 left-0 z-50">
			<h2 className="text-lg">Nashwa Salma</h2>
			<div className="flex flex-row gap-8">
				<a
					href="#"
					onClick={() => handleScroll("home")}
					className="hover:text-gray-400"
				>
					Home
				</a>
				<a
					href="#summary"
					onClick={() => handleScroll("summary")}
					className="hover:text-gray-400"
				>
					Summary
				</a>
				<a
					href="#project"
					onClick={() => handleScroll("project")}
					className="hover:text-gray-400"
				>
					Project
				</a>
				<a
					href="#education"
					onClick={() => handleScroll("education")}
					className="hover:text-gray-400"
				>
					Education
				</a>
			</div>
		</div>
	);
};

export default Navbar;
