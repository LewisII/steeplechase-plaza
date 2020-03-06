import React from "react"

import Layout from "src/components/layout/layout"
import Image from "src/components/image"
import SEO from "src/components/seo"
import { Link } from "gatsby"
import RandomStore from "src/components/randomStore.js"
/* CSS Imports */
import "src/styles/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="body">
      <div id="main">
        <h1>SteepleChase Plaza</h1>
        <p>
          Centuaries old gathering place to watch the race, join us at
          SteepleChase
        </p>
        <p>435 S Church St, St Peters, MO 63376</p>
        <div id="plazaImage">
          <Image id="img-Main" />
        </div>
      </div>
      <div id="randomStore">
        <RandomStore />
      </div>
      <div id="seeMore" className="card">
        <Link className="links" id="seeMoreLink" to="/businesses/">
          See More businesses
        </Link>
      </div>
      <div id="events" className="card">
        <Link className="links" id="eventsLink" to="/events/">
          See Local Events
        </Link>
      </div>
      <div id="coupons" className="card">
        <Link className="links" id="couponsLink" to="/coupons/">
          See Local coupons
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
