import { Typography } from "@mui/material";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";
import { addresses, abis } from "@my-app/contracts";

export const MUMBAI_RPC_NODE = "https://rpc-mumbai.matic.today";

const sellerInterface = new utils.Interface(abis.seller.abi);
const mockDAIInterface = new utils.Interface(abis.mockDai.abi);
const ticketNFTInterface = new utils.Interface(abis.ticketNFT.abi);

export const sellerContract = new Contract(addresses.sellerContract, sellerInterface);
export const mockDAIContract = new Contract(addresses.mockDaiContract, mockDAIInterface);
export const goldenNFTContract = new Contract(addresses.goldenNFTContract, ticketNFTInterface);
export const guestLiftNFTContract = new Contract(addresses.guestLiftNFTContract, ticketNFTInterface);

export const dialogContentNoMetamask = (
	<Typography>
		Please install MetaMask (
		<a href="https://metamask.io" target="_blank" rel="noreferrer">
			https://metamask.io/
		</a>
		). If you are not sure how to do that, you can get support in our Telegram group:{" "}
		<a href="https://t.me/lifelivedao" target="_blank" rel="noreferrer">
			https://t.me/lifelivedao
		</a>
	</Typography>
);

export const dialogWrongNetwork = (
	<Typography>
		Please change your network to Polygon Mainnet. If you are not sure how to do that, you can get support in our
		Telegram group:{" "}
		<a href="https://t.me/lifelivedao" target="_blank" rel="noreferrer">
			https://t.me/lifelivedao
		</a>
	</Typography>
);
