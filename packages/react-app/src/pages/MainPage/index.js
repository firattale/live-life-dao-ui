import { Link } from "react-router-dom";
import * as React from "react";
export const MainPage = () => {
	return (
		<>
			<h1>Main Page</h1>
			<Link to="/mint">Link to Mint Page</Link>
		</>
	);
};
