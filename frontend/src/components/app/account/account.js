import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import Message from "../Message";

const Account = () => {
	const { state } = useContext(AppContext);
	return (
		<div>
			<div className="w-full border-b-2 border-b-black py-4">
				<h2 className="text-xl font-medium">Your Account</h2>
			</div>
			<div className="py-4">
				{state.user.address ? (
					<div>Approved</div>
				) : (
					<Message message={"Connect to wallet first."} />
				)}
			</div>
		</div>
	);
};

export default Account;
