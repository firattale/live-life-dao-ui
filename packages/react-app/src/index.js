import "./index.css";

import { DAppProvider, Mumbai } from "@usedapp/core";
import React from "react";
import ReactDOM from "react-dom";
import { MUMBAI_RPC_NODE } from "./constants";
import App from "./App";

// Change this to your own Infura project id: https://infura.io/register
// const INFURA_PROJECT_ID = "defba93b47f748f09fcead8282b9e58e";
const config = {
	readOnlyChainId: Mumbai.chainId,
	readOnlyUrls: {
		[Mumbai.chainId]: MUMBAI_RPC_NODE,
	},
};

ReactDOM.render(
	<React.StrictMode>
		<DAppProvider config={config}>
			<App />
		</DAppProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
