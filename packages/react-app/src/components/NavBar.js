import React from "react";
import { Link } from "react-router-dom";
import { WalletButton } from "./WalletButton";
import { Navbar } from ".";

export default function NavBar() {
	return (
		<Navbar>
			<div>
				<Link to="/">
					<img className="nav-logo zoom" src="icons/Logo.svg" alt="LL-Logo" />
				</Link>
			</div>
			<div className="icon-container">
				<a href="https://twitter.com/LifeLiveDAO" target="_blank" rel="noreferrer">
					<img className="nav-icon zoom" src="icons/Twitter.svg" alt="Twitter-Icon" />
				</a>
				<a href="https://t.me/lifelivedao" target="_blank" rel="noreferrer">
					<img className="nav-icon zoom" src="icons/Telegram.svg" alt="Telegram-Icon" />
				</a>
				<a href="https://www.instagram.com/lifelivedao/" target="_blank" rel="noreferrer">
					<img className="nav-icon zoom" src="icons/Insta.svg" alt="Insta-Icon" />
				</a>
				<WalletButton>Connect Wallet</WalletButton>
			</div>
		</Navbar>
	);
}
