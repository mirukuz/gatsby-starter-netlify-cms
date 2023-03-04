import * as React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import logo from "../img/logo.png";

const MaxWidthContainer = styled.div`
  display: grid;
  position: relative;
  background-color: #0E100A;
  margin: 0 auto;
  grid-template-rows: 24px auto 48px ;
  grid-template-columns: minmax(24px,auto) minmax(auto, 200px) minmax(auto, 1000px) minmax(24px,auto);
  grid-template-areas:
    ". . . ."
    ". logo link ."
    ". copyright copyright ."
    ". . . .";
  @media only screen and (min-width: 960px) {
    grid-template-columns: minmax(24px,auto) minmax(auto, 300px) minmax(auto, 1000px) minmax(24px,auto);
  }
`;

const Logo = styled.div`
  grid-area: logo;
`;

const Menu = styled.div`
  grid-area: link;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (min-width: 960px) {
    flex-direction: row;
  }
`;

const MenuCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 24px;
`;

const CopyRight = styled.div`
  grid-area: copyright;
  margin: 8px auto;
  color: white;
`;

const Footer = () => {
  return (
    <MaxWidthContainer>
      <Logo>
        <img
          src={logo}
          alt="bennyauproperty"
          style={{ width: "10em", height: "10em" }}
        />
      </Logo>
      <Menu>
        <MenuCol>
          <StyledLink to="/">
            Terms and Condition
          </StyledLink>
          <StyledLink to="/">
            Private Policy
          </StyledLink>
        </MenuCol>
        <MenuCol>
          <StyledLink to="/">
            About Us
          </StyledLink>
          <StyledLink to="/blog">
            Successful Deals
          </StyledLink>
        </MenuCol>
        <MenuCol>
          <StyledLink to="/#contact">
            Contact Us
          </StyledLink>
          <StyledLink to="/services">
            Services
          </StyledLink>
        </MenuCol>
      </Menu>
      <CopyRight>@ 2023 Benny AU Properties - All rights reserved. </CopyRight>

    </MaxWidthContainer>
  )
}

export default Footer;
