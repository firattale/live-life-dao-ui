import React from "react";
import { ContainerMint, Container } from ".";
import Golden from "./MintPage/Golden";
import Guestlist from "./MintPage/Guestlist";
import MintInfo from "./MintPage/MintInfo";
import NftImage from "./MintPage/NftImage";

export default function MintPage({
	onGuestListClick,
	onGoldenClick,
	availableGoldenNFT,
	totalSupplyGoldenNFT,
	availableGuestListNFT,
	totalSupplyGuestListNFT,
	buyGoldenNFTState,
	buyGuestlistNFTState,
}) {
	return (
		<Container>
			<NftImage />
			<ContainerMint>
				<Golden
					onGoldenClick={onGoldenClick}
					availableGoldenNFT={availableGoldenNFT}
					totalSupplyGoldenNFT={totalSupplyGoldenNFT}
					buyGoldenNFTState={buyGoldenNFTState}
				/>
				<Guestlist
					onGuestListClick={onGuestListClick}
					availableGuestListNFT={availableGuestListNFT}
					totalSupplyGuestListNFT={totalSupplyGuestListNFT}
					buyGuestlistNFTState={buyGuestlistNFTState}
				/>
			</ContainerMint>
			<MintInfo />
		</Container>
	);
}
