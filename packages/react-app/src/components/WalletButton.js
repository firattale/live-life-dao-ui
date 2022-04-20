import * as React from "react";
import { useEthers } from "@usedapp/core";
import { Button } from "./";
import { MUMBAI_CHAIN_ID } from "../constants";

export const WalletButton = () => {
	const [rendered, setRendered] = React.useState("");
	const { account, activateBrowserWallet, deactivate, error, chainId } = useEthers();

	const [activateError, setActivateError] = React.useState("");
	const activate = async () => {
		setActivateError("");
		activateBrowserWallet();
	};
	React.useEffect(() => {
		if (account) {
			setRendered("disconnect");
		} else {
			setRendered("connect wallet");
		}
		if (chainId !== MUMBAI_CHAIN_ID) {
			setRendered("wrong network");
		}
	}, [account, setRendered, chainId]);

	React.useEffect(() => {
		if (error) {
			setActivateError(error.message);
			console.log("error", error);
		}
	}, [error]);

	return (
		<Button
			error={chainId !== MUMBAI_CHAIN_ID}
			onClick={() => {
				if (!account) {
					activate();
				} else {
					deactivate();
				}
			}}
			className="btn-style-orange nav-btn"
		>
			{rendered}
		</Button>
	);
};
