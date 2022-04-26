import { Link } from "react-router-dom";

export const Page404 = () => {
	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
			<p>Please return to home page</p>
			<Link className="link" to="/">
				<button>Home Page</button>
			</Link>
		</div>
	);
};
