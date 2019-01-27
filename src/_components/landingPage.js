import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/about">Kenya Damu</NavLink>
      </li>
    </ul>
    <h4>You landed here!</h4>
  </div>
);


export default LandingPage;