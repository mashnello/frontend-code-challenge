import React from 'react';
import PropTypes from 'prop-types';

const Preloader = ({ message }) => {
  const style = {
    fontSize: 18,
    fontFamily: 'system-ui',
    textAlign: 'center',
  };
  return (
    <p style={style}>
      {message}
    </p>
  );
};

Preloader.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Preloader;
