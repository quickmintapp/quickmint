import React, { useState, useContext } from "react";
import Button from "../../Button";
import AppContext from "./../../../context/AppContext";
import { ADD_LAYER, TOGGLE_ADD_LAYER_POPUP } from "../../../reducers/reducerActions";
import uuid from "react-uuid";

const AddLayer = () => {
	const { dispatch } = useContext(AppContext);
	const [layerName, setLayerName] = useState("");
	const [error, setError] = useState("");

	const handleAddLayer = () => {
		if (!layerName) {
			setError("Layer name cannot be empty.");
			return;
		}

		const layer = {
			id: uuid(),
			layerName,
			layerImages: [],
		};

		setError("");
		setLayerName("");
		dispatch({ type: ADD_LAYER, payload: layer });
		dispatch({ type: TOGGLE_ADD_LAYER_POPUP });
	};

	const handleIsPopupOpen = () => {
		// setLayerName(layerName);
		dispatch({ type: TOGGLE_ADD_LAYER_POPUP });
	};

	return (
		<div className={`bg-gray-50 w-1/2 rounded-lg p-8 flex flex-col items-center gap-y-2 m-auto`}>
			<div className="flex justify-end w-full">
				<p
					className="font-bold cursor-pointer"
					onClick={() => {
						handleIsPopupOpen();
					}}>
					X
				</p>
			</div>
			<div className="flex flex-col items-center gap-y-6">
				<div>
					<h2 className="text-2xl font-semibold">Add a Layer</h2>
				</div>
				<div>
					<div className="flex flex-col items-center gap-y-2">
						<label htmlFor="layerName">Layer Name</label>
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
					<Button btnText="Add Layer" onClick={() => handleAddLayer()} />
				</div>
			</div>
		</div>
	);
};

export default AddLayer;
