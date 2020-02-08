import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import DirectoryMap from "../components/directoryMap/directoryMap"

var data1 = require('../../_posts/businesses/churchStreetBar.json');
var data2 = require('../../_posts/businesses/cosmic-liquor');
var data3 = require('../../_posts/businesses/covenant-garage-door-co.json');
var data4 = require('../../_posts/businesses/eye-candy-rentals.json');
var data5 = require('../../_posts/businesses/merryMaids.json');
var data6 = require('../../_posts/businesses/sebastian-moving-st-louis.json');
var data7 = require('../../_posts/businesses/the-ink-spot.json');
var data8 = require('../../_posts/businesses/under-renovations.json');
var data9 = require('../../_posts/businesses/zaksBarberShop.json');

const BusinessesPage = () => (
  <Layout>
    <SEO title="Businesses" />
    <h1>Business Directory</h1>
    <DirectoryMap store={businessesArray2} />
  </Layout>
)
const businessesArray2 = [data1, data2,data3,data4,data5,data6,data7,data8,data9];

export default BusinessesPage
