import React from "react";
import FullWidthImage from "./FullWidthImage";
import Navbar from "./Navbar";
import Button from "./Button";
import styled from "styled-components";
import { Link, navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const MaxWidthContainer = styled.div`
  display: grid;
  margin: 0 auto;
  min-height: 720px;
  grid-template-rows: 8em 3em 1.2fr 1fr;
  grid-template-columns: minmax(24px, auto) minmax(auto, 1300px) minmax(
      24px,
      auto
    );
  grid-template-areas:
    ". nav ."
    ". . ."
    ". headings ."
    ". mainpitch .";

    @media only screen and (max-width: 1280px) and (min-width: 960px) {
      min-height: 960px;
    grid-template-rows: 8em 4em 1.2fr 1fr;
    grid-template-columns: minmax(24px, auto) minmax(auto, 850px) 450px minmax(
        24px,
        auto
      );
    grid-template-areas:
      ". nav nav ."
      ". . agent ."
      ". headings agent ."
      ". mainpitch agent .";
  }
  
  @media only screen and (min-width: 1280px) {
    min-height: 960px;
    grid-template-rows: 8em 1fr 2fr 2fr;
    grid-template-columns: minmax(24px, auto) minmax(auto, 850px) 450px minmax(
        24px,
        auto
      );
    grid-template-areas:
      ". nav nav ."
      ". . agent ."
      ". headings agent ."
      ". mainpitch agent .";
  }
`;

const BookButton = styled(Button)`
  margin-top: 24px;
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
  margin-top: 24px;
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

const LearnMore = styled(Link)`
  font-size: 1.6rem;
  line-height: 4rem;
  color: #365b6d;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #637f8d;
  }
`;

const Agent = styled(GatsbyImage)`
  grid-area: agent;
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

export default ({ img, title, subheading, agent, mainpitch }) => {
  return (
    <MaxWidthContainer>
      <Navbar style={{ gridArea: "nav", zIndex: 10 }} />
      <FullWidthImage
        img={img}
        withCurve={true}
        style={{ gridArea: "1/1/4/5" }}
      />
      {(title || subheading) && (
        <HeadingsContainer>
          {/* Any content here will be centered in the component */}
          {title && <Title>{title}</Title>}
          {subheading && <Subheading>{subheading}</Subheading>}
          <BookButton
            onClick={() => {
              navigate("/#contact");
            }}
          >
            Book a call today
          </BookButton>
        </HeadingsContainer>
      )}
      <Agent
        image={agent}
        // This is a presentational image, so the alt should be an empty string
        alt="agent photo"
        formats={["auto", "webp", "avif"]}
      />
      <MainpitchContainer>
        <MainpitchTitle>{mainpitch.title}</MainpitchTitle>
        <MainpitchDescription>{mainpitch.description}</MainpitchDescription>
        <LearnMore to="/services">Learn more &#8250;</LearnMore>
      </MainpitchContainer>
    </MaxWidthContainer>
  );
};
