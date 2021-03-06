import React from "react";
import Footer from "./Footer";

export default function Impressum() {
	return (
		<>
			<div className="bg-rocket">
				<div className="impressum-container">
					{/* <div>
						<div className="heading heading-impressum">FAQ</div>
						<p className="text impressum-width">
							For further questions check our
							<a className="in-txt-link" href="FAQ">
								{" "}
								FAQ
							</a>{" "}
							on medium.
						</p>
					</div> */}
					<div>
						<div className="heading heading-impressum">Get In Touch</div>
						<p className="text impressum-width">
							If you want to get in touch dont hesitate to{" "}
							<a className="zoom in-txt-link" href="mailto: contact@lifelivedao.com" target="_blank" rel="noreferrer">
								{" "}
								write us
							</a>{" "}
							or{" "}
							<a
								className="zoom in-txt-link"
								href="https://calendly.com/lifelive/dao?month=2022-04"
								target="_blank"
								rel="noreferrer"
							>
								{" "}
								schedule a call
							</a>
							.
						</p>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
