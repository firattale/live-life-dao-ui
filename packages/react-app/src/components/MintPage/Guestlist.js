import React from "react";
import OnBoard from "./OnBoard";

export default function Guestlist({
	onGuestListClick,
	availableGuestListNFT,
	totalSupplyGuestListNFT,
	buyGuestlistNFTState,
}) {
	return (
		<div className="mint-container">
			<div className="div-ticket blue-bg-border">
				<h4 className="h4-desktop no-margin">limited to 100:</h4>
				<h1 className="h1-desktop no-margin">Guestlist</h1>
				<h2 className="h2-desktop no-margin blue">Receive 30% more tokens</h2>
				<div className="rounded blue-border">
					<h1 className="h1-desktop no-margin">min $ 0.5k</h1>
					<h4 className="h4-desktop no-margin">payable in DAI stablecoin</h4>
				</div>
			</div>
			<ul>
				<li className="li-desktop">30% bonus: Your seed sale contribution will be doubled in the next funding round</li>
				<li className="li-desktop">Receive a unique Web3 Raver NFT</li>
				<li className="li-desktop">Access to the seed round lounge</li>
				<li className="li-desktop">Access to all other private lounges</li>
				<li className="li-desktop">A boost to your gamification supplies</li>
			</ul>
			{buyGuestlistNFTState.status === "Success" && <OnBoard />}
			{totalSupplyGuestListNFT !== 0 && (
				<>
					{availableGuestListNFT !== totalSupplyGuestListNFT ? (
						<button className="btn-mint btn-style-blue-solid zoom" onClick={onGuestListClick}>
							{buyGuestlistNFTState.status === "Success" ? "Buy another NFT" : "Buy NFT"}
						</button>
					) : (
						<button className="btn-mint btn-mint-soldout zoom">
							<div>Sold Out</div>
							<span>Follow us on Twitter for the next drop</span>
						</button>
					)}
					<p>
						{availableGuestListNFT}/{totalSupplyGuestListNFT} minted
					</p>
				</>
			)}
		</div>
	);
}
