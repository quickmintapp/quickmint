import { DASHBOARD_TAB } from "../constants/constants";

const initState = {
	app: {
		selectedTab: DASHBOARD_TAB,
	},
	nftGen: {
		layers: [],
		currentEditLayer: "",
		isPopupOpen: false,
		isEditPopupOpen: false,
	},
	user: {},
};

export default initState;
