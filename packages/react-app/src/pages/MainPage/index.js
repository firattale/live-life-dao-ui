import * as React from "react";

import { Body } from "../../components";
import NavBar from "../../components/NavBar";
import Intro from "../../components/Intro";
import Project from "../../components/Project";
import Features from "../../components/Features";
import InvestorNfts from "../../components/InvestorNfts";
import Impressum from "../../components/Impressum";
import { MintPage } from "../../pages/MintPage";

export const MainPage = () => {
	return (
		<Body>
			<div className="bg-hero">
				<NavBar />
				<Intro />
			</div>
			<Project />
			<Features />
			<InvestorNfts />
			<MintPage />
			<Impressum />
		</Body>
	);
};
