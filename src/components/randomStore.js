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
              markdownRemark(
                frontmatter: {
                  layout: { eq: "businessData" }
                  status: { eq: true }
                }
              ) {
                frontmatter {
                  title
                  website
                  telephone
                  storeFrontImage
                  store
                  status
                  location
                  info
                  googleMapsLink
                }
              }
            }
          `}
          render={data => <StoreCard store="data"/>}
        ></StaticQuery>
      </div>
    )
  }
}
export default RandomStore
