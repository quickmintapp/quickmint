import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import Message from "../Message";
import Button from "../../Button";
import { CHANGE_WALLET_NAME } from "../../../reducers/reducerActions";

const Account = () => {
	const { state, dispatch } = useContext(AppContext);
	return (
		<div>
			<div className="w-full border-b-2 border-b-black py-4">
				<h2 className="text-xl font-medium">Your Account</h2>
			</div>
			<div className="py-4">
				{state.user.address ? (
					<div className="flex flex-col items-center gap-y-4 p-6">
						<div className="flex flex-col gap-y-1 w-2/3">
							<label className="font-medium" htmlFor="tokenName">
								Wallet Address
							</label>
							<input
								type="text"
								className="rounded-lg p-2 outline-none bg-gray-100 hover:cursor-not-allowed focus:bg-gray-50"
								value={state.user.address}
								disabled
							/>
						</div>
						<div className="flex flex-col gap-y-1 w-2/3">
							<label className="font-medium" htmlFor="tokenSymbol">
								Wallet Name (optional)
							</label>
							<input
								type="text"
								className="rounded-lg p-2 outline-none focus:bg-gray-50"
								placeholder="Account 1"
								value={state.user.walletName ? state.user.walletName : ""}
								onChange={(e) => dispatch({ type: CHANGE_WALLET_NAME, payload: { e } })}
							/>
						</div>
						{/* <div className="flex justify-center items-center">
							<Button
								btnText="Deploy"
								classes="bg-bg-200 text-black hover:bg-bg-200 hover:drop-shadow-lg font-medium text-xl p-4 m-2"
							/>
						</div> */}
					</div>
				) : (
					<Message message={"Connect to wallet first."} />
				)}
			</div>
		</div>
	);
};

export default Account;
