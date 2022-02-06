import { DASHBOARD_TAB } from "../constants/constants";

const initState = {
	app: {
		selectedTab: DASHBOARD_TAB,
	},
	nftGen: {
		layers: [
			// {
			// 	id: "",
			// 	layerName: "",
			// 	layerImages: [
			// 		{
			// 			imageName: "",
			// 			imageSrc: "",
			// 			rarity: "",
			// 		},
			// 	],
			// },
		],
		currentEditLayer: "",
		isPopupOpen: false,
		isEditPopupOpen: false,
	},
	user: {},
};

export default initState;
