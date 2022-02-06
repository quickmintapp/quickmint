import React, { useState, useContext } from "react";
import Button from "../../Button";
import AppContext from "./../../../context/AppContext";
import { EDIT_LAYER, TOGGLE_EDIT_LAYER_POPUP } from "../../../reducers/reducerActions";
import uuid from "react-uuid";

const EditLayer = () => {
	const { state, dispatch } = useContext(AppContext);
	const { layers, currentEditLayer } = state.nftGen;
	const [layerName, setLayerName] = useState(currentEditLayer.layerName);
	const [error, setError] = useState("");

	const handleEditLayer = () => {
		if (!layerName) {
			setError("Layer name cannot be empty.");
			return;
		}
		const layer = {
			id: currentEditLayer.id,
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
					X
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
							className="p-2 rounded-lg outline-none bg-gray-100"
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
