import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Events from "src/components/events.js"

const EventsPage = () => (
  <Layout>
    <SEO title="Events" />
    <p>Currently In Progress</p>
    <Events />
  </Layout>
)

export default EventsPage
