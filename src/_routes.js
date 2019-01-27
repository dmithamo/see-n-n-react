import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Add routes to the various pages here
import AboutPage from './_components/aboutPage';
import LandingPage from './_components/landingPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/about" component={AboutPage} />
  </Switch>
);

export default Routes;
