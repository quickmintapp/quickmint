import React, { useContext } from "react";
import Button from "../Button";
import AppContext from "../../context/AppContext";
import CONNECT_WALLET from "../../reducers/reducerActions";
import { connectWallet } from "./Wallet";

const MainNav = () => {
	const { state, dispatch } = useContext(AppContext);
	return (
		<div>
			<div className="flex justify-between items-center pb-8">
				<div>
					<h1 className="font-bold text-2xl">Dashboard</h1>
				</div>
				<div>
					{state.user.address ? (
						<div className="p-2 bg-comp-100 text-white rounded-lg font-medium">{`${state.user.address.slice(
							0,
							5
						)}...${state.user.address.slice(37, -1)}`}</div>
					) : (
						<Button btnText={"Connect wallet"} onClick={() => connectWallet()} />
					)}
				</div>
			</div>
		</div>
	);
};

export default MainNav;
