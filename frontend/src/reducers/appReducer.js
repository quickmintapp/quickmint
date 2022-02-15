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
	CHANGE_WALLET_NAME,
	CREATE_NEW_PROJECT,
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
				if (layer.layerId === payload.id) {
					return { ...layer, layerName: payload.layerName };
				}
				return layer;
			});
			return { ...state, nftGen: { ...state.nftGen, layers: editedLayers } };
		case CURRENT_LAYER_EDITING:
			return { ...state, nftGen: { ...state.nftGen, currentEditLayer: payload } };
		case REMOVE_LAYER:
			newLayers = state.nftGen.layers.filter((layer) => layer.layerId !== payload);
			return { ...state, nftGen: { ...state.nftGen, layers: newLayers } };
		case TOGGLE_ADD_LAYER_POPUP:
			return { ...state, nftGen: { ...state.nftGen, isPopupOpen: !state.nftGen.isPopupOpen } };
		case TOGGLE_EDIT_LAYER_POPUP:
			return {
				...state,
				nftGen: { ...state.nftGen, isEditPopupOpen: !state.nftGen.isEditPopupOpen },
			};
		case ADD_LAYER_IMAGES:
			const { layerId, layerImages } = payload;
			editedLayers = state.nftGen.layers.map((layer) => {
				if (layer.layerId === layerId) {
					return { ...layer, layerImages: [...layerImages] };
				}
				return layer;
			});
			return {
				...state,
				nftGen: { ...state.nftGen, layers: editedLayers },
			};
		case CONNECTED_WALLET:
			const userWalletAddress = payload; //wallet address of user with already connected account
			return { ...state, user: { ...state.user, address: userWalletAddress } };
		case DISCONNECTED_WALLET:
			return { ...state, user: { ...state.user, address: "" } };
		case CHANGE_WALLET_NAME:
			const { e } = payload; // new wallet name
			return { ...state, user: { ...state.user, walletName: e.target.value } };
		default:
			return state;
	}
};

export default appReducer;
