import React from "react";
import FullWidthImage from "./FullWidthImage";
import Navbar from "./Navbar";
import Button from "./Button";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const MaxWidthContainer = styled.div`
  display: grid;
  margin: 0 auto;
  min-height: 900px;
  grid-template-rows: 48px 1fr 1fr 1fr;
  grid-template-columns: minmax(24px,auto) minmax(auto, 850px) 450px minmax(24px,auto);
  grid-template-areas:
    ". nav nav ."
    ". . agent ."
    ". headings agent ."
    ". mainpitch agent .";
`;

const BookButton = styled(Button)`
    margin-top: 12px;
    align-self: flex-start;
`;

const HeadingsContainer = styled.div`
    grid-area: headings;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const MainpitchContainer = styled.div`
    grid-area: mainpitch;
    z-index: 1;
`;

const Title = styled.h1`
  color: white;
`;

const Subheading = styled.h3`
  color: white;
  margin-top: 0.25em;
`;

const MainpitchTitle = styled.h1``;

const MainpitchDescription = styled.h3`
    margin-top: 0.25em;
`;

export default ({ img, title, subheading, agent, mainpitch }) => {
  return (
      <MaxWidthContainer>
        <Navbar style={{ gridArea: "nav", zIndex: 1 }} />
        <FullWidthImage img={img}  style={{ gridArea: "1/1/4/5" }}/>
        {(title || subheading) && (
            <HeadingsContainer>
            {/* Any content here will be centered in the component */}
            {title && <Title>{title}</Title>}
            {subheading && <Subheading>{subheading}</Subheading>}
            <BookButton>Book a call today</BookButton>
            </HeadingsContainer>
        )}
        <GatsbyImage
            style={{ gridArea: "agent" }}
            image={agent}
            // This is a presentational image, so the alt should be an empty string
            alt="agent photo"
            formats={["auto", "webp", "avif"]}
        />
        <MainpitchContainer>
            <MainpitchTitle>{mainpitch.title}</MainpitchTitle>
            <MainpitchDescription>{mainpitch.description}</MainpitchDescription>
        </MainpitchContainer> 
      </MaxWidthContainer>
  );
};
