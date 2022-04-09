import styled from "styled-components";

export const Body = styled.div`
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 10px;
  @media (min-width: 1000px) {
    font-size: 25px;
  }
`;


export const Button = styled.button`
  width: 222px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  margin: 0px 20px;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Container = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  height: calc(100vh);
`;

export const Header = styled.header`
  width: 60vw;
  color: white;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
  background-color: hotpink;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 5vw;
  padding-left: 5vw;
  @media (min-width: 1000px) {
    padding-right: 10vw;
    padding-left: 10vw;
  }
`;
