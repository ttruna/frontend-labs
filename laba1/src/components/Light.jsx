import React from 'react';

export function Light({ color = 'gray' }) {
  const lightStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: color,
    boxShadow: `0 0 10px ${color !== 'gray' ? color : 'transparent'}`,
    border: '2px solid #333'
  };

  return <div style={lightStyle} className="light-signal" />;
}

import PropTypes from 'prop-types';

Light.propTypes = {
  color: PropTypes.string.isRequired,
};