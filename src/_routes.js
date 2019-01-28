import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Add routes to the various pages here
import AboutPage from './_components/aboutPage';
import LandingPage from './_components/landingPage';
import FourOhFour from './_components/reuse/404';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/404" component={FourOhFour} />
  </Switch>
);

export default Routes;
