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
                date
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
          <div
            className=""
            style={{
              border: `.125rem solid black`,
              margin: `1rem`,
              padding: `1rem`,
            }}
          >
            <p>{node.frontmatter.title}</p>
            <p>{node.frontmatter.date}</p>
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
