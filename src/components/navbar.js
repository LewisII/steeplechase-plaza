import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  /*const webLinks = [
    { address: "/", title: "HomePage" },
    { address: "/businesses/", title: "Businesses" },
    { address: "/location/", title: "Where are we" },
  ]
  */
    return (
      <>
        <ul id="navBar" style={{ listStyleType: "none" }}>
          <li style={{display: "inline" }}>
            <Link to="/">Homepage</Link>
          </li>
          <li style={{ display: "inline" }}>
            <Link to="/businesses/">Businesses</Link>
          </li>
          <li style={{ display: "inline" }}>
            <Link to="/location/">Where are we</Link>
          </li>
        </ul>
      </>
    )

}

export default NavBar;