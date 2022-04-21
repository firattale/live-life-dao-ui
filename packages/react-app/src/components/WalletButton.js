import * as React from "react";
import { useEthers, ChainId } from "@usedapp/core";
import { Button } from "./";

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
		if (account && chainId !== ChainId.Mumbai) {
			setRendered("wrong network");
		}
	}, [account, setRendered, chainId]);

	return (
		<Button
			error={account && chainId !== ChainId.Mumbai}
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
