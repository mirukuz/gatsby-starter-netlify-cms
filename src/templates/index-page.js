import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Reviews from "../components/Reviews";
import BlogRoll from "../components/BlogRoll";
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
      <BlogRoll />
      <Reviews testimonials={testimonials}/>
      <Contact />
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
            gatsbyImageData(width: 360, quality: 100, layout: CONSTRAINED)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
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
