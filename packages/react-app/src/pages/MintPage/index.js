import * as React from "react";
import { addresses, abis } from "@my-app/contracts";
import { useContractFunction, useEthers, useCall } from "@usedapp/core";
import toast from "react-hot-toast";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";
import { Container, ContainerMint } from "../../components";
import { Golden, GuestList } from "../../components/MintPage";
import { Element } from "react-scroll";
import { DialogWarning } from "../../components/DialogWarning";
import { dialogContentNoMetamask } from "../../constants";

const sellerInterface = new utils.Interface(abis.seller.abi);
const mockDAIInterface = new utils.Interface(abis.mockDai.abi);
const ticketNFTInterface = new utils.Interface(abis.ticketNFT.abi);
const sellerContract = new Contract(addresses.sellerContract, sellerInterface);
const mockDAIContract = new Contract(addresses.mockDaiContract, mockDAIInterface);
const goldenNFTContract = new Contract(addresses.goldenNFTContract, ticketNFTInterface);
const guestLiftNFTContract = new Contract(addresses.guestLiftNFTContract, ticketNFTInterface);

export const MintPage = () => {
	const { account } = useEthers();

	const [openDialog, setOpenDialog] = React.useState(false);
	const [availableGoldenNFT, setAvailableGoldenNFT] = React.useState(0);
	const [totalSupplyGoldenNFT, setTotalSupplyGoldenNFT] = React.useState(0);
	const [availableGuestListNFT, setAvailableGuestListNFT] = React.useState(0);
	const [totalSupplyGuestListNFT, setTotalSupplyGuestListNFT] = React.useState(0);

	const { state: buyGoldenNFTState, send: buyGoldenNFT } = useContractFunction(sellerContract, "buyGoldenNFT");
	const { state: approveAllowanceState, send: approveAllowance } = useContractFunction(mockDAIContract, "approve");
	const { state: buyGuestlistNFTState, send: buyGuestlistNFT } = useContractFunction(sellerContract, "buyGuestlistNFT");

	const { value: balanceOfGolden } =
		useCall({ contract: goldenNFTContract, method: "balanceOf", args: [addresses.sellerContract] }) ?? {};
	const { value: totalSupplyGolden } = useCall({ contract: goldenNFTContract, method: "totalSupply", args: [] }) ?? {};
	const { value: balanceOfGuest } =
		useCall({ contract: guestLiftNFTContract, method: "balanceOf", args: [addresses.sellerContract] }) ?? {};
	const { value: totalSupplyGuest } =
		useCall({ contract: guestLiftNFTContract, method: "totalSupply", args: [] }) ?? {};

	React.useEffect(() => {
		if (balanceOfGolden) {
			const formattedBalanceGolden = utils.formatEther(balanceOfGolden[0]);
			const formattedTotalSupplyGolden = utils.formatEther(totalSupplyGolden[0]);
			const formattedBalanceOfGuest = utils.formatEther(balanceOfGuest[0]);
			const formattedTotalSupplyGuest = utils.formatEther(totalSupplyGuest[0]);
			setAvailableGoldenNFT(formattedTotalSupplyGolden * 10 ** 18 - formattedBalanceGolden * 10 ** 18);
			setTotalSupplyGoldenNFT(formattedTotalSupplyGolden * 10 ** 18);
			setAvailableGuestListNFT(formattedTotalSupplyGuest * 10 ** 18 - formattedBalanceOfGuest * 10 ** 18);
			setTotalSupplyGuestListNFT(formattedTotalSupplyGuest * 10 ** 18);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [balanceOfGolden, balanceOfGuest, totalSupplyGolden, totalSupplyGuest]);

	React.useEffect(() => {
		if (approveAllowanceState.status === "PendingSignature") {
			toast.loading("Please confirm to approve the allowance transaction in your wallet.");
		}
		if (approveAllowanceState.status === "Mining") {
			toast.dismiss();
			toast.loading("Waiting, transactions may take a few minutes...");
		}
		if (approveAllowanceState.status === "Exception" || approveAllowanceState.status === "Fail") {
			toast.dismiss();
			toast.error(approveAllowanceState.errorMessage);
		}
		if (approveAllowanceState.status === "Success") {
			toast.dismiss();
			toast.success("You have successfully approved allowance for DAI spending.");
		}
	}, [approveAllowanceState]);

	React.useEffect(() => {
		if (buyGoldenNFTState.status === "PendingSignature") {
			toast.loading("Please confirm to buy the Golden NFT transaction in your wallet.");
		}
		if (buyGoldenNFTState.status === "Mining") {
			toast.dismiss();
			toast.loading("Waiting, transactions may take a few minutes...");
		}
		if (buyGoldenNFTState.status === "Exception" || buyGoldenNFTState.status === "Fail") {
			toast.dismiss();
			toast.error(buyGoldenNFTState.errorMessage);
		}
		if (buyGoldenNFTState.status === "Success") {
			toast.dismiss();
			toast.success("You have successfully minted your Golden NFT!");
		}
	}, [buyGoldenNFTState]);
	React.useEffect(() => {
		if (buyGuestlistNFTState.status === "PendingSignature") {
			toast.loading("Please confirm to buy the Guestlist NFT transaction in your wallet");
		}
		if (buyGuestlistNFTState.status === "Mining") {
			toast.dismiss();
			toast.loading("Waiting, transactions may take a few minutes...");
		}
		if (buyGuestlistNFTState.status === "Exception" || buyGuestlistNFTState.status === "Fail") {
			toast.dismiss();
			toast.error(buyGuestlistNFTState.errorMessage);
		}
		if (buyGuestlistNFTState.status === "Success") {
			toast.dismiss();
			toast.success("You have successfully minted your Guestlist NFT!");
		}
	}, [buyGuestlistNFTState]);

	const onGoldenClick = async (amount) => {
		if (!window.ethereum) {
			setOpenDialog(true);
			return;
		}

		if (!account) {
			toast.error("Please connect to your wallet to mint an NFT.");
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
			toast.error("Please connect to your wallet to mint an NFT.");
			return;
		}
		const amountToBuy = utils.parseEther(amount.toString());
		await approveAllowance(addresses.sellerContract, amountToBuy);
		await buyGuestlistNFT(amountToBuy);
	};
	return (
		<Element name="mint">
			<Container>
				<ContainerMint>
					<DialogWarning open={openDialog} handleClose={() => setOpenDialog(false)} content={dialogContentNoMetamask} />
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
			</Container>
		</Element>
	);
};
