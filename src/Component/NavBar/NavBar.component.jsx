import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav className="navbar bg-primary">
    <h1>
      <i className="fab fa-github"></i> Github Finder
    </h1>
    <ul>
      <li>
        <Link to ='/'>Home</Link>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
