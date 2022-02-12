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
import { DashboardIcon } from "@radix-ui/react-icons";

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
			<div className="flex flex-col gap-y-2 text-base">
				<div
					className={`p-2 border-2 border-transparent ${
						selectedTab === DASHBOARD_TAB ? "bg-bg-100" : "border-bg-100"
					} rounded-lg hover:bg-bg-100 hover:cursor-pointer`}
					onClick={() => handleSelectedTabChange(DASHBOARD_TAB)}>
					<div className="flex justify-between items-center">
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
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
						{DASHBOARD_TAB}
					</div>
				</div>
				<div
					className={`p-2 border-2 border-transparent ${
						selectedTab === NFTS_GENERATOR_TAB ? "bg-bg-100" : "border-bg-100"
					} rounded-lg hover:bg-bg-100 hover:cursor-pointer`}
					onClick={() => handleSelectedTabChange(NFTS_GENERATOR_TAB)}>
					<div className="flex justify-between items-center">
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
								d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
							/>
						</svg>
						{NFTS_GENERATOR_TAB}
					</div>
				</div>
				<div
					className={`p-2 border-2 border-transparent ${
						selectedTab === SMART_CONTRACTS_TAB ? "bg-bg-100" : "border-bg-100"
					} rounded-lg hover:bg-bg-100 hover:cursor-pointer`}
					onClick={() => handleSelectedTabChange(SMART_CONTRACTS_TAB)}>
					<div className="flex justify-between items-center">
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
								d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
							/>
						</svg>
						{SMART_CONTRACTS_TAB}
					</div>
				</div>
				<div
					className={`p-2 border-2 border-transparent ${
						selectedTab === ACCOUNT_TAB ? "bg-bg-100" : "border-bg-100"
					} rounded-lg hover:bg-bg-100 hover:cursor-pointer`}
					onClick={() => handleSelectedTabChange(ACCOUNT_TAB)}>
					<div className="flex justify-between items-center">
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
								d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						{ACCOUNT_TAB}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
