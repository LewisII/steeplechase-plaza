import React from "react"

import Layout from "src/components/layout/layout"
import SEO from "src/components/seo"
import DirectoryMap from "../components/directoryMap"

const BusinessesPage = () => (
  <Layout>
    <SEO title="Businesses" />
    <h1 style={{textAlign: `center`,}}>Business Directory</h1>
    <DirectoryMap />
  </Layout>
)

export default BusinessesPage
