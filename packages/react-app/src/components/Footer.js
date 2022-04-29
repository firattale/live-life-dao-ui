import React from "react";

export default function Footer() {
	return (
		<footer>
			<h5>LifeLive DAO © 2022</h5>
			<div className="icon-container icons-footer">
				<a className="footer-link zoom" href="mailto: contact@lifelivedao.com" target="_blank" rel="noreferrer">
					<h5>contact</h5>
				</a>
				<a className="zoom" href="https://twitter.com/LifeLiveDAO" target="_blank" rel="noreferrer">
					<img className="footer-icon" src="icons/Twitter.svg" alt="Twitter-Icon" />
				</a>
				<a className="zoom" href="https://t.me/lifelivedao" target="_blank" rel="noreferrer">
					<img className="footer-icon" src="icons/Telegram.svg" alt="Telegram-Icon" />
				</a>
				<a className="zoom" href="https://www.instagram.com/lifelivedao/" target="_blank" rel="noreferrer">
					<img className="footer-icon" src="icons/Insta.svg" alt="Insta-Icon" />
				</a>
			</div>
		</footer>
	);
}
