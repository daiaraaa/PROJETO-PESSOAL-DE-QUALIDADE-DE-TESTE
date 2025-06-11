import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TemperatureConverter from '../components/TemperatureConverter'

describe('Renderização inicial dos campos de entrada', () => {
 
  test('1. Renderização inicial dos campos de entrada', () => {
    render(<TemperatureConverter />);
    expect(screen.getByLabelText(/Celsius/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Fahrenheit/i)).toBeInTheDocument();
  });

 
  test('2. Conversão de Celsius para Fahrenheit', () => {
    render(<TemperatureConverter />);
    const celsiusInput = screen.getByLabelText(/Celsius/i);
    fireEvent.change(celsiusInput, { target: { value: '0' } });
    expect(screen.getByLabelText(/Fahrenheit/i)).toHaveValue(32.00);
  });

  
  test('3. Conversão de Fahrenheit para Celsius', () => {
    render(<TemperatureConverter />);
    const fahrenheitInput = screen.getByLabelText(/Fahrenheit/i);
    fireEvent.change(fahrenheitInput, { target: { value: '32' } });
    expect(screen.getByLabelText(/Celsius/i)).toHaveValue(0.00);
  });

 
  test('4. Atualiza Fahrenheit quando Celsius muda', () => {
    render(<TemperatureConverter />);
    const celsiusInput = screen.getByLabelText(/Celsius/i);
    fireEvent.change(celsiusInput, { target: { value: '100' } });
    expect(screen.getByLabelText(/Fahrenheit/i)).toHaveValue(212.00);
  });

  
  test('5. Atualiza Celsius quando Fahrenheit muda', () => {
    render(<TemperatureConverter />);
    const fahrenheitInput = screen.getByLabelText(/Fahrenheit/i);
    fireEvent.change(fahrenheitInput, { target: { value: '212' } });
    expect(screen.getByLabelText(/Celsius/i)).toHaveValue(100.00);
  });

 
  test('6. Limpa ambos os campos quando Celsius é limpo', () => {
    render(<TemperatureConverter />);
    const celsiusInput = screen.getByLabelText(/Celsius/i);
    const fahrenheitInput = screen.getByLabelText(/Fahrenheit/i);

    fireEvent.change(celsiusInput, { target: { value: '25' } });
    expect(fahrenheitInput).toHaveValue(77.00);

    fireEvent.change(celsiusInput, { target: { value: '' } });
    expect(celsiusInput).toHaveValue(null); 
    expect(fahrenheitInput).toHaveValue(null);
  });

 
  test('7. Limpa ambos os campos quando Fahrenheit é limpo', () => {
    render(<TemperatureConverter />);
    const celsiusInput = screen.getByLabelText(/Celsius/i);
    const fahrenheitInput = screen.getByLabelText(/Fahrenheit/i);

    fireEvent.change(fahrenheitInput, { target: { value: '77' } });
    expect(celsiusInput).toHaveValue(25.00);

    fireEvent.change(fahrenheitInput, { target: { value: '' } });
    expect(fahrenheitInput).toHaveValue(null);
    expect(celsiusInput).toHaveValue(null);
  });

  test('8. Não converte valores não numéricos em Celsius', () => {
    render(<TemperatureConverter />);
    const celsiusInput = screen.getByLabelText(/Celsius/i);
    fireEvent.change(celsiusInput, { target: { value: 'abc' } });
    expect(screen.getByLabelText(/Celsius/i)).toHaveValue(null);
    expect(screen.getByLabelText(/Fahrenheit/i)).toHaveValue(null);
  });

  test('9. Não converte valores não numéricos em Fahrenheit', () => {
    render(<TemperatureConverter />);
    const fahrenheitInput = screen.getByLabelText(/Fahrenheit/i);
    fireEvent.change(fahrenheitInput, { target: { value: 'xyz' } });
    expect(screen.getByLabelText(/Fahrenheit/i)).toHaveValue(null);
    expect(screen.getByLabelText(/Celsius/i)).toHaveValue(null);
  });

 
  test('10. Conversão de Celsius para Fahrenheit com valor negativo', () => {
    render(<TemperatureConverter />);
    const celsiusInput = screen.getByLabelText(/Celsius/i);
    fireEvent.change(celsiusInput, { target: { value: '-10' } });
    expect(screen.getByLabelText(/Fahrenheit/i)).toHaveValue(14.00);
  });
});