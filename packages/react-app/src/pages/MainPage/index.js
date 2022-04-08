import * as React from "react";

import { Body } from "../../components";
import NavBar from "../../components/NavBar";
import HeaderMain from "../../components/HeaderMain";

export const MainPage = () => {
	return (
		<div className="bg-hero">
			<NavBar />
			<Body>
				<HeaderMain />
			</Body>
		</div>
	);
};
