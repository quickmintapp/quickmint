import React from "react";

const NftProjectCard = ({ tokenSymbol, tokenName, totalMinted }) => {
	return (
		<div className="w-1/4 bg-bg-200 p-8 rounded-lg flex flex-col items-center gap-y-2 drop-shadow-lg cursor-pointer hover:drop-shadow-xl">
			<div className="p-2 py-4 rounded-full bg-gray-50 drop-shadow-md">
				{/* symbol of the token */}
				<p>{tokenSymbol}</p>
			</div>
			<div className="text-center flex flex-col items-center gap-y-1">
				<h3 className="text-xl font-medium">{tokenName}</h3>
				<p>{totalMinted} tokens minted</p>
			</div>
		</div>
	);
};

export default NftProjectCard;
