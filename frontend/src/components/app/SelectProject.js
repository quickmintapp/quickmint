import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

import { SELECT_PROJECT } from "../../reducers/reducerActions";

const SelectProject = () => {
	const { state, dispatch } = useContext(AppContext);
	const { selectedProject } = state.user;
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
