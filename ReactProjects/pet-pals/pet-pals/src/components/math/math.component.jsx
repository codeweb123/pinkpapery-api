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

  return (
    <div className="Math">
      <div className="header">Math Game</div>
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
      </form>
      <br></br>
      <Button type="button" onClick={generateQuestion}>
        start game
      </Button>
      <h1>score:{score}</h1>
    </div>
  );
}
