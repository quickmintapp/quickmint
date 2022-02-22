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
			layerId: uuid(),
			layerName,
			layerImages: [],
		};

		setError("");
		setLayerName("");
		dispatch({ type: ADD_LAYER, payload: layer });
		dispatch({ type: TOGGLE_ADD_LAYER_POPUP });
	};

	const handleIsPopupOpen = () => {
		dispatch({ type: TOGGLE_ADD_LAYER_POPUP });
	};

	return (
		<div className={`bg-gray-50 w-1/2 rounded-lg p-8 flex flex-col items-center gap-y-2 m-auto`}>
			<div className="flex justify-end w-full">
				<div
					className="font-bold cursor-pointer"
					onClick={() => {
						handleIsPopupOpen();
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
