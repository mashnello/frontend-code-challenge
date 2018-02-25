import React from 'react';

const Preloader = ({ message }) => {
  const style = {
    fontSize: 18,
    fontFamily: 'system-ui',
    textAlign: 'center'
  };
  return (
    <p style={style}>
      {message}
    </p>
  );
};

export default Preloader;