import React, { useReducer, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/app/Main";
import Home from "./components/Home";
import AppContext from "./context/AppContext";
import appReducer from "./reducers/appReducer";
import { initState } from "./reducers/initState";
import Web3Auth from "./Web3Auth";

const App = () => {
	const [state, dispatch] = useReducer(
		appReducer,
		localStorage.getItem("state") === null || undefined
			? initState
			: JSON.parse(localStorage.getItem("state"))
	);

	const exportValues = {
		state,
		dispatch,
	};

	useEffect(() => {
		let mutatedProjects = state.user.projects.map((p) => {
			let mutatedLayers = p.nftGen.layers.map((l) => {
				return { ...l, layerImages: [] };
			});
			return { ...p, nftGen: { ...p.nftGen, layers: mutatedLayers } };
		});
		let mutatedSelectedProject;
		if (state.user.selectedProject === "--NO PROJECTS--") {
			mutatedSelectedProject = "--NO PROJECTS--";
		} else {
			let mutatedSelectedProjectLayers = state.user.selectedProject.nftGen.layers.map((l) => {
				return { ...l, layerImages: [] };
			});
			mutatedSelectedProject = {
				...state.user.selectedProject,
				nftGen: { ...state.user.selectedProject.nftGen, layers: mutatedSelectedProjectLayers },
			};
		}
		let mutatedState = {
			...state,
			user: {
				...state.user,
				projects: mutatedProjects,
				selectedProject: mutatedSelectedProject,
			},
		};

		localStorage.setItem("state", JSON.stringify(mutatedState));
	}, [state]);

	return (
		<AppContext.Provider value={exportValues}>
			<Web3Auth />
			<div className="bg-bg-100 min-h-screen font-pop text-lg flex flex-col scroll-smooth">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Navbar />
								<Home />
							</>
						}
					/>
					<Route path="/app" element={<Main />} />
				</Routes>
			</div>
		</AppContext.Provider>
	);
};

export default App;
