import React from "react";
import FullWidthImage from "./FullWidthImage";
import Navbar from "./Navbar";
import styled from "styled-components";

const MaxWidthContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-rows: 24px 130px 1fr;
  grid-template-columns: minmax(24px,auto) minmax(auto, 1300px) minmax(24px,auto);
  grid-template-areas:
    ". . ."
    ". nav ."
    ". title .";
    background: linear-gradient(0.25turn, #74653F, #08201A);;
`;


const Title = styled.h1`
  grid-area: title;
  color: #f2f1eb;
  text-align: center;
  align-self: center;
  z-index:1;
  margin-bottom: 24px;
`;
export default ({ location, img, title }) => {
  return (
      <MaxWidthContainer>
        <Navbar location={location} style={{ gridArea: "nav", zIndex: 10 }} />
        {title && <Title>{title}</Title>}
        <FullWidthImage img={img} height={title ? 360 : 130} style={{ gridArea: "1/1/3/4" }}/>
      </MaxWidthContainer>
  );
};
