import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../img/logo.png";

const Container = styled.nav`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 88px auto;
`;

const Ul = styled.ul`
  width: 100%;
  grid-area: 1/2;
  display: flex;
`;

const Li = styled.li`
  display: flex;
  padding: 36px 24px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Navbar = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="main-navigation"
      {...props}
    >
      <Container>
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </Link>
          {/* Hamburger menu */}
          {/* <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button> */}
        </div>
        <Ul>
            <Li>
            <StyledLink to="/services">
              Services
            </StyledLink>
            </Li>
            <Li>
            <StyledLink to="/blog">
              Client cases
            </StyledLink>
            </Li>
            <Li>
            <StyledLink to="/#contact">
              Contact
            </StyledLink>
            </Li>
        </Ul>
      </Container>
    </nav>
  );
};

export default Navbar;
