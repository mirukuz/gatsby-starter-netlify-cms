import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../img/logo.png";

const Logo = styled(Link)`
  grid-area: logo;
  text-decoration: none;
  display: grid;
  grid-column-gap: 0.5rem;
  grid-template-rows: 3.9rem;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "img title"
    "img subtitle";
`;

const LogoTitle = styled.h2`
  grid-area: title;
  color: #f2f1eb;
  font-size: 1.5rem;
  line-height: 1.95rem;
  margin-top: 0;
  font-family: "Oswald", Helvetica, Sans-Serif;
`;

const LogoSubtitle = styled.h3`
  grid-area: subtitle;
  color: #f2f1eb;
  font-size: 0.7rem;
  line-height: 1rem;
  margin-top: 0;
`;

const LogoImg = styled.img`
  grid-area: img;
`;

export default ({to}) => (
  <Logo to={to} className="navbar-item" title="Logo">
    <LogoImg
      src={logo}
      alt="Benny AU Properties"
      style={{ width: "78px", height: "78px" }}
    />
    <LogoTitle>BENNY AU <br/> PROPERTIES</LogoTitle>
    <LogoSubtitle>Real estate buyer agent</LogoSubtitle>
  </Logo>
);
