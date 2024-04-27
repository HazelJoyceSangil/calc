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
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const clrClickHandler = () => {
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  }

  const equalClickHandler = () => {
    if (op === "+") {
      setDisp(parseInt(num1) + parseInt(num2));
    } else if (op === "-") {
      setDisp(parseInt(num1) - parseInt(num2));
    } else if (op === "x") {
      setDisp(parseInt(num1) * parseInt(num2));
    } else if (op === "÷") {
      if (parseInt(num2) !== 0) {
        setDisp(parseInt(num1) / parseInt(num2));
      } else {
        setDisp("Cannot divide by zero");
      }
    }
  }

  const numberClickHandler = (e) => {
    const value = e.target.innerHTML;
    if (op === null) {
      setNum1(num1 === null || num1 === "0" ? value : num1 + value);
      setDisp(num1 === null || num1 === "0" ? value : num1 + value);
    } else {
      setNum2(num2 === null || num2 === "0" ? value : num2 + value);
      setDisp(num2 === null || num2 === "0" ? value : num2 + value);
    }
  }

  const opClickHandler = (e) => {
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={7} onClick={numberClickHandler} />
          <CalcButton label={8} onClick={numberClickHandler} />
          <CalcButton label={9} onClick={numberClickHandler} />
          <CalcButton label={"+"} onClick={opClickHandler} />
          <CalcButton label={4} onClick={numberClickHandler} />
          <CalcButton label={5} onClick={numberClickHandler} />
          <CalcButton label={6} onClick={numberClickHandler} />
          <CalcButton label={"-"} onClick={opClickHandler} />
          <CalcButton label={1} onClick={numberClickHandler} />
          <CalcButton label={2} onClick={numberClickHandler} />
          <CalcButton label={3} onClick={numberClickHandler} />
          <CalcButton label={"x"} onClick={opClickHandler} />
          <CalcButton label={"CLR"} onClick={clrClickHandler} />
          <CalcButton label={0} onClick={numberClickHandler} />
          <CalcButton label={"="} onClick={equalClickHandler} />
          <CalcButton label={"÷"} onClick={opClickHandler} />
        </div>
      </div>
    </div>
  );
}
