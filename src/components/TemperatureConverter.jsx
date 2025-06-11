import React, { useState, useEffect } from 'react';
import './TemperatureConverter.css'; 

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const toCelsius = (f) => {
    return ((f - 32) * 5) / 9;
  };

  const toFahrenheit = (c) => {
    return (c * 9) / 5 + 32;
  };

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      const f = toFahrenheit(parseFloat(value));
      setFahrenheit(isNaN(f) ? '' : f.toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      const c = toCelsius(parseFloat(value));
      setCelsius(isNaN(c) ? '' : c.toFixed(2));
    }
  };

  return (
    <div className="converter-container">
      <div className="input-group">
        <label htmlFor="celsius">
          Celsius:
        </label>
        <input
          type="number"
          id="celsius"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Temperatura em Celsius"
        />
      </div>
      <div className="input-group">
        <label htmlFor="fahrenheit">
          Fahrenheit:
        </label>
        <input
          type="number"
          id="fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Temperatura em Fahrenheit"
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;