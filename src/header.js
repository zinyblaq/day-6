import React from 'react';
import logo from './react-logo.png';
// import CompanyPage from './companypage';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="header">
      <div className="header-1">
        <Link to="/">
          <img src={logo} alt="logo" width="42.35px" />
          <h1>Flex</h1>
        </Link>
      </div>
      <div className="header-2">
        <ul className="header-lists">
          <li className="header-list">
            <Link to="/companypage">Company</Link>
          </li>
          <li className="header-list">
            <Link to="/how-it-works">How it works</Link>
          </li>

          <li className="header-list">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="header-list">
            <Link to="/partnership">Partnership</Link>
          </li>
          <li className="button-primary">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
