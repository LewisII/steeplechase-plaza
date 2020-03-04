import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import {StaticQuery, graphql} from "gatsby"

const CouponsPage = () => (
  <Layout>
    <SEO title="Coupons" />
    <p>Currently In Progress</p>
    <StaticQuery
      query={graphql`
{
  allMarkdownRemark(filter: {frontmatter: {layout: {eq: "businessData"}, status: {eq: true}}}) {
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
        <div>
          {data.allMarkdownRemark.edges.map(node => 
          <div>
          </div>)}
      </div>
        )}
    >
    </StaticQuery>
  </Layout>
)

export default CouponsPage
