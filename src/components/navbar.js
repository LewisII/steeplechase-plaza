import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
    return (
        <>
            <nav style = { {listStyleType: "none"} } >
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/businesses/">Businesses</Link></li>
                <li><Link to="/location/">Where are we</Link></li>
            </nav>
        </>
    )

}

export default NavBar;