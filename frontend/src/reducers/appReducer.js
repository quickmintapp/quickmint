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
	REMOVE_PROJECT,
	EDIT_PROJECT,
	SELECT_PROJECT,
	SELECT_PROJECT_INIT,
} from "./reducerActions";
import uuid from "react-uuid";

const appReducer = (state, action) => {
	const { payload } = action;

	let newLayers;
	let editedLayers;
	let projectInfo;
	let id;
	let editedUserProjects;
	let findProjectById;
	let removedProjectIndex;
	let availableIndexUp;
	let availableIndexDown;
	let updatedSelectedProject;

	switch (action.type) {
		case CHANGE_SELECTED_TAB:
			return { ...state, app: { ...state.app, selectedTab: payload } };
		case CREATE_NEW_PROJECT:
			projectInfo = payload.projectInfo;
			const newUserProject = {
				...projectInfo,
				id: uuid(),
				nftGen: {
					layers: [],
					currentEditLayer: "",
					isEditPopupOpen: false,
					ipfsHash: "",
				},
				contracts: [{id: 1}],
			};
			const newUserProjects = [...state.user.projects, newUserProject];
			return { ...state, user: { ...state.user, projects: newUserProjects } };
		case REMOVE_PROJECT:
			id = payload.id;
			editedUserProjects = state.user.projects.filter((project) => project.id !== id);
			// findProjectById = editedUserProjects.find((p) => p.id === state.user.selectedProject.id);
			// console.log(findProjectById);
			if (id === state.user.selectedProject.id) {
				if (editedUserProjects.length === 0) {
					return {
						...state,
						user: {
							...state.user,
							projects: editedUserProjects,
							selectedProject: "--NO PROJECTS--",
						},
					};
				} else {
					// find index of that project & then see if we can up it, then ok, otherwise down
					removedProjectIndex = state.user.projects.findIndex((p) => p.id === id);
					availableIndexDown = state.user.projects[removedProjectIndex - 1];
					availableIndexUp = state.user.projects[removedProjectIndex + 1];
					console.log({ removedProjectIndex, availableIndexUp, availableIndexDown });
					if (availableIndexUp) {
						console.log("up");
						if (editedUserProjects.length === 1) {
							updatedSelectedProject = editedUserProjects[0];
						} else {
							updatedSelectedProject = editedUserProjects[removedProjectIndex + 1];
						}
					} else if (availableIndexDown) {
						console.log("down");
						updatedSelectedProject = editedUserProjects[removedProjectIndex - 1];
					}
					console.log(updatedSelectedProject);
					return {
						...state,
						user: {
							...state.user,
							projects: editedUserProjects,
							selectedProject: updatedSelectedProject,
						},
					};
				}
			} else {
				return { ...state, user: { ...state.user, projects: editedUserProjects } };
			}
		case EDIT_PROJECT:
			editedUserProjects = state.user.projects.map((project) => {
				if (project.id === payload.id) {
					return { ...payload.projectInfo };
				}
				return project;
			});
			findProjectById = editedUserProjects.find((p) => p.id === state.user.selectedProject.id);
			return {
				...state,
				user: {
					...state.user,
					projects: editedUserProjects,
					selectedProject: { ...findProjectById },
				},
			};
		case SELECT_PROJECT_INIT:
			return { ...state, user: { ...state.user, selectedProject: "--NO PROJECTS--" } };
		case SELECT_PROJECT:
			findProjectById = state.user.projects.find((p) => p.id === payload.id);
			return { ...state, user: { ...state.user, selectedProject: findProjectById } };
		case ADD_LAYER:
			editedUserProjects = state.user.projects.map((p) => {
				if (p.id === state.user.selectedProject.id) {
					return { ...p, nftGen: { ...p.nftGen, layers: [...p.nftGen.layers, payload] } };
				}
				return p;
			});
			findProjectById = editedUserProjects.find((p) => p.id === state.user.selectedProject.id);
			return {
				...state,
				user: {
					...state.user,
					projects: editedUserProjects,
					selectedProject: { ...findProjectById },
				},
			};
		case ADD_LAYER_IMAGES:
			const { layerId, layerImages } = payload;
			editedUserProjects = state.user.projects.map((p) => {
				if (p.id === state.user.selectedProject.id) {
					newLayers = p.nftGen.layers.map((layer) => {
						if (layer.layerId === layerId) {
							return { ...layer, layerImages: [...layerImages] };
						}
						return layer;
					});
					return { ...p, nftGen: { ...p.nftGen, layers: newLayers } };
				}
				return p;
			});
			findProjectById = editedUserProjects.find((p) => p.id === state.user.selectedProject.id);
			return {
				...state,
				user: {
					...state.user,
					projects: editedUserProjects,
					selectedProject: { ...findProjectById },
				},
			};
		case EDIT_LAYER:
			editedUserProjects = state.user.projects.map((p) => {
				if (p.id === state.user.selectedProject.id) {
					newLayers = p.nftGen.layers.map((layer) => {
						if (layer.layerId === payload.id) {
							return { ...layer, layerName: payload.layerName };
						}
						return layer;
					});
					return { ...p, nftGen: { ...p.nftGen, layers: newLayers } };
				}
				return p;
			});
			findProjectById = editedUserProjects.find((p) => p.id === state.user.selectedProject.id);
			return {
				...state,
				user: {
					...state.user,
					projects: editedUserProjects,
					selectedProject: { ...findProjectById },
				},
			};
		case CURRENT_LAYER_EDITING:
			editedUserProjects = state.user.projects.map((p) => {
				if (p.id === state.user.selectedProject.id) {
					return { ...p, nftGen: { ...p.nftGen, currentEditLayer: payload } };
				}
				return p;
			});
			findProjectById = editedUserProjects.find((p) => p.id === state.user.selectedProject.id);
			return {
				...state,
				user: {
					...state.user,
					projects: editedUserProjects,
					selectedProject: { ...findProjectById },
				},
			};
		case REMOVE_LAYER:
			editedUserProjects = state.user.projects.map((p) => {
				if (p.id === state.user.selectedProject.id) {
					newLayers = p.nftGen.layers.filter((layer) => layer.layerId !== payload.layerId);
					return { ...p, nftGen: { ...p.nftGen, layers: newLayers } };
				}
				return p;
			});
			findProjectById = editedUserProjects.find((p) => p.id === state.user.selectedProject.id);
			return {
				...state,
				user: {
					...state.user,
					projects: editedUserProjects,
					selectedProject: { ...findProjectById },
				},
			};
		case TOGGLE_ADD_LAYER_POPUP:
			return { ...state, user: { ...state.user, isPopupOpen: !state.user.isPopupOpen } };
		case TOGGLE_EDIT_LAYER_POPUP:
			editedUserProjects = state.user.projects.map((p) => {
				if (p.id === state.user.selectedProject.id) {
					return { ...p, nftGen: { ...p.nftGen, isEditPopupOpen: !p.nftGen.isEditPopupOpen } };
				}
				return p;
			});
			findProjectById = editedUserProjects.find((p) => p.id === state.user.selectedProject.id);
			return {
				...state,
				user: {
					...state.user,
					projects: editedUserProjects,
					selectedProject: { ...findProjectById },
				},
			};
		// return {
		// 	...state,
		// 	nftGen: { ...state.nftGen, isEditPopupOpen: !state.nftGen.isEditPopupOpen },
		// };
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
