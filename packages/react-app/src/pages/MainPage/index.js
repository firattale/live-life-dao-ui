import * as React from "react";

import { Body, Background } from "../../components";
import NavBar from "../../components/NavBar";
import Intro from "../../components/Intro";
import Project from "../../components/Project";
import Features from "../../components/Features";
import InvestorNfts from "../../components/InvestorNfts";
import Impressum from "../../components/Impressum";


export const MainPage = () => {
	return (
		<>
		{/* <div className="video-wrapper">
			<video autoPlay loop>
				<source src="../../background/hero-video.mp4" type="video/mp4"/>
			</video>
		</div> */}
		<Body>
			<div className="bg-hero">
				<NavBar />
				<Intro />
			</div>
			<Project />
			<Features />
			<InvestorNfts />
			<Impressum />
		</Body>
		</>
	);
};
