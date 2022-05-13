import React from "react";
import OnBoard from "./OnBoard";

export default function Golden({ onGoldenClick, availableGoldenNFT, totalSupplyGoldenNFT, buyGoldenNFTState }) {
	return (
		<>
			<div className="mint-container">
				<div className="div-ticket">
					<h4 className="h4-desktop no-margin">limited to 20:</h4>
					<h1 className="h1-desktop no-margin">Golden Ticket</h1>
					<h2 className="h2-desktop no-margin orange">Receive 100% more tokens</h2>
					<div className="rounded">
						<h1 className="h1-desktop no-margin">min $ 50k</h1>
						<h4 className="h4-desktop no-margin">payable in DAI stablecoin</h4>
					</div>
				</div>
				<ul>
					<li className="li-desktop">100% bonus: Your seed sale contribution will be doubled in the next funding round</li>
					<li className="li-desktop">Receive a unique Web3 Raver NFT</li>
					<li className="li-desktop">Access to the seed round lounge</li>
					<li className="li-desktop">Access to all other private lounges</li>
					<li className="li-desktop">A large boost to your gamification supplies</li>
				</ul>
				{buyGoldenNFTState.status === "Success" && <OnBoard />}
				{totalSupplyGoldenNFT !== 0 && (
					<>
						{availableGoldenNFT !== totalSupplyGoldenNFT ? (
							<button className="btn-mint btn-style-orange-solid zoom" onClick={onGoldenClick}>
								{buyGoldenNFTState.state === "Success" ? "Buy another" : "Buy"}
							</button>
						) : (
							<button className="btn-mint btn-mint-soldout zoom">
								<div>Sold Out</div>
								<span>Follow us on Twitter for the next drop</span>
							</button>
						)}
						<p>
							{availableGoldenNFT}/{totalSupplyGoldenNFT} sold
						</p>
					</>
				)}
			</div>
			<img className="img-mint img-mint-margin" src="nft/nft2.jpg" alt="nft2" />
		</>
	);
}
