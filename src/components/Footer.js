import * as React from "react";
import { Link } from "gatsby";
import Logo from "./Logo";
import styled from "styled-components";

const MaxWidthContainer = styled.div`
  display: grid;
  position: relative;
  background-color: #0e100a;
  margin: 0 auto;
  grid-template-rows: 24px auto 48px;
  grid-template-columns:
    minmax(24px, auto) minmax(auto, 200px) minmax(auto, 1000px)
    minmax(24px, auto);
  grid-template-areas:
    ". . . ."
    ". logo link ."
    ". copyright copyright ."
    ". . . .";
  @media only screen and (min-width: 960px) {
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
  align-items: center;
  @media only screen and (min-width: 960px) {
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  color: #f2f1eb;
  text-decoration: none;
  margin-bottom: 24px;
`;

const CopyRight = styled.div`
  grid-area: copyright;
  margin: 8px auto;
  color: #f2f1eb;
`;

const Footer = () => {
  return (
    <MaxWidthContainer>
      <Logo/>
      <Menu>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/blog">Successful Deals</StyledLink>
        <StyledLink to="/#contact">Contact Us</StyledLink>
        <StyledLink to="/private-policy">Private Policy</StyledLink>
      </Menu>
      <CopyRight>@ 2023 Benny AU Properties - All rights reserved. </CopyRight>
    </MaxWidthContainer>
  );
};

export default Footer;
