import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Reviews from "../components/Reviews";
import Blog from "../components/Blog";
import Banner from "../components/Banner";
import Contact from "../components/Contact";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  agent,
  title,
  subheading,
  mainpitch,
  testimonials,
  socialmedia
}) => {
  const heroImage = getImage(image) || image;
  const agentImage = getImage(agent) || agent
  return (
    <div>
      <Banner
        img={heroImage}
        title={title}
        agent={agentImage}
        subheading={subheading}
        mainpitch={mainpitch}
      />
      <Blog />
      <Reviews testimonials={testimonials}/>
      <Contact socialmedia={socialmedia}/>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  agent: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  testimonials: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        agent={frontmatter.agent}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        testimonials={frontmatter.testimonials}
        socialmedia={frontmatter.socialmedia}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        agent {
          childImageSharp {
            gatsbyImageData(width: 360, quality: 100, layout: CONSTRAINED, placeholder: NONE)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        socialmedia {
          name
          link
          qr {
            childImageSharp {
              gatsbyImageData(width: 100, quality: 100, layout: CONSTRAINED)
            }
          }
        }
        testimonials {
          profile_photo_url
          text
          author_name
          rating
          relative_time_description
        }
      }
    }
  }
`;
