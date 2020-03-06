import React from "react"
import StoreCard from "src/components/storeCard"
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
          render={data => 
            <StoreCard store={[...data.allMarkdownRemark.edges][Math.floor(Math.random() * 7)].node.frontmatter} /> //Math.floor(Math.random() * 7) evalutes a random store to show remove later to change based on more stores
    }
    />
      </div>
    )
  }
}

export default RandomStore
