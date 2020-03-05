import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { frontmatter: { layout: { eq: "coupon" } } }
        ) {
          edges {
            node {
              frontmatter {
                info
                title
                image
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div style={{ display: `flex` }}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div style={{ border: `.125rem solid black`, margin: `1rem`, padding:`.5rem` }}>
            <p>{node.frontmatter.title}</p>
            <p>{node.frontmatter.info}</p>
            <img
              src={node.frontmatter.couponImage}
              alt={node.frontmatter.couponImage}
            />
          </div>
        ))}
      </div>
    )}
  ></StaticQuery>
)

export default ComponentName
