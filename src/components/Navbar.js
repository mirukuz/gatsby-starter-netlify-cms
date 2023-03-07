import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../img/logo.png";
import Hamburger from "hamburger-react";

const Container = styled.nav`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 8em 1fr 48px;
  grid-template-areas: "logo . nav";
  @media only screen and (min-width: 960px) {
    grid-template-columns: 8em 1fr auto;
    grid-template-areas: "logo nav";
  }
`;

const Overlay = styled.div`
  grid-area: nav;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 80vw;
  transform: ${({ isOpen }) =>
    isOpen ? `translateX(0)` : `translateX(-80vw)`};
  transition: transform 0.3s ease-in-out;
  background-color: #060808;
  justify-content: space-between;
  @media only screen and (min-width: 960px) {
    transform: none;
    transition: none;
    position: initial;
    width: 100%;
    height: auto;
    background-color: transparent;
    display: flex;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 960px) {
    flex-direction: row;
  }
`;

const MenuIcon = styled.div`
  grid-area: nav;
  @media only screen and (min-width: 960px) {
    display: none;
  }
`;

const Li = styled.li`
  display: flex;
  padding: 36px 24px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  @media only screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;

const LanguageSwitch = styled.ul`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 960px) {
    flex-direction: row;
  }
`;

const Navbar = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav role="navigation" aria-label="main-navigation" {...props}>
      <Container>
        <MenuIcon>
          <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
        </MenuIcon>
        <Link to="/" className="navbar-item" title="Logo">
          <img
            src={logo}
            alt="Benny AU Properties"
            style={{ width: "6em", height: "6em" }}
          />
        </Link>
        <Overlay isOpen={isOpen}>
          <Ul>
            <Li>
              <StyledLink to="/services">Services</StyledLink>
            </Li>
            <Li>
              <StyledLink to="/blog">Client cases</StyledLink>
            </Li>
            <Li>
              <StyledLink to="/#contact">Contact</StyledLink>
            </Li>
          </Ul>
          <LanguageSwitch>
            <Li>
              <StyledLink to="/#contact">EN</StyledLink>
            </Li>
            <Li>
              <StyledLink to="/#contact">中文</StyledLink>
            </Li>
          </LanguageSwitch>
        </Overlay>
      </Container>
    </nav>
  );
};

export default Navbar;
