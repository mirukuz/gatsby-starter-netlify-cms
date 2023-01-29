import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const Article = styled.div`
  border-radius: 50%;
`;
const Meta = styled.div``;
const Header = styled.header``;
const Title = styled(Link)``;
const Date = styled.span``;
const Excerpt = styled.p``;

const BlogCard = ({post}) => {
  return (
    <Article>
      <header>
        {post?.frontmatter?.featuredimage && (
          <div className="featured-thumbnail">
            <PreviewCompatibleImage
              imageInfo={{
                image: post.frontmatter.featuredimage,
                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                width:
                  post.frontmatter.featuredimage.childImageSharp.gatsbyImageData
                    .width,
                height:
                  post.frontmatter.featuredimage.childImageSharp.gatsbyImageData
                    .height,
              }}
            />
          </div>
        )}
        <Meta>
          <Title to={post.fields.slug}>{post.frontmatter.title}</Title>
          <Date>{post.frontmatter.date}</Date>
        </Meta>
      </header>
      <Excerpt>{post.excerpt}</Excerpt>
      {post.excerpt}
      <Link className="button" to={post.fields.slug}>
        Keep Reading →
      </Link> 
    </Article>
  );
};

export default BlogCard;
