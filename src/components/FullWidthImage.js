import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

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
        {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
            }}
            // This is a presentational image, so the alt should be an empty string
            alt=""
          />
        ) : (
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
        )}

        {withCurve && <svg style={{ position: "absolute", bottom: 0 }} viewBox="0 0 1512 141" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" fill-opacity="1" d="M617 0C820.889 3.47527e-06 1215.03 29.7209 1512 82.7191V141H0V36.4036C37.2969 23.1115 387.5 -3.9118e-06 617 0Z" fill="white"/>
        </svg>}
      </Container>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
