import React, { useEffect, useContext } from "react";
import Layer from "./Layer";
import Button from "../../Button";
import Message from "../Message";
import AppContext from "./../../../context/AppContext";
import AddLayer from "./AddLayer";
import EditLayer from "./EditLayer";
import {
	TOGGLE_ADD_LAYER_POPUP,
	SELECT_PROJECT,
	SELECT_PROJECT_INIT,
} from "../../../reducers/reducerActions";
import uuid from "react-uuid";

const NftGenerator = () => {
	const { state, dispatch } = useContext(AppContext);
	const { selectedProject } = state.user;
	const { layers, isPopupOpen, isEditPopupOpen } = state.nftGen;

	const handleIsPopupOpen = () => {
		dispatch({ type: TOGGLE_ADD_LAYER_POPUP, payload: selectedProject });
	};

	useEffect(() => {
		if (state.user.projects.length > 0) {
			dispatch({ type: SELECT_PROJECT, payload: { id: state.user.projects[0].id } });
		} else if (state.user.projects.length === 0) {
			dispatch({ type: SELECT_PROJECT_INIT });
		}
	}, [state.user.projects, dispatch]);

	return (
		<div className="flex flex-col">
			{/* uploading the layers */}

			{(() => {
				if (isPopupOpen) {
					return <AddLayer />;
				} else if (isEditPopupOpen) {
					return <EditLayer />;
				}
			})()}
			{!(isPopupOpen || isEditPopupOpen) ? (
				<div>
					<div>
						<div className="w-full border-b-2 border-b-black flex justify-between items-center">
							<div className="flex gap-x-1 place-items-center">
								<h2 className="text-xl font-medium">Select Project:</h2>
								<select
									className="outline-none bg-bg-200 shadow-md rounded-lg p-1"
									value={selectedProject && selectedProject.id}
									onChange={(e) => {
										dispatch({
											type: SELECT_PROJECT,
											payload: { id: e.target.value },
										});
									}}>
									{(() => {
										if (state.user.projects.length === 0) {
											return <option value="No Projects">--NO PROJECTS--</option>;
										} else {
											return state.user.projects.map((p) => {
												return (
													<option key={p.id} value={p.id}>
														{p.projectName}
													</option>
												);
											});
										}
									})()}
								</select>
							</div>
							<div>
								<Button
									btnText="Add a Layer"
									classes="bg-bg-200 text-black hover:bg-bg-200 hover:drop-shadow-lg font-medium m-2"
									onClick={() => handleIsPopupOpen()}
									disabled={state.user.address ? false : true}
								/>
							</div>
						</div>

						{/* all the layers */}

						<div className="flex flex-col justify-center items-start gap-y-4 py-4">
							{(() => {
								if (state.user.address) {
									if (state.user.projects.length > 0) {
										return state.nftGen.layers.length > 0 ? (
											layers.map((layer) => {
												return (
													<Layer
														key={uuid()}
														layerId={layer.layerId}
														layerName={layer.layerName}
														layerImages={layer.layerImages}
													/>
												);
											})
										) : (
											<Message message="There are no layers." />
										);
									} else if (selectedProject === "--NO PROJECTS--") {
										return <Message message="There are no projects selected." />;
									}
								} else {
									return <Message message="Connect to wallet first." />;
								}
							})()}
							{/* {state.user.address ? (
								state.nftGen.layers.length > 0 ? (
									layers.map((layer) => {
										return (
											<Layer
												key={uuid()}
												layerId={layer.layerId}
												layerName={layer.layerName}
												layerImages={layer.layerImages}
											/>
										);
									})
								) : !state.user.projects.length === 0 ? (
									<Message message="There are no layers." />
								) : (
									
								)
							) : (
								
							)} */}
						</div>
					</div>

					{/* generate button & uploading to pinata */}

					<div>
						<div className="w-full flex justify-center items-center gap-x-4">
							<Button
								btnText="Generate"
								classes="bg-bg-200 text-black hover:bg-bg-200 hover:drop-shadow-lg font-medium p-4 text-xl"
								disabled={state.user.address && layers.length > 1 ? false : true}
							/>
							<Button
								btnText="Upload to IPFS"
								classes="bg-bg-200 text-black hover:bg-bg-200 hover:drop-shadow-lg font-medium p-4 text-xl"
								disabled={true}
							/>
						</div>
						<div>
							{/* here will be the loading information, like  */}
							{/* it shows that generating images, etc */}
							{/* after it genertes, it should show, download images, link */}
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default NftGenerator;
