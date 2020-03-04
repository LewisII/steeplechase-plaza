import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Events = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { frontmatter: { layout: { eq: "event" } } }
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
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>
            <p>{node.frontmatter.title}</p>
            <p>{node.frontmatter.info}</p>
            <img
              src={node.frontmatter.eventImage}
              alt={node.frontmatter.eventImage}
            />
          </div>
        ))}
      </div>
    )}
  ></StaticQuery>
)

export default Events
