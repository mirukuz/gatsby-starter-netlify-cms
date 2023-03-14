import React, { useState } from "react";
import { Link, withPrefix } from "gatsby";
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
  height: 100%;
  @media only screen and (min-width: 960px) {
    flex-direction: row;
    width: 100%;
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
  padding: 24px;
  align-items: center;
`;

const Split = styled.div`
  color: #f2f1eb;
  margin: 0 12px;
  font-size: 1.2rem;
`;

const StyledLink = styled(Link)`
  color: #f2f1eb;
  text-decoration: none;
  font-size: 1.5rem;
  @media only screen and (min-width: 960px) {
    line-height: 2.5rem;
    &::after {
      content: "";
      display: block;
      width: ${({ active }) => (active === true ? "100%" : 0)};
      height: 2px;
      background: #fec13e;
      transition: width 0.3s;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

const LanguageSwitch = styled.li`
  display: flex;
  padding: 24px;
  align-items: center;
  flex-direction: row;
  margin-top: auto;
  @media only screen and (min-width: 960px) {
    margin-left: auto;
  }
`;
const pathDict = {
  cn: {
    home: "/cn",
    services: "/cn/services",
    blog: "/blog",
    contact: "/cn/#contact",
  },
  en: {
    home: "/",
    services: "/services",
    blog: "/blog",
    contact: "/#contact",
  },
};
const Navbar = ({ location }) => {
  const [isOpen, setOpen] = useState(false);
  const isCN = location.pathname.includes(withPrefix("/cn"));
  const { t, i18n } = useTranslation();
  const path = isCN ? pathDict.cn : pathDict.en;
  return (
    <Container role="navigation" aria-label="main-navigation">
      <MenuIcon>
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
      </MenuIcon>
      <Logo to={path.home} />
      <Overlay isOpen={isOpen}>
        <Ul>
          <Li>
            <StyledLink to={path.services}>{t("services")}</StyledLink>
          </Li>
          <Li>
            <StyledLink to={path.blog}>{t("client_cases")}</StyledLink>
          </Li>
          <Li>
            <StyledLink to={path.contact}>{t("contact")}</StyledLink>
          </Li>

          <LanguageSwitch>
            <StyledLink
              active={!isCN}
              to={
                isCN
                  ? location.pathname.replace("/cn/", "/")
                  : location.pathname
              }
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </StyledLink>
            <Split>/</Split>
            <StyledLink
              active={isCN}
              to={
                isCN
                  ? location.pathname
                  : location.pathname.replace("/", "/cn/")
              }
              onClick={() => i18n.changeLanguage("cn")}
            >
              中文
            </StyledLink>
          </LanguageSwitch>
        </Ul>
      </Overlay>
    </Container>
  );
};

export default Navbar;
