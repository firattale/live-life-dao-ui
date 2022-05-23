import "./index.css";

import { DAppProvider, Mainnet } from "@usedapp/core";
import React from "react";
import ReactDOM from "react-dom";
import { MAINNET_RPC_NODE } from "./constants";
import App from "./App";

const config = {
	readOnlyChainId: Mainnet.chainId,
	readOnlyUrls: {
		[Mainnet.chainId]: MAINNET_RPC_NODE,
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
