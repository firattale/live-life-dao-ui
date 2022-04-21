import React from "react";

export default function Footer() {
	return (
		<footer>
			<h5>LifeLive DAO © 2022</h5>
			<div className="icon-container icons-footer">
				<a className="footer-link" href="#contact">
					<h5>contact</h5>
				</a>
				<a href="https://twitter.com/LifeLiveDAO">
					<img className="footer-icon" src="icons/Twitter.svg" alt="Twitter-Icon" />
				</a>
				<a href="/medium">
					<img className="footer-icon" src="icons/Medium.svg" alt="Medium-Icon" />
				</a>
				<a href="https://www.instagram.com/lifelivedao/">
					<img className="footer-icon" src="icons/Insta.svg" alt="Insta-Icon" />
				</a>
			</div>
		</footer>
	);
}
