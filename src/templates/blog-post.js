import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";
import PageBanner from "../components/PageBanner";

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
  grid-template-areas: ". content .";
`;

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  location,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <>
      <PageBanner location={location} />
      {helmet || ""}
      <MaxWidthContainer>
        <div style={{ gridArea: "content" }}>
          <h1>{title}</h1>
          <p>{description}</p>
          <PostContent location={location} content={content} />
        </div>
      </MaxWidthContainer>
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  location: PropTypes.object,
};

const BlogPost = ({ location, data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        location={location}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  location: PropTypes.object,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
