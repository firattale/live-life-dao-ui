import * as React from "react";
import { addresses, abis } from "@my-app/contracts";
// import GET_TRANSFERS from "../../graphql/subgraph";
// import { useQuery } from "@apollo/client";
import {
	// useTokenBalance,
	useContractFunction,
} from "@usedapp/core";
import { Link } from "react-router-dom";
// import { formatEther } from "@ethersproject/units";
import toast from "react-hot-toast";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";

import { Body } from "../../components";
import NavBar from "../../components/NavBar";
import Mint from "../../components/Mint";

export const MintPage = () => {
	const sellerInterface = new utils.Interface(abis.seller.abi);
	const mockDAIInterface = new utils.Interface(abis.mockDai.abi);
	const sellerContract = new Contract(addresses.sellerContract, sellerInterface);
	const mockDAIContract = new Contract(addresses.mockDaiContract, mockDAIInterface);
	const { state: buyGoldenNFTState, send: buyGoldenNFT } = useContractFunction(sellerContract, "buyGoldenNFT");
	const { state: approveState, send: approve } = useContractFunction(mockDAIContract, "approve");
	const { state: buyGuestlistNFTState, send: buyGuestlistNFT } = useContractFunction(sellerContract, "buyGuestlistNFT");

	React.useEffect(() => {
		if (approveState.status === "PendingSignature") {
			toast.loading("Waiting...");
		}
		if (approveState.status === "Exception" || approveState.status === "Fail") {
			toast.dismiss();
			toast.error(approveState.errorMessage);
		}
		if (approveState.status === "Success") {
			console.log("approveState", approveState);
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
			console.log("buyGoldenNFTState", buyGoldenNFTState);
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
			console.log("buyGuestlistNFTState", buyGuestlistNFTState);
			toast.dismiss();
			toast.success("You have successfully minted your Guestlist NFT!");
			console.log(`View your NFT on https://testnets.opensea.io/account`);
		}
	}, [buyGuestlistNFTState]);

	const onGoldenClick = async () => {
		await approve(addresses.sellerContract, utils.parseEther("50000"));
		await buyGoldenNFT();
	};
	const onGuestListClick = async () => {
		await approve(addresses.sellerContract, utils.parseEther("20000"));
		await buyGuestlistNFT();
	};

	return (
		<Body>
			<NavBar />
			<Mint onGoldenClick={onGoldenClick} onGuestListClick={onGuestListClick} />
			<Link className="btn btn-style-blue-light btn-mp link" to="/">
				back to main page
			</Link>
		</Body>
	);
};

// const tokenBalance = useTokenBalance(MOCK_DAI_CONTRACT, account);
// console.log("tokenBalance", tokenBalance);
// if (tokenBalance) {
// 	console.log("tokenBalance :>> ", formatEther(tokenBalance));
// }

// React.useEffect(() => {
// 	if (subgraphQueryError) {
// 		console.error("Error while querying subgraph:", subgraphQueryError.message);
// 		return;
// 	}
// 	if (!loading && data && data.transfers) {
// 		console.log({ transfers: data.transfers });
// 	}
// }, [loading, subgraphQueryError, data]);

// const { loading, error: subgraphQueryError, data } = useQuery(GET_TRANSFERS);
