import React from 'react';
import { TrafficLights } from './components/TrafficLights';
import './App.css';

export default function App() {
  return (
    <main className="app-container">
      <h1>Компонентна модель «Світлофора» (CP1)</h1>

      <section className="demo-section">
        <h2>Вертикальний світлофор</h2>
        <TrafficLights orientation="vertical" />
      </section>

      <section className="demo-section">
        <h2>Горизонтальний світлофор</h2>
        <TrafficLights orientation="horizontal" />
      </section>
    </main>
  );
}