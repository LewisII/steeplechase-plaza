import React from "react"
import { Link } from "gatsby"

import "./navbar.css"

const webLinks = [
  { address: "/", title: "HomePage" },
  { address: "/businesses/", title: "Businesses" },
  { address: "/location/", title: "Where are we" },
]

const links = webLinks.map(site => {
  return (
    <li class="navLi">
      <Link class="navLiLink" to={site.address}>
        {site.title}
      </Link>
    </li>
  )
})

const NavBar = () => {
  return (
    <>
      <ul id="navBar" style={{ listStyleType: "none" }}>
        {links}
      </ul>
    </>
  )
}

export default NavBar
