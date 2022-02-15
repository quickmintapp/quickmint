const { ethereum } = window;
export const connectWallet = async () => {
	try {
		if (ethereum) {
			const accounts = await ethereum.request({ method: "eth_requestAccounts" });
			window.location.reload();
			return;
		}
	} catch (error) {
		console.log(error);
	}
};
