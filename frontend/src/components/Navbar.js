import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
	return (
		<nav className="p-10 flex justify-around items-center">
			<div>
				<Link to="/">
					<h1 className="text-3xl font-semibold">
						Quick<span className="">Mint</span>
					</h1>
				</Link>
			</div>
			<div className="flex justify-center items-center gap-x-8">
				<div className="cursor-pointer underline-offset-4 hover:underline">About</div>
				<div className="cursor-pointer underline-offset-4 hover:underline">Pricing</div>
				<Link to="/app">
					<Button btnText={"Enter App"} />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
