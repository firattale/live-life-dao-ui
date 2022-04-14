import * as React from "react";
// import { addresses, abis } from "@my-app/contracts";
// import GET_TRANSFERS from "../../graphql/subgraph";
// import { useQuery } from "@apollo/client";
// import { Contract } from "@ethersproject/contracts";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { Link } from "react-router-dom";
import { MOCK_DAI_CONTRACT, MUMBAI_CHAIN_ID } from "../../constants";
import { formatEther } from "@ethersproject/units";
import toast from "react-hot-toast";

import { Body } from "../../components";
import NavBar from "../../components/NavBar";
import Mint from "../../components/Mint";

export const MintPage = () => {
	// Read more about useDapp on https://usedapp.io/
	// const { error: contractCallError, value: tokenBalance } =
	// 	useCall({
	// 		contract: new Contract(addresses.ceaErc20, abis.erc20),
	// 		method: "balanceOf",
	// 		args: ["0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C"],
	// 	}) ?? {};
	// console.log("contractCallError", contractCallError);
	// console.log("tokenBalance", tokenBalance);
	// const { loading, error: subgraphQueryError, data } = useQuery(GET_TRANSFERS);

	const { account, chainId } = useEthers();
	React.useEffect(() => {
		if (chainId !== MUMBAI_CHAIN_ID) {
			toast.error("Please change to Mumbai Network!");
		}
	}, [chainId]);

	const tokenBalance = useTokenBalance(MOCK_DAI_CONTRACT, account);
	console.log("tokenBalance", tokenBalance);
	if (tokenBalance) {
		console.log("tokenBalance :>> ", formatEther(tokenBalance));
	}

	// React.useEffect(() => {
	// 	if (subgraphQueryError) {
	// 		console.error("Error while querying subgraph:", subgraphQueryError.message);
	// 		return;
	// 	}
	// 	if (!loading && data && data.transfers) {
	// 		console.log({ transfers: data.transfers });
	// 	}
	// }, [loading, subgraphQueryError, data]);
	return (
		<Body>
			<NavBar />

			<Mint />
			<Link className="btn btn-style-blue-light btn-mp link" to="/">
				back to main page
			</Link>
		</Body>
	);
};
