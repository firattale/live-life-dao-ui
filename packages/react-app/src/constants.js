import { Typography } from "@mui/material";

export const MOCK_DAI_CONTRACT = "0x620cd9Ed1F8c3cF49147562102F20A7808f1b2f1";
export const MUMBAI_RPC_NODE = "https://rpc-mumbai.matic.today";

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
