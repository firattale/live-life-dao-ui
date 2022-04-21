import React from "react";

export default function Guestlist({ onGuestListClick }) {

	return (
		<div className="mint-container">
			<div className="div-ticket blue-bg-border">
				<h4 className="h4-desktop no-margin">limited to 100 NFTs</h4>
				<h1 className="h1-desktop no-margin">Guestlist Tier</h1>
				<h2 className="h2-desktop no-margin blue">Receive 30% more tokens</h2>
				<div className="rounded blue-border">
					<h1 className="h1-desktop no-margin">$ 2K</h1>
					<h4 className="h4-desktop no-margin">payable in DAI stablecoin</h4>
				</div>
			</div>
			<ul>
				<li className="li-desktop">Your investment counts 30% in the next funding round;</li>
				<li className="li-desktop">Access to the Seed Round Lounge;</li>
				<li className="li-desktop">Access to all other private lounges;</li>
				<li className="li-desktop">A large boost to your gamification supplies.</li>
			</ul>
			<button className="btn-mint btn-style-blue-solid" onClick={onGuestListClick}>
				Mint NFT
			</button>
			<img className="img-mint" src="/nft/nft-mint-3.jpg" alt="nft3" />
		</div>
	);
}
