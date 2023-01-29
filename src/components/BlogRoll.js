import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";
import { Link, graphql, StaticQuery } from 'gatsby'
import BlogCard from './BlogCard';

const MaxWidthContainer = styled.div`
  display: grid;
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
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ReadMore = styled(Link)`
  grid-area: readmore;
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
        Read more
      </ReadMore>
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
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
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
