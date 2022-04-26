import React, { useState, useEffect } from "react";

import { ContainerMint, Container } from ".";
import MintIntro from "./MintPage/MintIntro";
import Golden from "./MintPage/Golden";
import Guestlist from "./MintPage/Guestlist";
import NftImage from "./MintPage/NftImage";

export default function MintPage({
	onGuestListClick,
	onGoldenClick,
	availableGoldenNFT,
	totalSupplyGoldenNFT,
	availableGuestListNFT,
	totalSupplyGuestListNFT,
}) {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 1000;

	const updateWidth = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	return (
		<Container>
			<ContainerMint>
				{width < breakpoint && <MintIntro />}
				<Golden onGoldenClick={onGoldenClick} />
				<Guestlist onGuestListClick={onGuestListClick} />
			</ContainerMint>
			{width > breakpoint && <NftImage />}
		</Container>
	);
}
