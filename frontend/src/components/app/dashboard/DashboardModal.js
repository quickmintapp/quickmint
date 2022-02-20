import React, { useState, useContext } from "react";
import Button from "../../Button";
import AppContext from "../../../context/AppContext";
import { CREATE_NEW_PROJECT, EDIT_PROJECT } from "../../../reducers/reducerActions";

const DashboardModal = ({ dashboardModalPopup, setDashboardModalPopup }) => {
	const { state, dispatch } = useContext(AppContext);
	const [projectInfo, setProjectInfo] = useState(
		dashboardModalPopup.project || {
			projectName: "",
			tokenName: "",
			tokenSymbol: "",
		}
	);
	const [inputErrorMessage, setInputErrorMessage] = useState("");

	return (
		<div className="flex flex-col justify-center items-center p-4 shadow-md">
			<div
				className="self-end cursor-pointer"
				onClick={() => {
					setDashboardModalPopup({ ...dashboardModalPopup, showModal: false });
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
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
			<div className="flex flex-col gap-y-4">
				<div className="self-center">
					<h1 className="text-2xl font-medium">
						{dashboardModalPopup.action === "ADD"
							? "Create a new project"
							: dashboardModalPopup.action === "EDIT"
							? "Edit project"
							: ""}
					</h1>
				</div>
				<div className="flex flex-col gap-y-4 p-2">
					<div className="flex flex-col gap-y-1">
						<label htmlFor="projectName">Project Name</label>
						<input
							type="text"
							value={projectInfo.projectName}
							className="p-1 rounded-lg bg-gray-200 outline-none focus:bg-gray-100"
							id="projectName"
							onChange={(e) => setProjectInfo({ ...projectInfo, projectName: e.target.value })}
						/>
					</div>
					<div className="flex flex-col gap-y-1">
						<label htmlFor="tokenName">Token Name</label>
						<input
							type="text"
							value={projectInfo.tokenName}
							className="p-1 rounded-lg bg-gray-200 outline-none focus:bg-gray-100"
							id="tokeName"
							onChange={(e) => setProjectInfo({ ...projectInfo, tokenName: e.target.value })}
						/>
					</div>
					<div className="flex flex-col gap-y-1">
						<label htmlFor="tokenSymbol">Token Symbol</label>
						<input
							type="text"
							value={projectInfo.tokenSymbol}
							className="p-1 rounded-lg bg-gray-200 outline-none focus:bg-gray-100"
							id="tokeSymbol"
							onChange={(e) => setProjectInfo({ ...projectInfo, tokenSymbol: e.target.value })}
						/>
					</div>
				</div>
				<div className="self-center flex flex-col">
					<Button
						btnText={(() => {
							if (dashboardModalPopup.action === "ADD") {
								return "Create";
							} else if (dashboardModalPopup.action === "EDIT") {
								return "Edit";
							} else {
								return "";
							}
						})()}
						onClick={() => {
							if (dashboardModalPopup.action === "ADD") {
								if (Object.values(projectInfo).some((o) => o === "")) {
									setInputErrorMessage("Please enter all values");
									return;
								}
								dispatch({ type: CREATE_NEW_PROJECT, payload: { projectInfo } });
								setInputErrorMessage("");
								setProjectInfo({});
								setDashboardModalPopup({ ...dashboardModalPopup, showModal: false });
								return;
							} else if (dashboardModalPopup.action === "EDIT") {
								if (Object.values(projectInfo).some((o) => o === "")) {
									setInputErrorMessage("Please enter all values");
									return;
								}
								dispatch({
									type: EDIT_PROJECT,
									payload: { projectInfo, id: dashboardModalPopup.project.id },
								});
								setInputErrorMessage("");
								setProjectInfo({});
								setDashboardModalPopup({
									...dashboardModalPopup,
									showModal: false,
								});
								return;
							}
							return;
						}}
						classes={"self-center order-last"}
					/>
					<p>{inputErrorMessage || ""}</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardModal;
