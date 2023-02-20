import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import Content, { HTMLContent } from "../components/Content";

const Container = styled.div`
`;
// eslint-disable-next-line
export const ServicesPageTemplate = ({ title, content, contentComponent, banner }) => {
  const PageContent = contentComponent || Content;
  const bannerImage = getImage(banner) || banner;
  return (
    <Container>
      <PageBanner title={title} img={bannerImage} />
      <PageContent className="content" content={content} />
    </Container>
  );
};

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const ServicesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ServicesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        banner={post.frontmatter.banner}
      />
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServicesPage;

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        banner {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
