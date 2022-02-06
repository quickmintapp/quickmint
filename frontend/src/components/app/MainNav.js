import React from "react";
import Button from "../Button";

const MainNav = () => {

	return (
		<div>
			<div className="flex justify-between items-center pb-8">
				<div>
					<h1 className="font-bold text-2xl">Dashboard</h1>
				</div>
				<div>
					<Button btnText={"Connect wallet"} />
				</div>
			</div>
		</div>
	);
};

export default MainNav;
