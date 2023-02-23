import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import { CarouselItem } from "./CarouselItem";

const MaxWidthContainer = styled.div`
  display: grid;
  position: relative;
  margin: 0 auto;
  grid-template-rows: auto auto 24px;
  grid-template-columns: minmax(24px, auto) minmax(auto, 1300px) minmax(
      24px,
      auto
    );
  grid-template-areas:
    ". heading ."
    ". carousel ."
    ". . .";
`;

const Heading = styled.h1`
  grid-area: heading;
  margin: 24px 0;
`;


const Reviews = ({ testimonials }) => {
  return (
    <MaxWidthContainer>
      <Heading>Reviews</Heading>
      <Carousel>
        {testimonials && testimonials.map(
          ({author_name, relative_time_description, profile_photo_url, rating, text}) =>
            <CarouselItem 
              time={relative_time_description}
              rating={rating}
              author={author_name}
              photo={profile_photo_url}
              comments={text}
            />
        )}
      </Carousel>
    </MaxWidthContainer>
  );
};

export default Reviews;

