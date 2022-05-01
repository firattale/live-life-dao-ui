import * as React from "react";

import { Body } from "../../components";
import NavBar from "../../components/NavBar";
import Intro from "../../components/Intro";
import Project from "../../components/Project";
import Features from "../../components/Features";
import InvestorNfts from "../../components/InvestorNfts";
import Impressum from "../../components/Impressum";
import { MintPage } from "../../pages/MintPage";
import videoBG from "../../background/hero-video.mp4";
import bgPoster from "../../background/bg-hero.png";

export const MainPage = () => {
	return (
		<Body>
			<div className="bg-hero">
				<video loop autoPlay muted poster={bgPoster}>
					<source src={videoBG} type="video/mp4" />
				</video>
				<div>
					<NavBar />
					<Intro />
				</div>
			</div>
			<Project />
			<Features />
			<InvestorNfts />
			<MintPage />
			<Impressum />
		</Body>
	);
};
