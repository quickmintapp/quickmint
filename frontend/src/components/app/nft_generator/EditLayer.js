import React, { useState, useContext } from "react";
import Button from "../../Button";
import AppContext from "./../../../context/AppContext";
import { EDIT_LAYER, TOGGLE_EDIT_LAYER_POPUP } from "../../../reducers/reducerActions";

const EditLayer = () => {
	const { state, dispatch } = useContext(AppContext);
	const { currentEditLayer } = state.user.selectedProject.nftGen;
	const [layerName, setLayerName] = useState(currentEditLayer.layerName);
	const [error, setError] = useState("");

	const handleEditLayer = () => {
		if (!layerName) {
			setError("Layer name cannot be empty.");
			return;
		}
		const layer = {
			id: currentEditLayer.layerId,
			layerName,
		};
		setError("");
		setLayerName("");
		dispatch({ type: EDIT_LAYER, payload: layer });
		dispatch({ type: TOGGLE_EDIT_LAYER_POPUP });
	};

	const handleIsEditPopupOpen = () => {
		dispatch({ type: TOGGLE_EDIT_LAYER_POPUP });
	};

	return (
		<div className={`bg-gray-50 w-1/2 rounded-lg p-8 flex flex-col items-center gap-y-2 m-auto`}>
			<div className="flex justify-end w-full">
				<p
					className="font-bold cursor-pointer"
					onClick={() => {
						handleIsEditPopupOpen();
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
				</p>
			</div>
			<div className="flex flex-col items-center gap-y-6">
				<div>
					<h2 className="text-2xl font-semibold">Edit Layer</h2>
				</div>
				<div>
					<div className="flex flex-col items-center gap-y-2">
						<label htmlFor="layerName">New Layer Name</label>
						<input
							type="text"
							value={layerName}
							onChange={(e) => setLayerName(e.target.value)}
							className="p-2 rounded-lg outline-none bg-gray-200"
							required
						/>
						<p className="text-base text-comp-100">{error ? error : ""}</p>
					</div>
				</div>
				<div>
					<Button btnText="Edit Layer" onClick={() => handleEditLayer()} />
				</div>
			</div>
		</div>
	);
};

export default EditLayer;
