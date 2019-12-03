import React, { useState } from "react";
import { Link } from 'gatsby';

import "./TopNav.scss";
const TopNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const hamburgerClass = navOpen
    ? 'navbar__hamburger hamburger hamburger--spin is-active'
    : 'navbar__hamburger hamburger hamburger--spin';

  const mobileNavClass = navOpen
    ? 'TopNav__Mobile TopNav__Mobile--Open'
    : 'TopNav__Mobile';

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <>
      <nav className="TopNav__Desktop">
        <Link to="/">
          Home
        </Link>
        <Link to="/library">
          Library
        </Link>
      </nav>
      {/* Start Hamburger */}
      <button
          className={hamburgerClass}
          type="button"
          onClick={toggleNav}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <div className={mobileNavClass}>
          <div className="TopNav__Mobile--Contents">
            <Link to="/" onClick={toggleNav}>
              Home
            </Link>
            <Link to="/library" onClick={toggleNav}>
              Library
            </Link>
          </div>
        </div>
        {/* End Hamburger */}
      </>
  );
};

export default TopNav;
