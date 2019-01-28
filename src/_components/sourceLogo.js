import React from 'react';
import PropTypes from 'prop-types';

const SourceLogo = (props) => {
  const { source } = props;
  return (
    <div>
      <h1>{source}</h1>
    </div>
  );
};


SourceLogo. propTypes = {
  source: PropTypes.string.isRequired,
};

export default SourceLogo;