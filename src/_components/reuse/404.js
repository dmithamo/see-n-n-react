import React from 'react';

const FourOhFour = () => {
  const { searchTerm } = localStorage;
  return (
    <div className="four-oh-four">
      <h1>404</h1>
      <div>
        <p>Sorry.</p>
        <p>
          {`We looked everywhere, but found no articles containing the term "${searchTerm}".`}
        </p>
        <a
          href="/">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default FourOhFour;