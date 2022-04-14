import * as React from "react";
// import { addresses, abis } from "@my-app/contracts";
// import GET_TRANSFERS from "../../graphql/subgraph";
// import { useQuery } from "@apollo/client";
// import { Contract } from "@ethersproject/contracts";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { Link } from "react-router-dom";
import { WalletButton } from "../../components/WalletButton";
import { MOCK_DAI_CONTRACT } from "../../constants";

import { Body, Button } from "../../components";
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

	const { account, activate, deactivate, chainId } = useEthers();
	// console.log("account", account);

	const tokenBalance = useTokenBalance(MOCK_DAI_CONTRACT, account);
	// console.log("chainId", chainId);
	// console.log("tokenBalance", tokenBalance);
	// console.log("tokenBalance :>> ", tokenBalance && formatEther(tokenBalance));

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
			<WalletButton />
			<Button onClick={deactivate}>{account ? "Disconnect" : "Connected"}</Button>

			<Mint />
			{/* <Button className='btn-mint btn-style-orange-solid'>Mint NFT</Button> */}
			{/* <Button className='btn-mint btn-style-blue-solid'>Mint NFT</Button> */}
			<Link className="btn btn-style-blue-light btn-mp link" to="/">
				back to main page
			</Link>
		</Body>
	);
};
