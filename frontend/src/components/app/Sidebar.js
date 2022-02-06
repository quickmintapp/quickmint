import React, { useState, useContext, useEffect } from "react";
import {
	DASHBOARD_TAB,
	NFTS_GENERATOR_TAB,
	SMART_CONTRACTS_TAB,
	ACCOUNT_TAB,
} from "../../constants/constants";
import AppContext from "../../context/AppContext";
import { CHANGE_SELECTED_TAB } from "../../reducers/reducerActions";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const { state, dispatch } = useContext(AppContext);
	const [selectedTab, setSelectedTab] = useState(state.app.selectedTab);

	const handleSelectedTabChange = (tab) => {
		setSelectedTab(tab);
		dispatch({ type: CHANGE_SELECTED_TAB, payload: tab });
	};

	return (
		<div className="w-2/12 bg-gray-50 flex flex-col p-4">
			<div className="p-4 py-8 flex flex-col justify-center items-center gap-y-2">
				<div className="bg-bg-100 p-4 rounded-full px-6">Q{/* <img src="" alt="logo" /> */}</div>
				<Link to="/">
					<p className="font-medium text-xl">QuickMint</p>
				</Link>
			</div>
			<div className="flex flex-col gap-y-2">
				<div
					className={`p-2 border-2 border-transparent ${
						selectedTab === DASHBOARD_TAB ? "bg-bg-100" : "border-bg-100"
					} rounded-lg hover:bg-bg-100 hover:cursor-pointer`}
					onClick={() => handleSelectedTabChange(DASHBOARD_TAB)}>
					{DASHBOARD_TAB}
				</div>
				<div
					className={`p-2 border-2 border-transparent ${
						selectedTab === NFTS_GENERATOR_TAB ? "bg-bg-100" : "border-bg-100"
					} rounded-lg hover:bg-bg-100 hover:cursor-pointer`}
					onClick={() => handleSelectedTabChange(NFTS_GENERATOR_TAB)}>
					{NFTS_GENERATOR_TAB}
				</div>
				<div
					className={`p-2 border-2 border-transparent ${
						selectedTab === SMART_CONTRACTS_TAB ? "bg-bg-100" : "border-bg-100"
					} rounded-lg hover:bg-bg-100 hover:cursor-pointer`}
					onClick={() => handleSelectedTabChange(SMART_CONTRACTS_TAB)}>
					{SMART_CONTRACTS_TAB}
				</div>
				<div
					className={`p-2 border-2 border-transparent ${
						selectedTab === ACCOUNT_TAB ? "bg-bg-100" : "border-bg-100"
					} rounded-lg hover:bg-bg-100 hover:cursor-pointer`}
					onClick={() => handleSelectedTabChange(ACCOUNT_TAB)}>
					{ACCOUNT_TAB}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
