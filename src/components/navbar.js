import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
    return (
        <>
            <nav style = { {listStyleType: "none"} } >
                <li><Link to="/">Go back to the homepage</Link></li>
                <li><Link to="/page-2/">Go to page 2</Link></li>
                <li><Link to="/location/">Where are we</Link></li>
            </nav>
        </>
    )

}

export default NavBar;