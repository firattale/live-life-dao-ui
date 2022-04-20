import React from "react";
import { Link } from "react-router-dom";

import { Header } from ".";

export default function Intro() {
	return (
		<Header>
			<div className="intro-container">
				<div className="title">LifeLive DAO</div>
				<h2>the nightlife metaverse</h2>
				<p className="text">
					Access virtual and hybrid music events and Dance2Earn with people from all over the world.
				</p>
			</div>
			<div className="btn-main-container">
				<Link className="link" to="/mint">
					<button className="btn btn-style-blue-solid">Buy Investor NFTs</button>
				</Link>
				<button className="btn btn-style-blue-light btn-margin">Download Litepaper</button>
			</div>
		</Header>
	);
}
