import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import DirectoryMap from "../components/directoryMap/directoryMap"

const BusinessesPage = () => (
  <Layout>
    <SEO title="Businesses" />
    <h1>Business Directory</h1>
    <DirectoryMap store={businessesArray} />
  </Layout>
)

console.log(businessesArray2);
const businessesArray = [
  {
    name: "Church Street Bar",
    status: "open",
    location: "435 S Church St, St Peters, MO 63376",
    googleMapsLink: "https://g.page/church-street-bar?share",
    telephone: "(636)387-7778",
    image_storeFront:
      "../../images/churchStreetBar/churchStreetBar_storeFront.jpg",
    info:
      "Neighborhood bar with cheap drink prices and live music on Fridays and Saturdays. Come play pool, Golden Tee and other games while you hangout and have a few cocktails.",
  },
  {
    name: "Merry Maids",
    status: "open",
    location: "433 S Church St, St Peters, MO 63376",
    telephone: "(636)235-2281",
    info:
      "At Merry Maids, Our goal is to handle all of your cleaning-related needs and our maid service is desinged to make your life easier and free up the valuable time you'd otherwise spend cleaning. We offer weekly, bi-weekly and monthly service along with one time cleanings.",
    image_storeFront: "../../images/merryMaids/merryMaids_storeFront.jpg",
  },
  {
    name: "Zak's Barber Shop",
    status: "open",
    location: "431 S Church St, St Peters, MO 63376",
    telephone: "(636) 448-2347",
    website: "http://www.zaksbarbershop.com",
    image_storeFront:
      "../../images/zak'sBarberShop/zak'sBarberShop_storeFront.jpg",
  },
  {
    name: "Under renovations",
    status: "closed",
    location: "429 S Church St, St Peters, MO 63376",
  },
  {
    name: "Sebastian Moving(St. Louis)",
    status: "open",
    location: "427 S Church St, St Peters, MO 63376",
    telephone: "(636)515-9186",
    website: "http://www.sebastianmovingstlouis.com",
    image_storeFront:
      "../../images/sebastianMoving/sebastianMoving_storeFront.jpg",
  },
  {
    name: "Eye Candy Rentals",
    status: "open",
    location: "425 S Church St, St Peters, MO 63376",
    telephone: "(314)952-0108",
    website: "http://www.eyecandyrentals.com",
    image_storeFront:
      "../../images/eyeCandyRentals/eyeCandyRentals_storeFront.jpg",
    info:
      "Photography rental studio complete with complimentary sets and props",
  },
  {
    name: "Covenant Garage Door Co.",
    status: "open",
    location: "423 S Church St, St Peters, MO 63376",
    image_storeFront:
      "../../images/covenantGarageDoorCo/covenantGarageDoorCo_storeFront.jpg",
    telephone: "(636)734-7238",
    telephone2: "(314)809-4534",
  },
  {
    name: "Cosmic Liquor",
    status: "open",
    location: "421 S Church St, St Peters, MO 63376",
    googleMapsLink: "https://goo.gl/maps/yp5y1hBjUtRkb4py8",
    image_storeFront: "../../images/cosmicLiquor/cosmicLiquor_storeFront.jpg",
    telephone: "(636) 279-2929",
  },
  {
    name: "The Ink Spot",
    status: "open",
    location: "419 S Church St, St Peters, MO 63376",
    telephone: "(636)387-0504",
    image_storeFront: "../../images/inkSpot/inkSpot_storeFront.jpg",
    info:
      "Tattoo & Body piercing establishment specializing in custom artwork & piercing by well trained, experience & dedicated artists",
  },
]

export default BusinessesPage
