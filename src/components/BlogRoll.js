import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";
import { graphql, StaticQuery } from 'gatsby'
import BlogCard from './BlogCard';

const Roll = styled.div`
  grid-area: blog;
  z-index: 1;
  column-count: 3;
  column-gap: 16px;
  padding: 0;
`;

const BlogRollTemplate = (props) => {  
  const { edges: posts } = props.data.allMarkdownRemark;
  return (
    <Roll>
    {posts &&
        posts.slice(0,6).map(({ node: post }) => (
        <BlogCard post={post} />
        ))}
    </Roll>
  )
}

BlogRollTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  housetype
                  landsize
                  yearofbuild
                  purchasedprice
                  purchaseddate
                  bankdesktopvalue
                  currentrent
                  keypoint
                  state
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        layout: FULL_WIDTH
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
