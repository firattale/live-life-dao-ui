import React from "react";
import MintInfo from "./MintPage/MintInfo";


export default function InvestorNfts() {
	return (
		<div className="container">
			<div className="heading text-container side-padding">Seed sale</div>
			<div className="text text-container side-padding">
				<p>
					Our goal in the seed sale is to raise initial capital, start expanding our team, and build the first Web3 features. At a later point we will launch a LifeLive token to be used in the governance of the DAO, with eventual staking and more. {" "}
				</p>
				<p>
				As a token of gratitude towards our first supporters, you will receive a Web 3.0 Raver NFT, designed by one of our founders. The NFT also represents your ticket to receive your tokens during the token generation event. Read more about the seed sale in the litepaper and chat with us in our Telegram group.
				</p>
			</div>
			<MintInfo />
			<img className="img-mint img-mint-margin" src="nft/nft1.jpg" alt="nft2" />
		</div>
	);
}
