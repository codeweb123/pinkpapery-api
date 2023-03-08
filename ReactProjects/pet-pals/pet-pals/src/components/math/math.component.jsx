import React, { useState } from "react";
import "./math.styles.scss";
import Button from "../button/button.component";

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  const [score, setScore] = useState(0);

  const generateQuestion = () => {
    setNum1(Math.ceil(Math.random() * 10));
    setNum2(Math.ceil(Math.random() * 10));
  };

  const submit = (e) => {
    e.preventDefault();
    const formValid = +sum >= 0;
    if (!formValid) {
      return;
    }
    if (+num1 + +num2 === +sum) {
      setScore((score) => score + 1);
    }
    generateQuestion();
  };

  const [difference, setDifference] = useState(0);
  const [scoresubtract, setScoresubtract] = useState(0);

  const submitTwo = (e) => {
    e.preventDefault();
    const formValid = +difference >= 0;
    if (!formValid) {
      return;
    }

    if (+num1 - +num2 === +difference) {
      setScoresubtract((scoresubtract) => scoresubtract + 1);
    }
    generateQuestion();
  };

  const [product, setProduct] = useState(0);
  const [scoremultiplication, setScoremultiplication] = useState(0);

  const submitThree = (e) => {
    e.preventDefault();
    const formValid = +product >= 0;
    if (!formValid) {
      return;
    }
    if (+num1 * +num2 === +product) {
      setScoremultiplication((scoremultiplication) => scoremultiplication + 1);
    }
    generateQuestion();
  };

  return (
    <div className="Math">
      <div className="card1">
        <div className="header">Addition Game</div>
        <br></br>
        <form onSubmit={submit}>
          <div className="math-problem">
            <label>
              {num1} + {num2} =
            </label>
            <br></br>
            <br></br>
            <input value={sum} onChange={(e) => setSum(e.target.value)} />
          </div>
          <br></br>
          <Button type="submit">check</Button>
          <br></br>
          <Button type="button" onClick={generateQuestion}>
            new problem
          </Button>
        </form>
        <br></br>
        <h1>score:{score}</h1>
      </div>
      <div className="card2">
        <div className="header">Subtraction Game</div>
        <br></br>
        <form onSubmit={submitTwo}>
          <div className="math-problem">
            <label>
              {num1} - {num2} =
            </label>
            <br></br>
            <br></br>
            <input
              value={difference}
              onChange={(e) => setDifference(e.target.value)}
            />
          </div>
          <br></br>
          <Button type="submit">check</Button>
          <br></br>
          <Button type="button" onClick={generateQuestion}>
            start game
          </Button>
        </form>
        <h1>score:{scoresubtract}</h1>
      </div>
      <div className="card3">
        <div className="header">Multiplication Game</div>
        <br></br>
        <form onSubmit={submitThree}>
          <div className="math-problem">
            <label>
              {num1} x {num2} =
            </label>
            <br></br>
            <br></br>
            <input
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>
          <br></br>
          <Button type="submit">check</Button>
          <br></br>
          <Button type="button" onClick={generateQuestion}>
            start game
          </Button>
        </form>
        <h1>score:{scoremultiplication}</h1>
      </div>
    </div>
  );
}
