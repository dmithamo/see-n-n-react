import React from 'react';

// Import news container
import Logo from './logo';
import NavBar from './navBar';
import NewsItemsContainer from './newsItemsContainer';

const LandingPage = () => (
  <div className="container-fluid">
    <Logo />
    <div className="row-grid">
      <NavBar />
      <NewsItemsContainer />
    </div>
  </div>
);

export default LandingPage;
