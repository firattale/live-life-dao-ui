import * as React from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import { Button } from "./";

export const WalletButton = () => {
	const [rendered, setRendered] = React.useState("");
	const ens = useLookupAddress();
	const { account, activateBrowserWallet, deactivate, error } = useEthers();
	const [activateError, setActivateError] = React.useState("");
	const activate = async () => {
		setActivateError("");
		activateBrowserWallet();
	};
	React.useEffect(() => {
		if (ens) {
			setRendered(ens);
		} else if (account) {
			setRendered(shortenAddress(account));
		} else {
			setRendered("");
		}
	}, [account, ens, setRendered]);

	React.useEffect(() => {
		if (error) {
			setActivateError(error.message);
			console.log("error", error);
		}
	}, [error]);

	return (
		<Button
			onClick={() => {
				if (!account) {
					activate();
				} else {
					deactivate();
				}
			}}
			className="btn-style-orange nav-btn"
		>
			{rendered === "" && "Connect Wallet"}
			{rendered !== "" && rendered}
		</Button>
	);
};
