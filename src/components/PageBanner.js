import React from "react";
import FullWidthImage from "./FullWidthImage";
import Navbar from "./Navbar";
import styled from "styled-components";

const MaxWidthContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-rows: 130px 1fr;
  grid-template-columns: minmax(24px,auto) 1fr minmax(24px,auto);
  grid-template-areas:
    ". nav ."
    ". title .";
    background: linear-gradient(0.25turn, #74653F, #08201A);;
`;


const Title = styled.h1`
  grid-area: title;
  color: white;
  z-index: 1;
  text-align: center;
  align-self: center;
`;
export default ({ img, title }) => {
  return (
      <MaxWidthContainer>
        <Navbar style={{ gridArea: "nav", zIndex: 1 }} />
        {title && <Title>{title}</Title>}
        <FullWidthImage img={img} height={title ? 360 : 130} style={{ gridArea: "1/1/4/5" }}/>
      </MaxWidthContainer>
  );
};
