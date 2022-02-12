import {
	CHANGE_SELECTED_TAB,
	ADD_LAYER,
	EDIT_LAYER,
	CURRENT_LAYER_EDITING,
	REMOVE_LAYER,
	TOGGLE_ADD_LAYER_POPUP,
	TOGGLE_EDIT_LAYER_POPUP,
	ADD_LAYER_IMAGES,
	CONNECTED_WALLET,
	DISCONNECTED_WALLET,
} from "./reducerActions";

const appReducer = (state, action) => {
	const { payload } = action;

	let newLayers;
	let editedLayers;

	switch (action.type) {
		case CHANGE_SELECTED_TAB:
			return { ...state, app: { ...state.app, selectedTab: payload } };
		case ADD_LAYER:
			return { ...state, nftGen: { ...state.nftGen, layers: [...state.nftGen.layers, payload] } };
		case EDIT_LAYER:
			editedLayers = state.nftGen.layers.map((layer) => {
				if (layer.id === payload.id) {
					return { ...layer, layerName: payload.layerName };
				}
				return layer;
			});
			return { ...state, nftGen: { ...state.nftGen, layers: editedLayers } };
		case CURRENT_LAYER_EDITING:
			return { ...state, nftGen: { ...state.nftGen, currentEditLayer: payload } };
		case REMOVE_LAYER:
			newLayers = state.nftGen.layers.filter((layer) => layer.id !== payload);
			return { ...state, nftGen: { ...state.nftGen, layers: newLayers } };
		case TOGGLE_ADD_LAYER_POPUP:
			return { ...state, nftGen: { ...state.nftGen, isPopupOpen: !state.nftGen.isPopupOpen } };
		case TOGGLE_EDIT_LAYER_POPUP:
			return {
				...state,
				nftGen: { ...state.nftGen, isEditPopupOpen: !state.nftGen.isEditPopupOpen },
			};
		case ADD_LAYER_IMAGES:
			editedLayers = state.nftGen.layers.map((layer) => {
				if (layer.id === payload.id) {
					return { ...payload };
				}
				return layer;
			});
			return {
				...state,
				nftGen: { ...state.nftGen, layers: editedLayers },
			};
		case CONNECTED_WALLET:
			const userWalletAddress = payload; //wallet address of user with already connected account
			return { ...state, user: { ...state.app.user, address: userWalletAddress } };
		case DISCONNECTED_WALLET:
			return { ...state, user: { ...state.app.user, address: "" } };

		default:
			return state;
	}
};

export default appReducer;
