import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import {
	REMOVE_LAYER,
	TOGGLE_EDIT_LAYER_POPUP,
	CURRENT_LAYER_EDITING,
	ADD_LAYER_IMAGES,
} from "../../../reducers/reducerActions";
import uuid from "react-uuid";
import Message from "../Message";

const Layer = ({ layerId, layerName, layerImages }) => {
	const { dispatch } = useContext(AppContext);

	return (
		<div className="p-6 w-full rounded-lg bg-gray-50 flex flex-col justify-between items-center gap-y-4">
			<div className="w-full flex flex-col justify-center items-start">
				{/* layer name */}
				<div className="w-full flex justify-between items-center">
					<h3 className="text-xl font-medium">
						<div className="flex gap-x-2 items-center bg-gray-100 px-2 py-1">
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
									d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
								/>
							</svg>
							{layerName}
						</div>
					</h3>
					<div>
						<label
							htmlFor={`${layerId}`}
							className="p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
							{`Upload Images`}
							{/* bcoz the input was hidden it was not being propagated, so we need to wrap this up into something else and hide the input but still we need everything alright? */}
							<input
								type="file"
								id={`${layerId}`}
								name="images"
								accept="image/png"
								onChange={(e) => {
									e.stopPropagation();
									const selectedFiles = [];
									selectedFiles.push(e.target.files);
									let arr = [];
									for (let i = 0; i < selectedFiles[0].length; i++) {
										arr.push({
											id: uuid(),
											src: URL.createObjectURL(selectedFiles[0][i]),
											name: selectedFiles[0][i].name,
										});
									}
									dispatch({ type: ADD_LAYER_IMAGES, payload: { layerId, layerImages: arr } });
								}}
								multiple
								className={`bg-red-100 -z-10 opacity-0 hidden`}
							/>
						</label>
						{/* </label> */}
					</div>
				</div>
			</div>
			<div className="flex items-center bg-gray-100 rounded-lg w-full p-4">
				<div className="flex justify-center items-center gap-y-4 gap-x-4 flex-wrap w-full">
					{layerImages.length > 0 ? (
						layerImages.map((image) => {
							return (
								<div
									key={image.id}
									className="flex flex-col justify-center items-center gap-y-2 text-center text-base">
									<img src={image.src} height="150" width="150" alt={image.name} />
									<div>
										<p>{`${image.name.slice(0, 13)}${image.name.length > 13 ? "..." : ""}`}</p>
									</div>
								</div>
							);
						})
					) : (
						<Message message="No images uploaded." classes={"bg-gray-100 rounded-lg"} />
					)}
				</div>

				{/* layer editing controls */}

				<div className="flex gap-x-4">
					<p
						className="font-bold cursor-pointer"
						onClick={() => {
							dispatch({ type: CURRENT_LAYER_EDITING, payload: { layerId, layerName } });
							dispatch({ type: TOGGLE_EDIT_LAYER_POPUP });
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
					</p>
					<p
						className="font-bold cursor-pointer"
						onClick={() => {
							dispatch({ type: REMOVE_LAYER, payload: { layerId } });
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
			</div>
		</div>
	);
};

export default Layer;
