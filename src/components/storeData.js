import React from "react"
import { StaticQuery, graphql } from "gatsby"

const StoreData = () => (
  <StaticQuery
    query={graphql`
      {
        __typename
        allMarkdownRemark(
          filter: {
            frontmatter: {
              layout: { eq: "businessData" }
              status: { eq: true }
            }
          }
        ) {
          edges {
            node {
              html
              frontmatter {
                store
                location
                info
                googleMapsLink
                storeFrontImage
                telephone
                website
              }
            }
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default StoreData
