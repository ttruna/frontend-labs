import React from 'react';
import { Light } from './Light';
import './TrafficLights.css';

export function TrafficLights({ orientation = 'vertical' }) {
  const orientationClass = orientation === 'horizontal' ? 'traffic-lights--horizontal' : 'traffic-lights--vertical';

  return (
    <div className={`traffic-lights ${orientationClass}`}>
      <Light color="red" />
      <Light color="yellow" />
      <Light color="green" />
    </div>
  );
}

import PropTypes from 'prop-types';

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};
