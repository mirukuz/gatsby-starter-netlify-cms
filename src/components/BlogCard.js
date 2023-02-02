import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const Article = styled(Link)`
  border-radius: 10px;
  background-color: white;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
const Content = styled.div`
  padding: 16px 24px;
`;
const Excerpt = styled.p`
    color: black;
`;

const BlogCard = ({ post }) => {
  return (
    <Article to={post.fields.slug}>
      {post?.frontmatter?.featuredimage && (
        <div className="featured-thumbnail">
          <PreviewCompatibleImage
            imageStyle={{
              borderRadius: "10px 10px 0 0",
            }}
            imageInfo={{
              image: post.frontmatter.featuredimage,
              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
            }}
          />
        </div>
      )}
      <Content>
        {/* <Title to={post.fields.slug}>{post.frontmatter.title}</Title> */}
        <Excerpt>{post.excerpt}</Excerpt>
        {/* <Link className="button" to={post.fields.slug}>
          Keep Reading →
        </Link> */}
      </Content>
    </Article>
  );
};

export default BlogCard;
