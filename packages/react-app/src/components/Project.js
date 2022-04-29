import React from "react";

export default function Project() {
	return (
		<>
			<div className="img-overl-container">
				<img className="overlapping-hero-bg" src="inbetween/in-between-crp.png" alt="overlapping balls" />
				<img className="overlapping-hero" src="inbetween/overlapping.png" alt="overlapping balls" />
			</div>
			<div className="container">
				<div className="heading heading-padding side-padding">The Project</div>
				<div className="text-container side-padding">
					<p className="text">
						LifeLive launched in 2021 as a{" "}
						<a className="in-txt-link" href="https://www.lifelive.io" target="_blank" rel="noreferrer">
							{" "}
							digital web2 platform{" "}
						</a>
						in Berlin, connecting nightlife connoisseurs, ravers, and lonely hearts to their favorite artists, labels,
						and venues. One experimental festival quickly led to a series of 6 virtual festivals that year, bringing
						together thousands of fans with some of the biggest names in the Berlin music ecosystem and showing
						attendees new ways to interact online.
					</p>
					<br></br>
					<br></br>
					<p className="text">
						Think Twitch meets Tinder meets Chatroulette - but with rockets and glitter and a mutual love for music!
					</p>
					<br></br>
					<p className="text">
						Now in 2022, we’re taking LifeLive to web3. Our vision is to enable a direct connection between artists and
						fans, shaking up the current system controlled by middlemen, and promote a new wave of global talent in
						inclusive nightlife settings. We are setting up a DAO to help progressively decentralize the platform,
						enabling our community to design and manage their own events and to become involved in the evolution of
						LifeLive itself - from rewards structure to feature sets to team hiring.
					</p>
				</div>
				<button className="btn btn-style-blue-light zoom margin-top">
					<a
						className="link"
						href="https://drive.google.com/file/d/1xs-bvwmNUumlscIphOXIIbnsazDGbNrw/view"
						target="_blank"
						rel="noreferrer"
					>
						Read litepaper
					</a>
				</button>
				<div className="img-container">
					<img className="img-astronaut" src="inbetween/astronaut.jpg" alt="Astronaut" />
				</div>
			</div>
		</>
	);
}
