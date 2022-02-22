import React from "react";

const ContractCard = ({ contract }) => {
	const contractTokenAddress = (contract && contract.contractTokenAddress) || "";
	return (
		<div className="bg-bg-200 p-4 rounded-lg flex flex-col items-center gap-y-2 drop-shadow-lg cursor-pointer hover:drop-shadow-xl">
			<div className="self-end flex gap-x-1">
				<div onClick={() => {}}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
			</div>
			<div className="p-2 px-4 rounded-full bg-gray-50 drop-shadow-md">
				<p>{"0xE5D...1Fd3" || "0xe5d4cced6d3424074c2936d9aca3077119f01fd3"}</p>
			</div>
			<div className="text-center flex flex-col items-center gap-y-1 py-4">
				<h3 className="text-xl font-medium">tokenName</h3>
			</div>
		</div>
	);
};

export default ContractCard;
