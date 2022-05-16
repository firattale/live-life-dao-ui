import * as React from "react";
import { NavButton } from "./";
import { useEthers, ChainId } from "@usedapp/core";
import { DialogWarning } from "./DialogWarning";
import { dialogContentNoMetamask } from "../constants";
export const WalletButton = () => {
	const { account, activateBrowserWallet, deactivate, chainId, switchNetwork } = useEthers();

	const [rendered, setRendered] = React.useState("");
	const [openDialog, setOpenDialog] = React.useState(false);

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
		<>
			<DialogWarning open={openDialog} handleClose={() => setOpenDialog(false)} content={dialogContentNoMetamask} />

			<NavButton
				error={account && chainId !== ChainId.Mumbai}
				onClick={() => {
					if (!window.ethereum) {
						setOpenDialog(true);
						return;
					}

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
		</>
	);
};
