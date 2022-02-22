import React, { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";

import { SELECT_PROJECT, SELECT_PROJECT_INIT } from "../../reducers/reducerActions";

const SelectProject = () => {
	const { state, dispatch } = useContext(AppContext);
	const { selectedProject } = state.user;

	useEffect(() => {
		if (state.user.projects.length > 0) {
			// this is when initially the user creates the project and goes to nftgenerator tab
			if (selectedProject === "--NO PROJECTS--") {
				dispatch({ type: SELECT_PROJECT, payload: { id: state.user.projects[0].id } });
			}
			//  else {
			// 	// here we are gonna find what project changed and sync it to selectedprojects
			// 	//
			// }
		} else if (state.user.projects.length === 0) {
			dispatch({ type: SELECT_PROJECT_INIT });
		}
	}, [state.user.projects, dispatch, selectedProject]);

	return (
		<div className="flex gap-x-1 place-items-center">
			{/* <h2 className="text-xl font-medium">Select Project:</h2> */}
			<select
				className="outline-none bg-bg-200 shadow-md rounded-lg p-1"
				value={selectedProject && selectedProject.id}
				onChange={(e) => {
					dispatch({
						type: SELECT_PROJECT,
						payload: { id: e.target.value },
					});
				}}>
				{(() => {
					if (state.user.projects.length === 0) {
						return <option value="No Projects">--NO PROJECTS--</option>;
					} else {
						return state.user.projects.map((p) => {
							return (
								<option key={p.id} value={p.id}>
									{p.projectName}
								</option>
							);
						});
					}
				})()}
			</select>
		</div>
	);
};

export default SelectProject;
