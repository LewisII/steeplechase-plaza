import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DirectoryMap from "../components/directoryMap"

const BusinessesPage = () => (
  <Layout>
    <SEO title="Businesses" />
    <h1>Business Directory</h1>
    <DirectoryMap store={businessesArray} />
  </Layout>
)

const businessesArray = [
  {
    name: "Church Street Bar",
    location: "435 S Church St, St Peters, MO 63376",
    telephone: "(636)387-7778",
    image_storeFront: "../images/churchStreetBar-storeFront.jpg",
    image_storeFrontAltText: "Store Front of Church Street Bar",
    info:
      "Neighborhood bar with cheap drink prices and live music on Fridays and Saturdays. Come play pool, Golden Tee and other games while you hangout and have a few cocktails.",
  },
  {
    name: "Merry Maids",
    location: "433 S Church St, St Peters, MO 63376",
    telephone: "(636)235-2281",
  },
  {
    name: "Zak's Barber Shop",
    location: "431 S Church St, St Peters, MO 63376",
  },
  {
    name: "Restraunt(need Name)",
    location: "429 S Church St, St Peters, MO 63376",
  },
  {
    name: "Sebastian Moving(St. Louis)",
    location: "427 S Church St, St Peters, MO 63376",
    telephone: "(636)515-9186",
    website: "www.sebastianmovingstlouis.com",
  },
  {
    name: "Eye Candy Rentals",
    location: "425 S Church St, St Peters, MO 63376",
  },
  {
    name: "Convenant Garage Door Co.",
    location: "423 S Church St, St Peters, MO 63376",
    telephone: "(636)734-7238",
    telephone2: "(314)809-4534",
  },
  { name: "Cosmic Liquor", location: "421 S Church St, St Peters, MO 63376" },
  {
    name: "The Ink Spot",
    location: "419 S Church St, St Peters, MO 63376",
    telephone: "(636)387-0504",
    info:
      "Tattoo & Body piercing establishment specializing in custom artwork & piercing by well trained, experience & dedicated artists",
  },
]

export default BusinessesPage
