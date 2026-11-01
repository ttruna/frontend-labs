import PropTypes from 'prop-types';
import Light from './Light';
import './TrafficLights.css';

export default function TrafficLights({ orientation }) {
  // orientation керує лише CSS-класом, логіка самих ламп залишається спільною
  return (
    <div className={`traffic-lights ${orientation}`}>
      <Light color="red" />
      <Light color="yellow" />
      <Light color="green" />
    </div>
  );
}

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
};
