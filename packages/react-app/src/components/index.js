import styled from "styled-components";

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

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: orange;
`;

export const Container = styled.div`
    width: calc(100vw);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.header`
  width: 60vw;
  color: white;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: 1000px) {
    align-items: flex-start;
    margin-top: 25vh;
    margin-left: 10vw;
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

