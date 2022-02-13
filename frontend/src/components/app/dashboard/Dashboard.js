import React, { useContext } from "react";
import NftProjectCard from "./NftProjectCard";
import AppContext from "../../../context/AppContext";
import Message from "../Message";
import {CREATE_NEW_PROJECT} from "../../../reducers/reducerActions"

const Dashboard = () => {
	const { state, dispatch } = useContext(AppContext);

	return (
		<div>
			<div className="w-full border-b-2 border-b-black py-4">
				<h2 className="text-xl font-medium">Your NFT Projects</h2>
			</div>
			<div className="flex justify-center items-center flex-wrap py-4 gap-x-4 gap-y-4">
				{state.user.address ? (
					<>
						{/* <NftProjectCard tokenSymbol="SKHD" tokenName="Sikh Doodles" totalMinted="100" /> */}
						{/* add card */}
						<div className="w-1/4 p-8 bg-bg-200 rounded-lg flex justify-center items-center gap-y-2 drop-shadow-lg">
							<div className="p-2 my-10 font-medium bg-gray-50 px-4 rounded-full cursor-pointer hover:drop-shadow-xl" onClick={()=> {dispatch({type: CREATE_NEW_PROJECT})}}>
								<p>+</p>
							</div>
						</div>
					</>
				) : (
					<Message message={"Connect to wallet first."} />
				)}
			</div>
		</div>
	);
};

export default Dashboard;
