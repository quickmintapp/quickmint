import React, { useContext } from "react";
import NftProjectCard from "./NftProjectCard";
import AppContext from "../../../context/AppContext";

const Dashboard = () => {
	const { state } = useContext(AppContext);

	return (
		<div>
			<div className="w-full border-b-2 border-b-black">
				<h2 className="text-xl font-medium">Your NFT Projects</h2>
			</div>
			<div className="flex justify-center items-center flex-wrap py-8 gap-x-4 gap-y-4">
				<NftProjectCard tokenSymbol="SKHD" tokenName="Sikh Doodles" totalMinted="100" />
				{/* add card */}
				<div className="w-1/4 p-8 bg-bg-200 rounded-lg flex justify-center items-center gap-y-2 drop-shadow-lg">
					<div className="p-2 my-10 font-medium bg-gray-50 px-4 rounded-full cursor-pointer hover:drop-shadow-xl">
						<p>+</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
