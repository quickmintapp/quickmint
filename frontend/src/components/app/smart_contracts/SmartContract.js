import React from "react";
import Button from "../../Button";

const SmartContract = () => {
	return (
		<div>
			<div className="w-full border-b-2 border-b-black flex justify-between items-center">
				<h2 className="text-xl font-medium">Deploy Smart Contract</h2>
			</div>
			<div>
				<div className="flex flex-col items-center gap-y-4 p-6">
					<div className="flex flex-col gap-y-1 w-2/3">
						<label className="font-medium" htmlFor="tokenName">
							Token Name
						</label>
						<input
							type="text"
							className="rounded-lg p-2 outline-none focus:bg-gray-50"
							placeholder="Doodles"
						/>
					</div>
					<div className="flex flex-col gap-y-1 w-2/3">
						<label className="font-medium" htmlFor="tokenSymbol">
							Token Symbol
						</label>
						<input
							type="text"
							className="rounded-lg p-2 outline-none focus:bg-gray-50"
							placeholder="DOODLE"
						/>
					</div>
					<div className="flex flex-col gap-y-1 w-2/3">
						<label className="font-medium" htmlFor="initialMintAmount">
							Initial Mint Amount
						</label>
						<input
							type="number"
							className="rounded-lg p-2 outline-none focus:bg-gray-50"
							placeholder="100"
						/>
					</div>
					<div className="flex flex-col gap-y-1 w-2/3">
						<label className="font-medium" htmlFor="totalTokenSupply">
							Total Token Supply
						</label>
						<input
							type="number"
							className="rounded-lg p-2 outline-none focus:bg-gray-50"
							placeholder="10000"
						/>
					</div>
					<div className="flex flex-col gap-y-1 w-2/3">
						<label className="font-medium" htmlFor="tokenCost">
							Token Cost (in Eth)
						</label>
						<input
							type="text"
							className="rounded-lg p-2 outline-none focus:bg-gray-50"
							placeholder="0.01"
						/>
					</div>
					{/* you can include the royalties, payout wallet address, or cid hash of images*/}
				</div>
				<div className="flex justify-center items-center">
					<Button
						btnText="Deploy"
						classes="bg-bg-200 text-black hover:bg-bg-200 hover:drop-shadow-lg font-medium text-xl p-4 m-2"
					/>
				</div>
			</div>
		</div>
	);
};

export default SmartContract;
