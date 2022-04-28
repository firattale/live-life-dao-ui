import React from "react";

export default function Features() {
	return (
		<div className="container heading-padding">
			<div className="heading text-container side-padding ">Core Features</div>
			<div className="text text-container">
				<div className="feature">
					<img className="feature-icon" src="features/dance.svg" alt="discoball" />
					<div className="feature-text">
						<div className="feature-title">Dance2Earn</div>
						<div>
							Dance-loving denizens of the LifeLive metaverse will be rewarded for their 
							moves through a fun and innovative mechanic we call Dance2Earn. 
							The digital experience platform we are building has a pixel 
							tracking feature implemented and we’re also playing with full 
							body tracking algorithms. 
						</div>
					</div>
				</div>
				<div className="feature">
					<img className="feature-icon" src="features/social.svg" alt="rocket" />
					<div className="feature-text">
						<div className="feature-title">Social gamification</div>
						<div>
							One of the hardest things to accomplish when you deal with a bunch of strangers is helping them 
							connect with each other without causing frustration. So, logically, we’re giving you rockets. 
							These can be sent to other guests - if you think they’ve earned them. Bust a move, 
							come dressed to impress, chat with people, and gather enough rockets to activate further social gamification features.
						</div>
					</div>
				</div>
				<div className="feature">
					<img className="feature-icon" src="features/date.svg" alt="heart" />
					<div className="feature-text">
						<div className="feature-title">Dating</div>
						<div>
							You can’t really talk about nightlife and events without mentioning dating. 
							Why swipe for hours when you can enjoy music and interact with others 
							naturally in a stress-free environment? Our ambition is to onboard 
							a new generation of users into the online dating landscape - sharing 
							experiences instead of apps.
						</div>
					</div>
				</div>
			</div>
			<div className="img-container">
				<img className="img-robot" src="inbetween/robot.jpg" alt="Robot" />
			</div>
		</div>
	);
}
