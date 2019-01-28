import React from 'react';
import NavBar from './navBar';

const AboutPage = () => {

  return(
    <div>
      <NavBar />
      <div className="about-us">
        <h3>Someday we will tell you all about US</h3>
        <div className="logo-color">
          <i className="far fa-newspaper icon-big" />
          <h4>See NN</h4>
        </div>
        <p>
          Built by consuming the API at&nbsp;
          <a href="https://newsapi.org/">the NewsAPI.org</a>
          &nbsp;
        </p>
        <p className="copyright">
          <a href="https://github.com/dmithamo1">&copy;2018&nbsp; dmithamo</a>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;