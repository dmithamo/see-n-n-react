import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="nav nav-tabs navbar">
      <li>
        <NavLink to="/about">About US</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
