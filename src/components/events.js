import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { frontmatter: { layout: { eq: "events" } } }
        ) {
          edges {
            node {
              frontmatter {
                info
                title
                eventImage
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

export default ComponentName
