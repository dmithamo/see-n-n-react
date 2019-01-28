import React from 'react';

import Logo from './logo';
import SearchBar from './searchBar';


const NavBar = () => {
  return (
    <ul className="header">
      <li>
        <Logo />
      </li>
      <li>
        <SearchBar />
      </li>
      <li className="other-header-items">
        <a className="about-us-nav" href="/about">About US</a>
      </li>
    </ul>
  );
};

export default NavBar;
