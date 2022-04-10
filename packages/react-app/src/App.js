import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { MintPage } from "./pages/MintPage";

import './css/Styles.css'
import './css/NavBar.css'
import './css/Intro.css'
import './css/Project.css'
import	'./css/Feature.css'
import './css/InvestorNfts.css'
import './css/Impressum.css'
import './css/Footer.css'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="mint" element={<MintPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
