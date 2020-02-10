import React from "react"

import Layout from "src/components/layout/layout"
import Image from "src/components/image"
import SEO from "src/components/seo"
import DirectoryMap from "src/components/directoryMap/directoryMap.js"

var data1 = require('../../_posts/businesses/churchStreetBar.json');

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>SteepleChase Plaza</h1>
    <p>
      We are your solution for quick access to businesses located at
      SteepleChase Plaza
    </p>
    <p>Located at 435 S Church St, St Peters, MO 63376</p>
    <div style={{ maxWidth: `1200px`, marginBottom: `1.45rem` }}>
      <Image />
      <DirectoryMap store={[data1]}/>
    </div>
  </Layout>
)

export default IndexPage
