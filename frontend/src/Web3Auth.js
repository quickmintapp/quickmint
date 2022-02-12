import React, { useContext, useEffect } from "react";
import AppContext from "./context/AppContext";
import { CONNECTED_WALLET, DISCONNECTED_WALLET } from "./reducers/reducerActions";

const Web3Auth = () => {
	const { state, dispatch } = useContext(AppContext);

	const { ethereum } = window;

	const checkIfWalletIsConnected = async () => {
		try {
			if (ethereum) {
				// 0 for inital users
				const accounts = await ethereum.request({ method: "eth_accounts" });
				if (accounts.length > 0) {
					dispatch({ type: CONNECTED_WALLET, payload: accounts[0] });
				} else {
                    dispatch({ type: DISCONNECTED_WALLET})
                }
			}
		} catch (err) {
            console.log(err);
        }
	};

	useEffect(() => {
		checkIfWalletIsConnected();
	});

	return <div></div>;
};

export default Web3Auth;
