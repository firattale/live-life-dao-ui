import React from "react";

export default function OnBoard() {
	return (
		<>
			<div className="on-board">
				<div>
					<span>Welcome on board!</span>
					<br></br>
					Your NFT has been successfully minted.<br></br>
					<a
						className="on-board-link"
						target="_blank"
						rel="noopener noreferrer"
						href="https://testnets.opensea.io/account"
					>
						View your NFT on OpenSea
					</a>
				</div>
				<img className="on-board-img" src="icons/rocket-turquoise.svg" alt="turquoise rocket" />
			</div>
		</>
	);
}
