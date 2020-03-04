import React from "react"
import StoreCard from "src/components/storeCard/storeCard"
import { StaticQuery, graphql } from "gatsby"

class RandomStore extends React.Component {
  render() {
    return (
      <div>
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
                limit: 1
                skip: 2
              ) {
                edges {
                  node {
                    frontmatter {
                      googleMapsLink
                      info
                      layout
                      location
                      store
                      storeFrontImage
                      telephone
                      title
                      website
                    }
                  }
                }
              }
            }
          `}
          render={data => (
              data.allMarkdownRemark.edges.map(({node}) => (
              <StoreCard store={node.frontmatter} />) )
          )}
        />
      </div>
    )
        }
}

export default RandomStore
