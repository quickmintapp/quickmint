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
							<h2 className="text-xl font-medium">Upload Layers</h2>
							<div>
								<Button
									btnText="Add a Layer"
									classes="bg-bg-200 text-black hover:bg-bg-200 hover:drop-shadow-lg font-medium m-2"
									onClick={() => handleIsPopupOpen()}
								/>
							</div>
						</div>

						{/* all the layers */}

						<div className="flex flex-col justify-center items-start gap-y-4 py-4">
							{state.nftGen.layers.length > 0 ? (
								layers.map((layer) => {
									return (
										<Layer
											key={layer.id}
											id={layer.id}
											layerName={layer.layerName}
											layerImages={layer.layerImages}
										/>
									);
								})
							) : (
								<Message message="There are no layers." />
							)}
						</div>
					</div>

					{/* generate button & uploading to pinata */}

					<div>
						<div className="w-full flex justify-center items-center gap-x-4">
							<Button
								btnText="Generate"
								classes="bg-bg-200 text-black hover:bg-bg-200 hover:drop-shadow-lg font-medium p-4 text-xl"
								disabled={layers.length > 0 ? false : true}
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
