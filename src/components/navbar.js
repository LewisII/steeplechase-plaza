import React from "react"
import { Link } from "gatsby"

import "./navbar.css"

const webLinks = [
  { address: "/", title: "Home", status: "active" },
  { address: "/businesses/", title: "Businesses", status: "active" },
  { address: "/location/", title: "Where are we", status: "active" },
  { address: "/contact/", title: "Contact Us", status: "inactive" },
]

const links = webLinks.map(site => {
  if (site.status === "active") {
    return (
      <li class="navLi">
        <Link class="navLiLink" to={site.address}>
          {site.title}
        </Link>
      </li>
    )
  } else {
    return null
  }
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
