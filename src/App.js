import React, { useState } from 'react';
import './App.css';

function CalcButton({ label, buttonClassName = "CalcButton", onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}

function CalcDisplay({ display }) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>
  );
}

export default function App() {
  const [disp, setDisp] = useState('0');
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const clrClickHandler = () => {
    setDisp('0');
    setNum1(null);
    setNum2(null);
    setOp(null);
  }

  const equalClickHandler = () => {
    if (op && num2) {
      let result;
      switch (op) {
        case 'ADD':
          result = parseInt(num1) + parseInt(num2);
          break;
        case 'SUB':
          result = parseInt(num1) - parseInt(num2);
          break;
        case 'MUL':
          result = parseInt(num1) * parseInt(num2);
          break;
        case 'DIV':
          if (parseInt(num2) !== 0) {
            result = parseInt(num1) / parseInt(num2);
          } else {
            setDisp("Cannot divide by zero");
            return;
          }
          break;
        default:
          setDisp("Invalid Operation");
          return;
      }
      setDisp(result.toString());
      setNum1(result.toString());
      setNum2(null);
      setOp(null);
    }
  }

  const numberClickHandler = (e) => {
    const value = e.target.innerHTML;
    setDisp(disp === '0' ? value : disp + value);
    if (op === null) {
      setNum1(prevNum => (prevNum === null || prevNum === '0') ? value : prevNum + value);
    } else {
      setNum2(prevNum => (prevNum === null || prevNum === '0') ? value : prevNum + value);
    }
  }

  const opClickHandler = (e) => {
    const value = e.target.innerHTML;
    if (num1 && !num2) {
      setOp(value);
      setDisp(value);
    }
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={7} onClick={numberClickHandler} />
          <CalcButton label={8} onClick={numberClickHandler} />
          <CalcButton label={9} onClick={numberClickHandler} />
          <CalcButton label={"ADD"} onClick={opClickHandler} />
          <CalcButton label={4} onClick={numberClickHandler} />
          <CalcButton label={5} onClick={numberClickHandler} />
          <CalcButton label={6} onClick={numberClickHandler} />
          <CalcButton label={"SUB"} onClick={opClickHandler} />
          <CalcButton label={1} onClick={numberClickHandler} />
          <CalcButton label={2} onClick={numberClickHandler} />
          <CalcButton label={3} onClick={numberClickHandler} />
          <CalcButton label={"MUL"} onClick={opClickHandler} />
          <CalcButton label={"CLR"} onClick={clrClickHandler} />
          <CalcButton label={0} onClick={numberClickHandler} />
          <CalcButton label={"EQL"} onClick={equalClickHandler} />
          <CalcButton label={"DIV"} onClick={opClickHandler} />
        </div>
      </div>
    </div>
  );
}
