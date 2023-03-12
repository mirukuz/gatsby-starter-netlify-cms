import * as React from "react";
import { Link } from "gatsby";
import Logo from "./Logo";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const MaxWidthContainer = styled.div`
  position: relative;
  background-color: #0e100a;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  @media only screen and (min-width: 960px) {
    display: grid;
    grid-template-rows: 24px auto 48px;
    grid-template-columns:
      minmax(24px, auto) minmax(auto, 200px) minmax(auto, 1000px)
      minmax(24px, auto);
    grid-template-areas:
      ". . . ."
      ". logo link ."
      ". copyright copyright ."
      ". . . .";
    grid-template-columns:
      minmax(24px, auto) minmax(auto, 300px) minmax(auto, 900px)
      minmax(24px, auto);
  }
`;

const Menu = styled.div`
  grid-area: link;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (min-width: 960px) {
    align-items: center;
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  color: #f2f1eb;
  text-decoration: none;
  margin: 16px 0;
  &:not(:first-child), &:not(:last-child) {
    margin: 8px 0;
  }
`;

const CopyRight = styled.div`
  grid-area: copyright;
  margin: 8px auto;
  color: #f2f1eb;
`;

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <MaxWidthContainer>
      <Logo/>
      <Menu>
        <StyledLink to="/services">{t("services")}</StyledLink>
        <StyledLink to="/blog">{t("client_cases")}</StyledLink>
        <StyledLink to="/#contact">{t("contact")}</StyledLink>
        <StyledLink to="/private-policy">Private Policy</StyledLink>
      </Menu>
      <CopyRight>@ 2023 Benny AU Properties - All rights reserved. </CopyRight>
    </MaxWidthContainer>
  );
};

export default Footer;
