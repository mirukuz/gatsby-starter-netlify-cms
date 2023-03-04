import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import banner from "../img/sydney-gradiant.png";

const Container = styled.div`
  position: relative;
  display: grid;
`;

export default function FullWidthImage(props) {
  const {
    height = 650,
    img,
    imgPosition = "top left",
    withCurve = false,
    ...otherProps
  } = props;

  return (
    <Container {...otherProps}>
      {img ? (
        <GatsbyImage
          image={img}
          objectFit={"cover"}
          objectPosition={imgPosition}
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            maxHeight: height,
          }}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          aspectratio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          formats={["auto", "webp", "avif"]}
        />
      ) : (
        <img
          src={banner}
          objectFit={"cover"}
          objectPosition={imgPosition}
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            height: height,
            width: "100%",
            objectFit: "cover"
          }}
          // This is a presentational image, so the alt should be an empty string
          alt=""
        />
      )}

      {withCurve && (
        <svg  style={{ position: "absolute", bottom: -1 }}  viewBox="0 0 1507 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M450 4.5001C1055.5 -16 1506.29 47.5058 1506.29 47.5058L-5.7146 47.5058C-14.2146 47.5058 155.998 14.454 450 4.5001Z" fill="white"/>
        </svg>
        
      )}
    </Container>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
