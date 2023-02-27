import * as React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import logo from "../img/logo.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const MaxWidthContainer = styled.div`
  display: grid;
  position: relative;
  background-color: #0E100A;
  margin: 0 auto;
  grid-template-rows: 24px auto 24px ;
  grid-template-columns: minmax(24px,auto) minmax(auto, 300px) minmax(auto, 1000px) minmax(24px,auto);
  grid-template-areas:
    ". . . ."
    ". logo link ."
    ". . . .";
`;

const Logo = styled.div`
  grid-area: logo;
`;

const Menu = styled.div`
  grid-area: link;
  display: flex;
  justify-content: space-between;
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

const Footer = () => {
  return (
    <MaxWidthContainer>
      <Logo>
        <img
          src={logo}
          alt="bennyauproperty"
          style={{ width: "4em", height: "4em" }}
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

    </MaxWidthContainer>
  )
}

export default Footer;
