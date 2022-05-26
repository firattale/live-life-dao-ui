import React from "react";
import OnBoard from "./OnBoard";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { numberWithCommas } from "../../helpers";

export default function Golden({ onGoldenClick, availableGoldenNFT, totalSupplyGoldenNFT, buyGoldenNFTState }) {
	const [sliderValue, setSliderValue] = React.useState(50000);
	const handleChange = (event, newValue) => {
		setSliderValue(newValue);
	};
	return (
		<>
			<div className="mint-container">
				<div className="div-ticket">
					<h4 className="h4-desktop no-margin">limited to 20:</h4>
					<h1 className="h1-desktop no-margin">Golden Ticket</h1>
					<h2 className="h2-desktop no-margin orange">Receive 100% boost</h2>
					<div className="rounded">
						<h1 className="h1-desktop no-margin">
							min <span className="dollar-sign">$</span> 50k
						</h1>
						<h4 className="h4-desktop no-margin">payable in DAI stablecoin</h4>
					</div>
				</div>
				<ul>
					<li className="li-desktop">
						You are among our strongest supporters and we will reward you with a 100% boost on top of your contribution					
					</li>
					<li className="li-desktop">Receive a unique Web3 Raver NFT</li>
					<li className="li-desktop">Access to the seed round lounge</li>
					<li className="li-desktop">Access to all other private lounges</li>
					<li className="li-desktop">A large boost to your gamification supplies</li>
				</ul>
				{buyGoldenNFTState.status === "Success" && <OnBoard />}
				<Stack
					spacing={1}
					mb={2}
					p={"8px 24px"}
					style={{ textAlign: "center", border: "3px #F0A450 solid", borderRadius: "8px" }}
				>
					<Typography style={{ fontFamily: "Montserrat" }}>
						How much do you want to contribute in the seed sale?
					</Typography>
					<Slider
						aria-label="Golden Ticket"
						value={sliderValue}
						onChange={handleChange}
						step={1000}
						size="small"
						min={50000}
						max={200000}
						sx={{
							"& .MuiSlider-thumb": {
								color: "#F0A450",
							},
							"&": {
								color: "white",
							},
						}}
					/>
					<Typography style={{ textAlign: "center", fontFamily: "Montserrat" }}>
						{numberWithCommas(sliderValue)} DAI
					</Typography>
				</Stack>
				{totalSupplyGoldenNFT !== 0 && (
					<>
						{availableGoldenNFT !== totalSupplyGoldenNFT ? (
							<button className="btn-mint btn-style-orange-solid zoom" onClick={() => onGoldenClick(sliderValue)}>
								{buyGoldenNFTState.status === "Success" ? "Buy another" : "Buy"}
							</button>
						) : (
							<button className="btn-mint btn-mint-soldout zoom">
								<div>Sold Out</div>
								<span>
									Follow us on{" "}
									<a href="https://twitter.com/LifeLiveDAO" target="_blank" rel="noreferrer">
										Twitter
									</a>{" "}
									and join our{" "}
									<a href="https://t.me/lifelivedao" target="_blank" rel="noreferrer">
										Telegram
									</a>{" "}
									to learn about the next drop
								</span>
							</button>
						)}
						<p>
							{availableGoldenNFT}/{totalSupplyGoldenNFT} sold
						</p>
					</>
				)}
			</div>
			<img className="img-mint-mobile img-mint-margin" src="nft/nft2.jpg" alt="nft2" />
		</>
	);
}
