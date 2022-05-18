import * as React from "react";
import { addresses } from "@my-app/contracts";
import { useContractFunction, useEthers, useCall } from "@usedapp/core";
import toast from "react-hot-toast";
import { utils } from "ethers";
import { Container, ContainerMint } from "../../components";
import { NftImage, MintInfo } from "../../components/MintPage";
import { Golden, GuestList } from "../../components/MintPage";
import { Element } from "react-scroll";
import { DialogWarning } from "../../components/DialogWarning";
import {
	dialogContentNoMetamask,
	mockDAIContract,
	sellerContract,
	goldenNFTContract,
	guestLiftNFTContract,
} from "../../constants";
import { toastCreator } from "../../helpers";

export const MintPage = () => {
	const { account, activateBrowserWallet } = useEthers();

	const [openDialog, setOpenDialog] = React.useState(false);
	const [availableGoldenNFT, setAvailableGoldenNFT] = React.useState(0);
	const [totalSupplyGoldenNFT, setTotalSupplyGoldenNFT] = React.useState(0);
	const [availableGuestListNFT, setAvailableGuestListNFT] = React.useState(0);
	const [totalSupplyGuestListNFT, setTotalSupplyGuestListNFT] = React.useState(0);

	const { state: approveAllowanceState, send: approveAllowance } = useContractFunction(mockDAIContract, "approve");
	const { state: buyGoldenNFTState, send: buyGoldenNFT } = useContractFunction(sellerContract, "buyGoldenNFT");
	const { state: buyGuestlistNFTState, send: buyGuestlistNFT } = useContractFunction(sellerContract, "buyGuestlistNFT");

	const { value: balanceOfGolden } =
		useCall({ contract: goldenNFTContract, method: "balanceOf", args: [addresses.sellerContract] }) ?? {};
	const { value: totalSupplyGolden } = useCall({ contract: goldenNFTContract, method: "totalSupply", args: [] }) ?? {};
	const { value: balanceOfGuest } =
		useCall({ contract: guestLiftNFTContract, method: "balanceOf", args: [addresses.sellerContract] }) ?? {};
	const { value: totalSupplyGuest } =
		useCall({ contract: guestLiftNFTContract, method: "totalSupply", args: [] }) ?? {};

	React.useEffect(() => {
		if (balanceOfGolden && totalSupplyGolden && balanceOfGuest && totalSupplyGuest) {
			// from Big Number to number
			const formattedBalanceGolden = utils.formatUnits(balanceOfGolden[0], "wei");
			const formattedTotalSupplyGolden = utils.formatUnits(totalSupplyGolden[0], "wei");
			const formattedBalanceOfGuest = utils.formatUnits(balanceOfGuest[0], "wei");
			const formattedTotalSupplyGuest = utils.formatUnits(totalSupplyGuest[0], "wei");

			setAvailableGoldenNFT(formattedTotalSupplyGolden - formattedBalanceGolden);
			setTotalSupplyGoldenNFT(formattedTotalSupplyGolden);
			setAvailableGuestListNFT(formattedTotalSupplyGuest - formattedBalanceOfGuest);
			setTotalSupplyGuestListNFT(formattedTotalSupplyGuest);
		}
	}, [balanceOfGolden, balanceOfGuest, totalSupplyGolden, totalSupplyGuest]);

	React.useEffect(() => {
		toastCreator(approveAllowanceState, {
			pendingText: "Please confirm to approve the allowance transaction in your wallet.",
			successText: "You have successfully approved allowance for DAI spending.",
		});
	}, [approveAllowanceState]);

	React.useEffect(() => {
		toastCreator(buyGoldenNFTState, {
			pendingText: "Please confirm to buy the Golden NFT transaction in your wallet.",
			successText: "You have successfully minted your Golden NFT!",
		});
	}, [buyGoldenNFTState]);
	React.useEffect(() => {
		toastCreator(buyGuestlistNFTState, {
			pendingText: "Please confirm to buy the Guestlist NFT transaction in your wallet.",
			successText: "You have successfully minted your Guestlist NFT!",
		});
	}, [buyGuestlistNFTState]);

	const onGoldenClick = async (amount) => {
		if (!window.ethereum) {
			setOpenDialog(true);
			return;
		}

		if (!account) {
			activateBrowserWallet();
			toast("Wallet connected", {
				icon: "🤝",
			});
			return;
		}

		const amountToBuy = utils.parseEther(amount.toString());
		await approveAllowance(addresses.sellerContract, amountToBuy);
		await buyGoldenNFT(amountToBuy);
	};
	const onGuestListClick = async (amount) => {
		if (!window.ethereum) {
			setOpenDialog(true);
			return;
		}

		if (!account) {
			activateBrowserWallet();
			toast("Wallet connected", {
				icon: "🤝",
			});
			return;
		}
		const amountToBuy = utils.parseEther(amount.toString());
		await approveAllowance(addresses.sellerContract, amountToBuy);
		await buyGuestlistNFT(amountToBuy);
	};
	return (
		<Element name="mint">
			<DialogWarning open={openDialog} handleClose={() => setOpenDialog(false)} content={dialogContentNoMetamask} />
			<Container>
				<NftImage />
				<ContainerMint>
					<Golden
						onGoldenClick={onGoldenClick}
						availableGoldenNFT={availableGoldenNFT}
						totalSupplyGoldenNFT={totalSupplyGoldenNFT}
						buyGoldenNFTState={buyGoldenNFTState}
					/>
					<GuestList
						onGuestListClick={onGuestListClick}
						availableGuestListNFT={availableGuestListNFT}
						totalSupplyGuestListNFT={totalSupplyGuestListNFT}
						buyGuestlistNFTState={buyGuestlistNFTState}
					/>
				</ContainerMint>
				<MintInfo />
			</Container>
		</Element>
	);
};
