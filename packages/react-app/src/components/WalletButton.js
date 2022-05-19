import * as React from "react";
import { NavButton } from "./";
import { useEthers, ChainId } from "@usedapp/core";
import { DialogWarning } from "./DialogWarning";
import { dialogContentNoMetamask, dialogWrongNetwork } from "../constants";
import toast from "react-hot-toast";

export const WalletButton = () => {
	const { account, activateBrowserWallet, deactivate, chainId, switchNetwork } = useEthers();

	const [rendered, setRendered] = React.useState("");
	const [content, setContent] = React.useState("");
	const [openDialog, setOpenDialog] = React.useState(false);

	React.useEffect(() => {
		if (chainId !== ChainId.Mainnet) {
			switchNetwork(ChainId.Mainnet);
		}
	}, [chainId, switchNetwork]);

	React.useEffect(() => {
		if (account) {
			setRendered("disconnect");
		} else {
			setRendered("connect wallet");
		}
		if (account && chainId !== ChainId.Mainnet) {
			setRendered("wrong network");
		}
	}, [account, setRendered, chainId]);
	const onButtonClick = () => {
		// no metamask
		if (!window.ethereum) {
			setContent(dialogContentNoMetamask);
			setOpenDialog(true);
			return;
		}
		if (account && chainId !== ChainId.Mainnet) {
			setContent(dialogWrongNetwork);
			setOpenDialog(true);
			return;
		}

		if (!account) {
			activateBrowserWallet();
			toast("Wallet connected", {
				icon: "🤝",
			});
		} else {
			deactivate();
			toast("Wallet disconnected", {
				icon: "👋 ",
			});
		}
	};
	return (
		<>
			<DialogWarning open={openDialog} handleClose={() => setOpenDialog(false)} content={content} />
			<NavButton
				error={account && chainId !== ChainId.Mainnet}
				onClick={onButtonClick}
				className="btn-style-orange nav-btn zoom"
			>
				{rendered}
			</NavButton>
		</>
	);
};
