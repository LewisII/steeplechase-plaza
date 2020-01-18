import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DirectoryMap from "../components/directoryMap"
const businessesArray = [
    {name: "Church Street Bar"},
    {name: "The Ink Spot"},
    {name: "Zak's Barber Shop"},
    {name: "Cosmic Liquor"},
    {name: "Athletic Advantage"}];
const BusinessesPage = () => (
    <Layout>
        <SEO title="Businesses" />
        <h1>Business Directory</h1>
        <DirectoryMap businesses={"Church Street Bar"}/>
    </Layout>
)

export default BusinessesPage
