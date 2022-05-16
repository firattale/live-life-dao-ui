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
	margin-right: 9.5vw;
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

export const Container = styled.div`
	width: calc(100vw);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ContainerMint = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 1200px) {
		height: 100%;
		margin-top: 5vh;
		padding-top: 50px;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
	}
`;

export const Link = styled.a.attrs({
	target: "_blank",
	rel: "noopener noreferrer",
})`
	color: white;
	margin-top: 8px;
`;

export const Navbar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	top: 0;
	width: 100vw;
`;
