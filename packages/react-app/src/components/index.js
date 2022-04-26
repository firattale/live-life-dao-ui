import styled, { css } from "styled-components";

export const Body = styled.div`
	padding: 0px;
	margin: 0px;
	display: flex;
	flex-direction: column;
	color: white;
	font-size: 10px;
	background-color: #121212;
	@media (min-width: 1000px) {
		font-size: 17px;
	}
`;

export const NavButton = styled.button`
	width: 130px;
	height: 37px;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: bold;
	font-size: 1.4em;
	text-align: center;
	text-decoration: none;
	border-radius: 10px;
	padding: 8px;
	cursor: pointer;
	border: 2px solid #f0a450;

	@media (min-width: 1000px) {
		font-size: 18px;
		width: 185px;
		height: 43px;
	}

	${(props) =>
		props.error &&
		css`
			color: #ee796a;
			border: 2px solid #ee796a;
		`};
`;

export const Button = styled.button`
	width: 222px;
	border-radius: 8px;
	cursor: pointer;
	font-size: 1em;
	margin: 0px 20px;
	text-align: center;
	text-decoration: none;
	font-weight: bold;
	margin-top: 5px;
	margin-bottom: 5px;
	border: 2px solid #f0a450;

	${(props) =>
		props.error &&
		css`
			color: #ee796a;
			border: 2px solid #ee796a;
		`};
`;

export const Container = styled.div`
	width: calc(100vw);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ContainerMint = styled.div`
	width: calc(100vw);
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 1000px) {
		margin-top: 5vh;
		padding-top: 50px;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
	}
`;

export const Header = styled.header`
	width: 68vw;
	color: white;
	padding-left: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	@media (min-width: 1000px) {
		align-items: flex-start;
		margin-top: 35vh;
		margin-left: 4vw;
		padding-left: 0px;
	}
`;

export const Image = styled.img`
	height: 40vmin;
	margin-bottom: 16px;
	pointer-events: none;
`;

export const Link = styled.a.attrs({
	target: "_blank",
	rel: "noopener noreferrer",
})`
	color: white;
	margin-top: 8px;
`;

export const Navbar = styled.nav`
	height: 10vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-right: 5vw;
	@media (min-width: 1000px) {
		padding-right: 10vw;
		padding-left: 1.5vw;
	}
`;
