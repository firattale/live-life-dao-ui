import * as React from "react";
import { useEthers } from "@usedapp/core";
import { Button } from "./";
import { MUMBAI_CHAIN_ID } from "../constants";

export const WalletButton = () => {
	const [rendered, setRendered] = React.useState("");
	const { account, activateBrowserWallet, deactivate, chainId } = useEthers();

	const activate = async () => {
		await activateBrowserWallet();
	};
	React.useEffect(() => {
		if (account) {
			setRendered("disconnect");
		} else {
			setRendered("connect wallet");
		}
		if (account && chainId !== MUMBAI_CHAIN_ID) {
			setRendered("wrong network");
		}
	}, [account, setRendered, chainId]);

	return (
		<Button
			error={account && chainId !== MUMBAI_CHAIN_ID}
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
