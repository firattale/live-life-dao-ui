import * as React from "react";
import { NavButton } from "./";
import { useEthers, ChainId } from "@usedapp/core";

export const WalletButton = () => {
	const [rendered, setRendered] = React.useState("");
	const { account, activateBrowserWallet, deactivate, chainId, switchNetwork } = useEthers();

	React.useEffect(() => {
		if (chainId !== ChainId.Mumbai) {
			switchNetwork(ChainId.Mumbai);
		}
	}, [chainId, switchNetwork]);

	React.useEffect(() => {
		if (account) {
			setRendered("disconnect");
		} else {
			setRendered("connect wallet");
		}
		if (account && chainId !== ChainId.Mumbai) {
			setRendered("wrong network");
		}
	}, [account, setRendered, chainId]);

	return (
		<NavButton
			error={account && chainId !== ChainId.Mumbai}
			onClick={() => {
				if (!account) {
					activateBrowserWallet();
				} else {
					deactivate();
				}
			}}
			className="btn-style-orange nav-btn zoom"
		>
			{rendered}
		</NavButton>
	);
};
