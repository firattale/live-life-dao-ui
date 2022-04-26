import React from "react";

export default function Features() {
	return (
		<div className="container heading-padding">
			<div className="heading text-container side-padding ">Core Features</div>
			<div className="text text-container">
				<div className="feature">
					<img className="feature-icon" src="features/dance.svg" alt="discoball" />
					<div className="feature-text">
						<div className="feature-title">Dance 2 Earn</div>
						<div>
							Our nightlife metaverse will introduce a fun and innovative mechanic allowing users to dance and earn,
							through the use of an already working pixel tracking feature.
						</div>
					</div>
				</div>
				<div className="feature">
					<img className="feature-icon" src="features/social.svg" alt="rocket" />
					<div className="feature-text">
						<div className="feature-title">Social Gamification</div>
						<div>
							How to make sure a bunch of initial strangers will start to interact and have fun together? Our
							ice-breaking features will blow your mind and make you virtually high five your best friend's granny.
						</div>
					</div>
				</div>
				<div className="feature">
					<img className="feature-icon" src="features/date.svg" alt="heart" />
					<div className="feature-text">
						<div className="feature-title">Dating</div>
						<div>
							What’s one of the most essential parts of nightlife? Exactly! And wouldn’t it be a zillion times cooler to
							accidentally run into someone interesting at a hybrid party than swiping for hours?
						</div>
					</div>
				</div>
			</div>
			<div className="img-container">
				<img className="img-robot" src="/inbetween/robot.jpg" alt="Robot" />
			</div>
		</div>
	);
}
