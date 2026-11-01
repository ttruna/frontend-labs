import TrafficLights from './components/TrafficLights';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <h1>Лабораторна робота №1: Світлофор</h1>
      
      <div className="demo-section">
        <h2>Вертикальна орієнтація</h2>
        {/* Передаємо props для вертикального компонування */}
        <TrafficLights orientation="vertical" />
      </div>

      <div className="demo-section">
        <h2>Горизонтальна орієнтація</h2>
        {/* Використовуємо ТОЙ САМИЙ компонент для горизонтального компонування */}
        <TrafficLights orientation="horizontal" />
      </div>
    </div>
  );
}