import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./dashboard/Dashboard";
import NftGenerator from "./nft_generator/NftGenerator";
import SmartContract from "./smart_contracts/SmartContract";
import Account from "./account/account";
import MainNav from "./MainNav";
import AppContext from "../../context/AppContext";
import {
	DASHBOARD_TAB,
	NFTS_GENERATOR_TAB,
	SMART_CONTRACTS_TAB,
	ACCOUNT_TAB,
} from "../../constants/constants";

const Main = () => {
	const { state } = useContext(AppContext);
	return (
		<div className="flex items-stretch min-h-screen">
			<Sidebar />
			<div className="w-10/12 p-8">
				<MainNav />
				{(() => {
					if (state.app.selectedTab === DASHBOARD_TAB) {
						return <Dashboard />;
					} else if (state.app.selectedTab === NFTS_GENERATOR_TAB) {
						return <NftGenerator />;
					} else if (state.app.selectedTab === SMART_CONTRACTS_TAB) {
						return <SmartContract />;
					} else if (state.app.selectedTab === ACCOUNT_TAB) {
						return <Account />;
					} else {
						return <Dashboard />;
					}
				})()}
			</div>
		</div>
	);
};

export default Main;
