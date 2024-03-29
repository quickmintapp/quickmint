import React, { useContext } from "react";
import Button from "../Button";
import AppContext from "../../context/AppContext";
import { connectWallet } from "./Wallet";
import { NFTS_GENERATOR_TAB, SMART_CONTRACTS_TAB } from "../../constants/constants";
import SelectProject from "./SelectProject";

const MainNav = () => {
	const { state} = useContext(AppContext);
	return (
		<div>
			<div className="flex justify-between items-center pb-8">
				<div className="flex gap-x-1 items-center">
					<h1 className="font-bold text-2xl">{state.app.selectedTab.toString()}</h1>
					<div>
						{(() => {
							if (
								state.app.selectedTab === NFTS_GENERATOR_TAB ||
								state.app.selectedTab === SMART_CONTRACTS_TAB
							) {
								return <SelectProject />;
							}
						})()}
					</div>
				</div>
				<div>
					{state.user.address ? (
						<div className="text-white rounded-lg font-medium">
							<span className="bg-comp-100 p-2 rounded-l-lg font-normal">{`${
								state.user.walletName ? state.user.walletName : ""
							}`}</span>
							<span className="bg-comp-200 p-2 rounded-r-lg">
								{`${state.user.address.slice(0, 5)}...${state.user.address.slice(37, -1)}`}
							</span>
						</div>
					) : (
						<Button btnText={"Connect wallet"} onClick={() => connectWallet()} />
					)}
				</div>
			</div>
		</div>
	);
};

export default MainNav;
