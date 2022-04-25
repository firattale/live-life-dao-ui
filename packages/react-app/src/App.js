import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { MintPage } from "./pages/MintPage";

import "./css/Styles.css";
import "./css/NavBar.css";
import "./css/Intro.css";
import "./css/Project.css";
import "./css/Features.css";
import "./css/InvestorNfts.css";
import "./css/Impressum.css";
import "./css/Footer.css";
import "./css/MintPage.css";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="mint" element={<MintPage />} />
				</Routes>
			</BrowserRouter>
			<Toaster />
		</>
	);
}

export default App;
