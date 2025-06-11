import { useState } from 'react'
import TemperatureConverter from './components/TemperatureConverter';
import viteLogo from '/vite.svg'
import './App.css'

  function App() {
    return (
      <div className="App">
        <h1>Conversor de Temperatura</h1>
        <TemperatureConverter />
      </div>
    );
  }
  
  export default App;