import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { Link } from "gatsby";
import Content, { HTMLContent } from "../components/Content";

const MaxWidthContainer = styled.div`
  display: grid;
  position: relative;
  background-color: #f5f5f5;
  margin: 0 auto;
  padding: 48px 0;
  grid-template-columns: minmax(24px, auto) minmax(auto, 1300px) minmax(
      24px,
      auto
    );
  grid-template-areas:
    ". content ."
    ". book .";
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

export const ServicesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <PageBanner title={title} />
      <MaxWidthContainer>
        <PageContent style={{ gridArea: "content" }} content={content} />
        <LearnMore style={{ gridArea: "book" }} to="/#contact">Book a call today &#8250;</LearnMore>
      </MaxWidthContainer>
    </>
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
      }
    }
  }
`;
