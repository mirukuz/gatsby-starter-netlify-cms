import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const Article = styled.div`
  border-radius: 10px;
  background-color: white;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  overflow: hidden;
  margin-bottom: 24px;
  width: 100%;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px;
  }
`;
const Content = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
`;
const Attribute = styled.div`
`;

const Title = styled.strong`
`;

const Details = styled.span`
  padding-left: 5px;
`

const BlogCard = ({ post }) => {
  return (
    <Article onClick={() => navigate(post.fields.slug)}>
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
        {post.frontmatter.state && <Attribute><Title>Location: </Title><Details>{post.frontmatter.state}</Details></Attribute>}
        <Attribute><Title>House Type: </Title><Details>{post.frontmatter.housetype}</Details></Attribute>
        <Attribute><Title>Land Size: </Title><Details>{post.frontmatter.landsize}</Details></Attribute>
        <Attribute><Title>Year of Build: </Title><Details>{post.frontmatter.yearofbuild}</Details></Attribute>
        <Attribute><Title>Purchased Date: </Title><Details>{post.frontmatter.purchaseddate}</Details></Attribute>
        <Attribute><Title>Purchased Price: </Title><Details>{post.frontmatter.purchasedprice}</Details></Attribute>
        <Attribute><Title>Bank Desktop Value: </Title><Details>{post.frontmatter.bankdesktopvalue}</Details></Attribute>
        <Attribute><Title>Current Rent: </Title><Details>{post.frontmatter.currentrent}</Details></Attribute>
        <Attribute><Title>Key Point: </Title><Details>{post.frontmatter.keypoint}</Details></Attribute>
      </Content>
    </Article>
  );
};

export default BlogCard;
