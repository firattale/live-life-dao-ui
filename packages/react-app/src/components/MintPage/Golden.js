import React from "react";
import OnBoard from "./OnBoard";

export default function Golden({ onGoldenClick, availableGoldenNFT, totalSupplyGoldenNFT }) {
	return (
		<div className="mint-container">
			<div className="div-ticket">
				<h4 className="h4-desktop no-margin">limited to 20 NFTs</h4>
				<h1 className="h1-desktop no-margin">Golden Ticket Tier</h1>
				<h2 className="h2-desktop no-margin orange">Receive 100% more tokens</h2>
				<div className="rounded">
					<h1 className="h1-desktop no-margin">$ 50K</h1>
					<h4 className="h4-desktop no-margin">payable in DAI stablecoin</h4>
				</div>
			</div>
			<ul>
				<li className="li-desktop">Your investment counts double in the next funding round;</li>
				<li className="li-desktop">Access to the Seed Round Lounge;</li>
				<li className="li-desktop">Access to all other private lounges;</li>
				<li className="li-desktop">A large boost to your gamification supplies.</li>
			</ul>
			<OnBoard />
			{availableGoldenNFT !== totalSupplyGoldenNFT ? (
				<button className="btn-mint btn-style-orange-solid" onClick={onGoldenClick}>
					Mint NFT
				</button>
			) : (
				<button className="btn-mint btn-mint-soldout">
					<div>Sold Out</div>
					<span>Follow us on Twitter for the next drop</span>
				</button>
			)}
			<p>
				{availableGoldenNFT}/{totalSupplyGoldenNFT} minted
			</p>
			<img className="img-mint" src="/nft/nft-mint-2.jpg" alt="nft2" />
		</div>
	);
}
