import * as React from "react";
import { addresses, abis } from "@my-app/contracts";
import { useContractFunction, useEthers, useCall } from "@usedapp/core";
import toast from "react-hot-toast";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";
import { Container, ContainerMint } from "../../components";
import { Golden, GuestList } from "../../components/MintPage";
import { Element } from "react-scroll";

const sellerInterface = new utils.Interface(abis.seller.abi);
const mockDAIInterface = new utils.Interface(abis.mockDai.abi);
const ticketNFTInterface = new utils.Interface(abis.ticketNFT.abi);
const sellerContract = new Contract(addresses.sellerContract, sellerInterface);
const mockDAIContract = new Contract(addresses.mockDaiContract, mockDAIInterface);
const goldenNFTContract = new Contract(addresses.goldenNFTContract, ticketNFTInterface);
const guestLiftNFTContract = new Contract(addresses.guestLiftNFTContract, ticketNFTInterface);

export const MintPage = () => {
	const [availableGoldenNFT, setAvailableGoldenNFT] = React.useState(0);
	const [totalSupplyGoldenNFT, setTotalSupplyGoldenNFT] = React.useState(0);
	const [availableGuestListNFT, setAvailableGuestListNFT] = React.useState(0);
	const [totalSupplyGuestListNFT, setTotalSupplyGuestListNFT] = React.useState(0);
	const { state: buyGoldenNFTState, send: buyGoldenNFT } = useContractFunction(sellerContract, "buyGoldenNFT");
	const { state: approveState, send: approve } = useContractFunction(mockDAIContract, "approve");
	const { state: buyGuestlistNFTState, send: buyGuestlistNFT } = useContractFunction(sellerContract, "buyGuestlistNFT");
	const { value: balanceOfGolden } =
		useCall({ contract: goldenNFTContract, method: "balanceOf", args: [addresses.sellerContract] }) ?? {};
	const { value: totalSupplyGolden } = useCall({ contract: goldenNFTContract, method: "totalSupply", args: [] }) ?? {};
	const { value: balanceOfGuest } =
		useCall({ contract: guestLiftNFTContract, method: "balanceOf", args: [addresses.sellerContract] }) ?? {};
	const { value: totalSupplyGuest } =
		useCall({ contract: guestLiftNFTContract, method: "totalSupply", args: [] }) ?? {};

	const { account } = useEthers();
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
		if (approveState.status === "PendingSignature") {
			toast.loading("Waiting, transactions may take a few minutes...");
		}
		if (approveState.status === "Exception" || approveState.status === "Fail") {
			toast.dismiss();
			toast.error(approveState.errorMessage);
		}
		if (approveState.status === "Success") {
			toast.dismiss();
			toast.success("You have successfully approved allowance for DAI spending.");
		}
	}, [approveState]);

	React.useEffect(() => {
		if (buyGoldenNFTState.status === "PendingSignature") {
			toast.loading("Waiting, transactions may take a few minutes...");
		}
		if (buyGoldenNFTState.status === "Exception" || buyGoldenNFTState.status === "Fail") {
			toast.dismiss();
			toast.error(buyGoldenNFTState.errorMessage);
		}
		if (buyGoldenNFTState.status === "Success") {
			toast.dismiss();
			toast.success("You have successfully minted your Golden NFT!");
			console.log(`View your NFT on https://testnets.opensea.io/account`);
		}
	}, [buyGoldenNFTState]);
	React.useEffect(() => {
		if (buyGuestlistNFTState.status === "PendingSignature") {
			toast.loading("Waiting, transactions may take a few minutes...");
		}
		if (buyGuestlistNFTState.status === "Exception" || buyGuestlistNFTState.status === "Fail") {
			toast.dismiss();
			toast.error(buyGuestlistNFTState.errorMessage);
		}
		if (buyGuestlistNFTState.status === "Success") {
			toast.dismiss();
			toast.success("You have successfully minted your Guestlist NFT!");
			console.log(`View your NFT on https://testnets.opensea.io/account`);
		}
	}, [buyGuestlistNFTState]);

	const onGoldenClick = async (amount) => {
		const amountToBuy = utils.parseEther(amount.toString());
		if (!account) {
			toast.error("Please connect to your wallet to mint an NFT.");
			return;
		}
		await approve(addresses.sellerContract, amountToBuy);
		await buyGoldenNFT(amountToBuy);
	};
	const onGuestListClick = async (amount) => {
		const amountToBuy = utils.parseEther(amount.toString());
		if (!account) {
			toast.error("Please connect to your wallet to mint an NFT.");
			return;
		}
		await approve(addresses.sellerContract, amountToBuy);
		await buyGuestlistNFT(amountToBuy);
	};

	return (
		<Element name="mint">
			<Container>
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
			</Container>
		</Element>
	);
};
