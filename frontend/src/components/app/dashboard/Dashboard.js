import React, { useState, useContext } from "react";
import NftProjectCard from "./NftProjectCard";
import AppContext from "../../../context/AppContext";
import Message from "../Message";
import { CREATE_NEW_PROJECT } from "../../../reducers/reducerActions";
import DashboardModal from "./DashboardModal";

const Dashboard = () => {
	const { state, dispatch } = useContext(AppContext);
	const [dashboardModalPopup, setDashboardModalPopup] = useState({
		action: "",
		showModal: false,
		project: {},
	});

	return (
		<div className="relative">
			{dashboardModalPopup.showModal ? (
				<div className="w-1/2 m-auto bg-gray-50 rounded-lg absolute inset-x-0 z-10">
					<DashboardModal
						setDashboardModalPopup={setDashboardModalPopup}
						dashboardModalPopup={dashboardModalPopup}
					/>
				</div>
			) : (
				""
			)}
			<div className={`${dashboardModalPopup.showModal ? "opacity-25" : ""}`}>
				<div className="w-full border-b-2 border-b-black py-4">
					<h2 className="text-xl font-medium">Your NFT Projects</h2>
				</div>
				{state.user.address ? (
					<>
						<div className="grid grid-cols-4 gap-4 py-4">
							{state.user.projects.map((project) => {
								return (
									<NftProjectCard
										key={project.id}
										project={project}
										setDashboardModalPopup={setDashboardModalPopup}
										dashboardModalPopup={dashboardModalPopup}
									/>
								);
							})}

							<div className="p-6 bg-bg-200 rounded-lg flex justify-center items-center drop-shadow-lg">
								<div
									className="p-2 my-10 font-medium bg-gray-50 px-4 rounded-full cursor-pointer hover:drop-shadow-xl"
									onClick={() => {
										setDashboardModalPopup({
											...dashboardModalPopup,
											action: "ADD",
											showModal: true,
										});
									}}>
									<p>+</p>
								</div>
							</div>
						</div>
					</>
				) : (
					<div className="py-4">
						<Message message={"Connect to wallet first."} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
