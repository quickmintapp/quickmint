import React, { useContext } from "react";
import Layer from "./Layer";
import Button from "../../Button";
import Message from "../Message";
import AppContext from "./../../../context/AppContext";
import AddLayer from "./AddLayer";
import EditLayer from "./EditLayer";
import { TOGGLE_ADD_LAYER_POPUP } from "../../../reducers/reducerActions";
import uuid from "react-uuid";

const NftGenerator = () => {
	const { state, dispatch } = useContext(AppContext);
	const { layers, isPopupOpen, isEditPopupOpen } = state.nftGen;
	// const uploadedFiles = state.layers ? state.layers.map(layer => {
	// 	console.log(layer);
	// }) : "";

	const handleIsPopupOpen = () => {
		dispatch({ type: TOGGLE_ADD_LAYER_POPUP });
	};

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
								<select className="outline-none bg-bg-200 shadow-md rounded-lg p-1">
									{state.user.projects.map((p) => {
										return (
											<option key={p.id} className="" value={`${p.projectName}`}>
												{p.projectName}
											</option>
										);
									})}
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
							{state.user.address ? (
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
								) : (
									<Message message="There are no layers." />
								)
							) : (
								<Message message="Connect to wallet first." />
							)}
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
