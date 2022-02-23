import React, { useState, useContext, useEffect } from "react";
import Button from "../../Button";
import AppContext from "../../../context/AppContext";
import Message from "../Message";
import ContractCard from "./ContractCard";
import Web3 from "web3";
console.log(Web3);


const SmartContract = () => {
	const { state } = useContext(AppContext);
	const selectedProject = state.user.selectedProject;
	const { tokenName, tokenSymbol, projectCID } = selectedProject;
	const [smartContractState, setSmartContractState] = useState({
		tokenName: tokenName || "",
		tokenSymbol: tokenSymbol || "",
		initialMintAmount: "",
		totalTokenSupply: "",
		tokenCost: "",
		projectCID: projectCID || "",
	});

	useEffect(() => {
		setSmartContractState({
			...smartContractState,
			tokenName: tokenName,
			tokenSymbol: tokenSymbol,
		});
	}, [selectedProject]);

	return (
		<div>
			<div>
				<div className="w-full border-b-2 border-b-black flex justify-between items-center pb-4 my-4">
					<h2 className="text-xl font-medium">Your Smart Contracts</h2>
				</div>
				<div>
					{(() => {
						if (state.user.address) {
							if (state.user.projects && state.user.projects.length > 0) {
								if (selectedProject) {
									if (selectedProject.contracts && selectedProject.contracts.length > 0) {
										return (
											<>
												<div className="grid grid-cols-4 gap-2">
													{selectedProject.contracts.map((c) => {
														return <ContractCard key={c.id} />;
													})}
												</div>
											</>
										);
									} else {
										return <Message message={"There are no contracts deployed."} />;
									}
								}
							} else {
								return <Message message={"There are no projects selected."} />;
							}
						} else {
							return <Message message={"Connect to wallet first."} />;
						}
					})()}
				</div>
			</div>
			<div>
				<div className="w-full border-b-2 border-b-black flex justify-between items-center pb-4 my-4">
					<h2 className="text-xl font-medium">Deploy a new Smart Contract</h2>
				</div>
				{state.user.address ? (
					<div>
						<div className="flex flex-col items-center gap-y-4 p-6">
							<div className="flex flex-col gap-y-1 w-2/3">
								<label className="font-medium" htmlFor="tokenName">
									Token Name
								</label>
								<input
									id="tokenName"
									type="text"
									className="rounded-lg p-2 outline-none focus:bg-gray-50"
									placeholder="Doodles"
									value={smartContractState.tokenName}
									onChange={(e) =>
										setSmartContractState({ ...smartContractState, tokenName: e.target.value })
									}
								/>
							</div>
							<div className="flex flex-col gap-y-1 w-2/3">
								<label className="font-medium" htmlFor="tokenSymbol">
									Token Symbol
								</label>
								<input
									id="tokenSymbol"
									type="text"
									className="rounded-lg p-2 outline-none focus:bg-gray-50"
									placeholder="DOODLE"
									value={smartContractState.tokenSymbol}
									onChange={(e) =>
										setSmartContractState({ ...smartContractState, tokenSymbol: e.target.value })
									}
								/>
							</div>
							<div className="flex flex-col gap-y-1 w-2/3">
								<label className="font-medium" htmlFor="initialMintAmount">
									Initial Mint Amount
								</label>
								<input
									id="initialMintAmount"
									type="number"
									className="rounded-lg p-2 outline-none focus:bg-gray-50"
									placeholder="100"
									value={smartContractState.initialMintAmount}
									onChange={(e) =>
										setSmartContractState({
											...smartContractState,
											initialMintAmount: e.target.value,
										})
									}
								/>
							</div>
							<div className="flex flex-col gap-y-1 w-2/3">
								<label className="font-medium" htmlFor="totalTokenSupply">
									Total Token Supply
								</label>
								<input
									id="totalTokenSupply"
									type="number"
									className="rounded-lg p-2 outline-none focus:bg-gray-50"
									placeholder="10000"
									value={smartContractState.totalTokenSupply}
									onChange={(e) =>
										setSmartContractState({
											...smartContractState,
											totalTokenSupply: e.target.value,
										})
									}
								/>
							</div>
							<div className="flex flex-col gap-y-1 w-2/3">
								<label className="font-medium" htmlFor="tokenCost">
									Token Cost (in Eth)
								</label>
								<input
									id="tokenCost"
									type="number"
									className="rounded-lg p-2 outline-none focus:bg-gray-50"
									placeholder="0.1"
									value={smartContractState.tokenCost}
									onChange={(e) =>
										setSmartContractState({ ...smartContractState, tokenCost: e.target.value })
									}
								/>
							</div>
							<div className="flex flex-col gap-y-1 w-2/3">
								<label className="font-medium" htmlFor="projectCID">
									CID
								</label>
								<input
									id="projectCID"
									type="text"
									className="rounded-lg p-2 outline-none focus:bg-gray-50"
									placeholder="0x7B502C3A1F48C8609AE212CDFB639DEE39673F5E"
									value={smartContractState.projectCID}
									onChange={(e) =>
										setSmartContractState({ ...smartContractState, projectCID: e.target.value })
									}
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
				) : (
					<Message message={"Connect to wallet first."} />
				)}
			</div>
		</div>
	);
};

export default SmartContract;
