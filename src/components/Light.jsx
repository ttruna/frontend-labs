import PropTypes from 'prop-types';
import './Light.css';

export default function Light({ color }) {
  // Компонент не знає, який колір "правильний", він просто застосовує те, що прийшло через props
  return (
    <div 
      className="light" 
      style={{ backgroundColor: color }}
    ></div>
  );
}

// Додаткове завдання: перевірка типів під час виконання
Light.propTypes = {
  color: PropTypes.string.isRequired,
};