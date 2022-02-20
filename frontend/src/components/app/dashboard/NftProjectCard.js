import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { REMOVE_PROJECT } from "../../../reducers/reducerActions";

const NftProjectCard = ({ project, setDashboardModalPopup, dashboardModalPopup }) => {
	const { tokenSymbol, tokenName, id, projectName } = project;
	const { state, dispatch } = useContext(AppContext);
	return (
		<div className="bg-bg-200 p-4 rounded-lg flex flex-col items-center gap-y-2 drop-shadow-lg cursor-pointer hover:drop-shadow-xl">
			<div className="self-end flex gap-x-1">
				<div
					onClick={() => {
						setDashboardModalPopup({
							...dashboardModalPopup,
							action: "EDIT",
							showModal: true,
							project: { ...project }, //project id
						});
					}}>
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
							d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
						/>
					</svg>
				</div>
				<div
					onClick={() => {
						dispatch({ type: REMOVE_PROJECT, payload: { id } });
					}}>
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
							d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
			</div>
			<div className="p-2 px-4 rounded-full bg-gray-50 drop-shadow-md">
				<p>{tokenSymbol.toUpperCase()}</p>
			</div>
			<div className="text-center flex flex-col items-center gap-y-1">
				<h3 className="text-xl font-medium">{tokenName}</h3>
				<p>{projectName}</p>
			</div>
		</div>
	);
};

export default NftProjectCard;
