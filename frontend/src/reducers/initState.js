import { DASHBOARD_TAB } from "../constants/constants";

const initState = {
	app: {
		selectedTab: DASHBOARD_TAB,
	},
	nftGen: {
		layers: [
			//     {
			//     layerName: "",
			//     layerImages: [{
			//         imageName: "",
			//         imageSrc: ""
			//     }]
			// }
		],
        currentEditLayer: "",
        isPopupOpen: false,
        isEditPopupOpen: false,
	},
	user: {},
};

export default initState;
