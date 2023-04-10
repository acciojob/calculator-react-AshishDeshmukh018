import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [storedValue, setStoredValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleDigitClick = (digit) => {
    if (displayValue === '0') {
      setDisplayValue(digit);
    } else {
      setDisplayValue(displayValue + digit);
    }
  };

  const handleOperatorClick = (nextOperator) => {
    const nextValue = parseFloat(displayValue);

    if (storedValue == null) {
      setStoredValue(nextValue);
    } else if (operator) {
      const currentValue = storedValue || 0;
      const result = calculate(currentValue, nextValue, operator);
      setStoredValue(result);
      setDisplayValue(String(result));
    }

    setOperator(nextOperator);
    setDisplayValue('0');
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setStoredValue(null);
    setOperator(null);
  };

  const handleEqualClick = () => {
    const currentValue = storedValue || 0;
    const nextValue = parseFloat(displayValue);
    const result = calculate(currentValue, nextValue, operator);
    setStoredValue(result);
    setDisplayValue(String(result));
    setOperator(null);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="button-row">
        <button onClick={() => handleClearClick()}>AC</button>
        <button onClick={() => handleOperatorClick('/')}>÷</button>
        <button onClick={() => handleOperatorClick('*')}>×</button>
        <button onClick={() => handleOperatorClick('-')}>−</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleDigitClick('7')}>7</button>
        <button onClick={() => handleDigitClick('8')}>8</button>
        <button onClick={() => handleDigitClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleDigitClick('4')}>4</button>
        <button onClick={() => handleDigitClick('5')}>5</button>
        <button onClick={() => handleDigitClick('6')}>6</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleDigitClick('1')}>1</button>
        <button onClick={() => handleDigitClick('2')}>2</button>
        <button onClick={() => handleDigitClick('3')}>3</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleDigitClick('0')}>0</button>
        <button onClick={() => handleDigitClick('.')}>.</button>
        <button onClick={() => handleEqualClick()}>=</button>
      </div>
    </div>
  );
}

export default App;
