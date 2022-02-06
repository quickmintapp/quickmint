import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/app/Main";
import Home from "./components/Home";
import AppContext from "./context/AppContext";
import appReducer from "./reducers/appReducer";
import initState from "./reducers/initState"

const App = () => {
	const [state, dispatch] = useReducer(appReducer, initState);

	const exportValues = {
		state,
		dispatch,
	};

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
