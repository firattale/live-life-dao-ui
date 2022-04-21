import * as React from "react";
import { addresses, abis } from "@my-app/contracts";
// import GET_TRANSFERS from "../../graphql/subgraph";
// import { useQuery } from "@apollo/client";
import {
	ChainId,
	useEthers,
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
	const contract = new Contract(addresses.sellerContract, sellerInterface);
	const { state: buyGoldenNFTState, send: buyGoldenNFT } = useContractFunction(contract, "buyGoldenNFT");
	const { state: buyGuestlistNFTState, send: buyGuestlistNFT } = useContractFunction(contract, "buyGuestlistNFT");
	const { chainId, switchNetwork } = useEthers();

	React.useEffect(() => {
		const changeNetwork = async () => {
			if (chainId !== ChainId.Mumbai) {
				await switchNetwork(ChainId.Mumbai);
			}
		};
		changeNetwork();
	}, [chainId, switchNetwork]);
	React.useEffect(() => {
		if (buyGoldenNFTState.status === "PendingSignature" || buyGuestlistNFTState.status === "PendingSignature") {
			toast.loading("Waiting...");
		}
		if (buyGoldenNFTState.status === "Exception" || buyGuestlistNFTState.status === "Exception") {
			toast.dismiss();
			toast.error(buyGoldenNFTState.errorMessage);
		}
	}, [buyGoldenNFTState, buyGuestlistNFTState]);

	const onGoldenClick = () => {
		buyGoldenNFT();
	};
	console.log("state", buyGoldenNFTState);
	const onGuestListClick = () => {
		void buyGuestlistNFT();
	};

	// toast.promise(goldenPromise, {
	// 	loading: "Loading",
	// 	success: (data) => `Successfully minted ${data.name}`,
	// 	error: (err) => `This just happened: ${err.error}`,
	// });
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
