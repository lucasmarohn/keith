import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {Navbar} from 'rbx'
import 'rbx/index.css'

const Header = ({ siteTitle }) => (
  <Navbar>
    <Navbar.Brand>
      <Navbar.Item>
        <Link to="/">
          Keith Deeds Music
        </Link>
      </Navbar.Item>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Item to="/contact">
        <Link to="/get-started">Get Started</Link>
      </Navbar.Item>
    </Navbar.Menu>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
