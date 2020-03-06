import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
const gmapsurl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.516504950114!2d-90.63076252106626!3d38.78992207012024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ded7081c1a85b5%3A0x57d258fe3edac867!2sSteepleChase%20Plaza!5e1!3m2!1sen!2sus!4v1579383911159!5m2!1sen!2sus"

const LocationPage = () => (
  <Layout>
    <SEO title="Location Page" />
    <div
      id="locationPage"
      style={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        textAlign: `center`,
      }}
    >
      <h1>Where we are Located</h1>
      <p>We are located at 435 S Church St, St Peters, MO 63376</p>
      <p>The cross roads of Mexico road and S Church Street</p>
      <div style={{width:`90%=vmin`,height:`90vmin`,justifyContent:`center`}}>
        <iframe
          title="iframe_googleMaps"
          src={gmapsurl}
          frameborder=""
          width="100%"
          height="100%"
          allowfullscreen=""
        />
      </div>
    </div>
  </Layout>
)

export default LocationPage
