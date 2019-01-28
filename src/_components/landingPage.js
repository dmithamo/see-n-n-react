import React from 'react';

// Import news container
import NavBar from './navBar';
import NewsItemsContainer from './newsItemsContainer';

const LandingPage = () => (
  <div className="cover-empty">
    <NavBar />
    <NewsItemsContainer />
  </div>
);

export default LandingPage;
