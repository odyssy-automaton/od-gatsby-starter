import React from 'react'
import { Link } from 'gatsby'
import Brand from '../../../images/Brutal__Icon.png'
import TopNav from '../topNav/TopNav'

import './header.scss'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="Header__Contents">
      <Link className="Logo" to="/">
        <img src={Brand} alt="Brand" />
        <h1 className="Logo__Type">
            {siteTitle}
        </h1>
      </Link>
      <TopNav />
    </div>
  </div>
)

export default Header
