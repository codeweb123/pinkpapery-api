import "./math-problem-box.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { ProblemsContext } from "../../contexts/problems.context";

const MathProblemBox = ({ problem }) => {
  const { mathproblem, solution } = problem;
  const { problems } = useContext(ProblemsContext);

  return (
    <div className="game-container">
      <div className="header">
        <h1>Math Game</h1>
      </div>
      <div className="card" id="countdown-page" hidden>
        <h1 className="countdown">3</h1>
      </div>
      <div className="card" id="game-page">
        <div className="item-container">
          <div className="selected-item"></div>
          <div className="item"></div>
        </div>
        <div className="item-footer">
          <Button className="wrong">Wrong</Button>
          <Button className="right">Right</Button>
        </div>
      </div>
      <div className="card" id="score-page" hidden>
        <div className="score-container">
          <h1 className="title">Your Time</h1>
          <h1 className="final-time">3.4s</h1>
          <h1 className="base-time">Base Time: 2.4s</h1>
          <h1 className="penalty-time">Penalty: +1.0s</h1>
        </div>
        <div className="score-footer">
          <Button className="play-again">Play Again</Button>
        </div>
      </div>
    </div>
  );
};

export default MathProblemBox;
