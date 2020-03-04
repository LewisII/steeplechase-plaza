import React from "react"
import { StaticQuery, graphql } from "gatsby"
import StoreCard from "src/components/storeCard/storeCard"
import "src/components/storeCard/storeCard.css"

class DirectoryMap extends React.Component {
  render() {
    return (
        <StaticQuery
          query={graphql`
            {
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
          render={data => (
            <div id="directoryMap">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <StoreCard store={node.frontmatter} />
              ))}
            </div>
          )}
        ></StaticQuery>
    )
  }
}
export default DirectoryMap
