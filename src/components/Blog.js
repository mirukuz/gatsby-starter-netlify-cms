import React from 'react'
import styled from "styled-components";
import { Link } from 'gatsby'
import { SecondaryButton } from './Button';
import BlogRoll from './BlogRoll';

const MaxWidthContainer = styled.div`
  display: grid;
  position: relative;
  background-color: #F5F5F5;
  margin: 0 auto;
  grid-template-rows: auto 1fr;
  grid-template-columns: minmax(24px,auto) minmax(auto, 1300px) minmax(24px,auto);
  grid-template-areas:
    ". heading ."
    ". blog ."
    ". readmore .";
`;

const Heading = styled.h1`
  grid-area: heading;
  margin: 24px auto;
`;

const ReadMore = styled(Link)`
  grid-area: readmore;
  z-index: 1;
  margin-top: 24px;
`;
const BlogTmeplate = (props) => {
  return (
    <MaxWidthContainer>
      <Heading>
        Latest deals from our clients
      </Heading>
      <BlogRoll />
      <ReadMore to="/blog">
        <SecondaryButton>
          Read more
        </SecondaryButton>
      </ReadMore>
      <svg style={{ position: "absolute", bottom: 0 }} viewBox="0 0 1511 168" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1516 167.5L1 1V167.5H1516Z" fill="white" stroke="white"/>
      </svg>
    </MaxWidthContainer>
  )
};

export default BlogTmeplate;