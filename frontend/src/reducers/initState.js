import { NFTS_GENERATOR_TAB } from "../constants/constants";

export const initState = {
	app: {
		selectedTab: NFTS_GENERATOR_TAB,
	},
	nftGen: {
		layers: [],
		currentEditLayer: "",
		isPopupOpen: false,
		isEditPopupOpen: false,
	},
	user: {
		address: "",
		walletName: "",
		projects: [],
	},
};
