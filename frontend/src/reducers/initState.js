import { DASHBOARD_TAB } from "../constants/constants";

export const initState = {
	app: {
		selectedTab: DASHBOARD_TAB,
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
		selectedProject: "--NO PROJECTS--",
		projects: [],
		isPopupOpen: false,
		isEditPopupOpen: false,
	},
};
