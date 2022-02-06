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

const Layer = ({ id, layerName, layerImages }) => {
	const { dispatch } = useContext(AppContext);

	const handleSelectedFiles = (e) => {
		const selectedFiles = [];
		selectedFiles.push(e.target.files);
		let arr = [];
		for (let i = 0; i < selectedFiles[0].length; i++) {
			arr.push({
				id: uuid(),
				src: URL.createObjectURL(selectedFiles[0][i]),
				name: selectedFiles[0][i].name,
				rarity: "50",
			});
		}
		const editedLayer = {
			id,
			layerName,
			layerImages: arr,
		};
		dispatch({ type: ADD_LAYER_IMAGES, payload: editedLayer });
	};

	return (
		<div className="p-6 w-full rounded-lg bg-gray-50 flex justify-between items-center">
			<div className="w-full flex flex-col justify-center items-start gap-y-2">
				{/* layer name */}
				<div className="w-full flex justify-between items-center">
					<h3 className="text-xl font-medium">{layerName}</h3>
					<input
						type="file"
						name="images"
						accept="image/png"
						onChange={(e) => handleSelectedFiles(e)}
						multiple
					/>
				</div>
				<div className="flex justify-center items-center gap-y-2 gap-x-4 flex-wrap p-4">
					{layerImages.length > 0 ? (
						layerImages.map((image) => {
							return (
								<div key={image.id} className="flex flex-col gap-y-2 text-center">
									<img src={image.src} height="150" width="150" alt={image.name} />
									<div>
										<p>{image.name}</p>
									</div>
								</div>
							);
						})
					) : (
						<Message message="No images uploaded." />
					)}
				</div>
			</div>

			{/* layer editing controls */}

			<div className="flex gap-x-4">
				<p
					className="font-bold cursor-pointer"
					onClick={() => {
						dispatch({ type: CURRENT_LAYER_EDITING, payload: { id, layerName } });
						dispatch({ type: TOGGLE_EDIT_LAYER_POPUP });
					}}>
					/
				</p>
				<p
					className="font-bold cursor-pointer"
					onClick={() => {
						dispatch({ type: REMOVE_LAYER, payload: id });
					}}>
					X
				</p>
			</div>
		</div>
	);
};

export default Layer;
