import * as React from "react";
import { addresses, abis } from "@my-app/contracts";
import { useContractFunction, useEthers, useCall } from "@usedapp/core";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";
import { Body } from "../../components";
import NavBar from "../../components/NavBar";
import Mint from "../../components/Mint";

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
	}, [balanceOfGolden]);

	React.useEffect(() => {
		if (approveState.status === "PendingSignature") {
			toast.loading("Waiting...");
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
			toast.loading("Waiting...");
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
			toast.loading("Waiting...");
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

	const onGoldenClick = async () => {
		if (!account) {
			toast.error("Please connect to your wallet to mint an NFT.");
			return;
		}
		await approve(addresses.sellerContract, utils.parseEther("50000"));
		await buyGoldenNFT();
	};
	const onGuestListClick = async () => {
		if (!account) {
			toast.error("Please connect to your wallet to mint an NFT.");
			return;
		}
		await approve(addresses.sellerContract, utils.parseEther("2000"));
		await buyGuestlistNFT();
	};

	return (
		<Body>
			<NavBar />
			<Mint
				onGoldenClick={onGoldenClick}
				onGuestListClick={onGuestListClick}
				availableGoldenNFT={availableGoldenNFT}
				totalSupplyGoldenNFT={totalSupplyGoldenNFT}
				availableGuestListNFT={availableGuestListNFT}
				totalSupplyGuestListNFT={totalSupplyGuestListNFT}
			/>
			<Link className="btn btn-style-blue-light btn-mp link" to="/">
				back to main page
			</Link>
		</Body>
	);
};
