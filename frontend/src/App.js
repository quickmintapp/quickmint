import React, { useState, useReducer, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/app/Main";
import Home from "./components/Home";
import AppContext from "./context/AppContext";
import appReducer from "./reducers/appReducer";
import { initState } from "./reducers/initState";

const App = () => {
	const [state, dispatch] = useReducer(
		appReducer,
		localStorage.getItem("state") === null || undefined ? initState : JSON.parse(localStorage.getItem("state"))
	);

	const exportValues = {
		state,
		dispatch,
	};

	useEffect(() => {
		localStorage.setItem("state", JSON.stringify(state));
	}, [state]);

	return (
		<AppContext.Provider value={exportValues}>
			<div className="bg-bg-100 min-h-screen font-pop text-lg flex flex-col">
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
