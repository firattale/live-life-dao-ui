import * as React from "react";

import { Body } from "../../components";
import NavBar from "../../components/NavBar";
import HeaderMain from "../../components/HeaderMain";
import Project from "../../components/Project";
import Features from "../../components/Features";
import InvestorNfts from "../../components/InvestorNfts";
import Impressum from "../../components/Impressum";
import Footer from "../../components/Footer";


export const MainPage = () => {
	return (
		<>
		{/* VIDEO BG */}
		{/* <video id="bg-video-hero" autoPlay loop muted >
			<source src="../../../public/background/Krypto-WEBfront-pre6.mp4" type="video/mp4"/>
		</video> */}
			<NavBar />
			<Body>
				<HeaderMain />
				<Project />
				<Features />
				<InvestorNfts />
				<Impressum />
				<Footer />
			</Body>
		</>
	);
};
