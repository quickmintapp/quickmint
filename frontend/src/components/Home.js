import React from "react";
import dashboard from "../assets/images/dashboard.png";

const Home = () => {
	return (
		<div className="flex flex-col">
			{/* main element */}
			<div className="w-10/12 self-center text-center p-14 flex flex-col gap-y-4">
				<h1 className="text-6xl font-bold">NFT projects made easy!</h1>
				<p>Deploy your NFT projects in as fast as 5 minutes.</p>
			</div>
			<div className="flex justify-center bg-bg-100 items-center divide-x">
				<div className="p-8 bg-bg-200 font-medium text-xl rounded-l-lg">Generating the NFTs</div>
				<div className="p-8 bg-[#A5E6F3] font-medium text-xl">Uploading to IPFS</div>
				<div className="p-8 bg-[#A5E6F3] font-medium text-xl rounded-r-lg">
					Deploying smart contract
				</div>
			</div>
			<div className="w-8/12 border-4 border-black rounded-lg self-center my-10">
				<img src={dashboard} alt="dashboard" />
			</div>
			<div
				id="about"
				className="w-10/12 self-center py-8 flex flex-col gap-y-8 items-center text-center">
				<div className="w-1/2 space-y-3">
					<h2 className="text-2xl font-semibold">Generating the NFTs</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quaerat reiciendis
						veniam sunt ea modi distinctio saepe suscipit ex mollitia veritatis, facere est eligendi
						ipsa.
					</p>
				</div>
				<div className="w-1/2 space-y-3">
					<h2 className="text-2xl font-semibold">Uploading to IPFS</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quaerat reiciendis
						veniam sunt ea modi distinctio saepe suscipit ex mollitia veritatis, facere est eligendi
						ipsa.
					</p>
				</div>
				<div className="w-1/2 space-y-3">
					<h2 className="text-2xl font-semibold"> Deploying smart contract</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quaerat reiciendis
						veniam sunt ea modi distinctio saepe suscipit ex mollitia veritatis, facere est eligendi
						ipsa.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
