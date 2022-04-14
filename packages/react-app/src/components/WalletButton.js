import * as React from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import { Button } from "./";

export const WalletButton = () => {
	const [rendered, setRendered] = React.useState("");
	const ens = useLookupAddress();
	const { account, activateBrowserWallet, deactivate, error } = useEthers();

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
			console.log("error", error);
			alert("Error while connecting wallet:", error.message);
		}
	}, [error]);

	return (
		<Button
			onClick={() => {
				if (!account) {
					activateBrowserWallet();
				} else {
					deactivate();
				}
			}}
		>
			{rendered === "" && "Connect Wallet"}
			{rendered !== "" && rendered}
		</Button>
	);
};
