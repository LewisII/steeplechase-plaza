import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
export default () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "images/SteepleChase-Plaza-Full.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <Layout>
            <h1>I love my corgi!</h1>
            <Img
                fluid={data.file.childImageSharp.fluid}
                alt="A corgi smiling happily"
            />
        </Layout>
    )
}