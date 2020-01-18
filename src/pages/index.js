import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>SteepleChase Plaza</h1>
    <p>We are your solution for quick access to bussinesses located at SteepleChase Plaza</p>
    <p>Located at 435 S Church St, St Peters, MO 63376</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
