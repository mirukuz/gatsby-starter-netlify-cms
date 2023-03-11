import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";
import Hamburger from "hamburger-react";
import { useTranslation } from "react-i18next";

const Container = styled.nav`
  grid-area: nav;
  z-index: 10;
  display: grid;
  grid-template-columns: 16em 1fr 48px;
  grid-template-areas: "logo . nav";
  @media only screen and (min-width: 960px) {
    grid-template-columns: 16em 1fr auto;
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
    height: 5em;
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
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #f2f1eb;
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
  const { t, i18n } = useTranslation();
  return (
    <Container role="navigation" aria-label="main-navigation">
      <MenuIcon>
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
      </MenuIcon>
      <Logo />
      <Overlay isOpen={isOpen}>
        <Ul>
          <Li>
            <StyledLink to="/services">{t("services")}</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/blog">{t("client_cases")}</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/#contact">{t("contact")}</StyledLink>
          </Li>
        </Ul>
        <LanguageSwitch>
          <Li>
            <StyledLink to="/" onClick={() => i18n.changeLanguage("en")}>
              EN
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/cn" onClick={() => i18n.changeLanguage("cn")}>
              中文
            </StyledLink>
          </Li>
        </LanguageSwitch>
      </Overlay>
    </Container>
  );
};

export default Navbar;
