import * as React from "react";
// import { addresses, abis } from "@my-app/contracts";
// import GET_TRANSFERS from "../../graphql/subgraph";
// import { useQuery } from "@apollo/client";
// import { Contract } from "@ethersproject/contracts";
import { useEthers, useEtherBalance, useTokenBalance } from "@usedapp/core";
import { Body, Button, Container, Header } from "../../components";
import { Link } from "react-router-dom";
import { WalletButton } from "../../components/WalletButton";
import { formatEther } from "@ethersproject/units";
import { MOCK_DAI_CONTRACT } from "../../constants";
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
		<>
			<Container>
				<Header>
					<WalletButton />
					<Button onClick={deactivate}>{account ? "Disconnect" : "Connected"}</Button>
				</Header>
				<Body>
					<h1>Mint Page</h1>
					<h1>Account Balance:{tokenBalance ? tokenBalance.toLocaleString() : ""}</h1>
					<Button>Mint Golder NFT</Button>
					<Button>Mint GuestList NFT</Button>
					<Link to="/">Link to Home Page</Link>
				</Body>
			</Container>
		</>
	);
};
