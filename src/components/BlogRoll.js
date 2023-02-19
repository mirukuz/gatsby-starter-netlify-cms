import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";
import { Link, graphql, StaticQuery } from 'gatsby'
import BlogCard from './BlogCard';
import { SecondaryButton } from './Button';

const MaxWidthContainer = styled.div`
  display: grid;
  position: relative;
  background-color: #F5F5F5;
  margin: 0 auto;
  grid-template-rows: auto 1fr;
  grid-template-columns: minmax(24px,auto) minmax(auto, 1300px) minmax(24px,auto);
  grid-template-areas:
    ". heading ."
    ". blog ."
    ". readmore .";
`;

const Heading = styled.h1`
  grid-area: heading;
  margin: 24px auto;
`;

const Roll = styled.div`
  grid-area: blog;
  z-index: 1;
  column-count: 3;
  column-gap: 16px;
  padding: 0;
`;

const ReadMore = styled(Link)`
  grid-area: readmore;
  z-index: 1;
  margin-top: 24px;
`;

const BlogRollTemplate = (props) => {  
  const { edges: posts } = props.data.allMarkdownRemark;
  return (
    <MaxWidthContainer>
      <Heading>
        Latest Stories
      </Heading>
      <Roll>
        {posts &&
          posts.map(({ node: post }) => (
            <BlogCard post={post} />
          ))}
      </Roll>
      <ReadMore to="/blog">
        <SecondaryButton>
          Read more
        </SecondaryButton>
      </ReadMore>
      <svg style={{ position: "absolute", bottom: 0 }} width="1511" height="168" viewBox="0 0 1511 168" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1516 167.5L1 1V167.5H1516Z" fill="white" stroke="white"/>
      </svg>
    </MaxWidthContainer>
  )
}

BlogRoll.propTypes = {
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
