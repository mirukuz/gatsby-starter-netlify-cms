import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const Article = styled.div`
  border-radius: 10px;
  background-color: white;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  overflow: hidden;
  margin-bottom: 10px;
  width: 100%;
`;
const Content = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
`;
const Attribute = styled.div`
`;

const Title = styled.strong`
  font-weight: 600;
  color: black;
`;

const Details = styled.span`
  padding-left: 5px;
`

const LearnMore = styled(Link)`
  text-decoration: none;
  margin-top: 16px;
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
        {post.frontmatter.state && <Attribute><Title>Location: </Title><Details>{post.frontmatter.state}</Details></Attribute>}
        <Attribute><Title>House Type: </Title><Details>{post.frontmatter.housetype}</Details></Attribute>
        <Attribute><Title>Land Size: </Title><Details>{post.frontmatter.landsize}</Details></Attribute>
        <Attribute><Title>Year of Build: </Title><Details>{post.frontmatter.yearofbuild}</Details></Attribute>
        <Attribute><Title>Purchased Date: </Title><Details>{post.frontmatter.purchaseddate}</Details></Attribute>
        <Attribute><Title>Purchased Price: </Title><Details>{post.frontmatter.purchasedprice}</Details></Attribute>
        <Attribute><Title>Bank Desktop Value: </Title><Details>{post.frontmatter.bankdesktopvalue}</Details></Attribute>
        <Attribute><Title>Current Rent: </Title><Details>{post.frontmatter.currentrent}</Details></Attribute>
        <Attribute>{post.frontmatter.keypoint}</Attribute>
        <LearnMore to={post.fields.slug}>
          Learn More
        </LearnMore>
      </Content>
    </Article>
  );
};

export default BlogCard;
