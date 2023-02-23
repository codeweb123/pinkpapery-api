import "./math-problem-box.styles.scss";
import Button from "../button/button.component";

const MathProblemBox = () => {
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
          <div className="item">
            <h1>3 X 3 = 30</h1>
          </div>
          <div className="item">
            <h1>3 X 3 = 30</h1>
          </div>
          <div className="item">
            <h1>3 X 3 = 30</h1>
          </div>
          <div className="item">
            <h1>3 X 3 = 30</h1>
          </div>
          <div className="item">
            <h1>3 X 3 = 30</h1>
          </div>
          <div className="item">
            <h1>3 X 3 = 30</h1>
          </div>
        </div>
        <div className="item-footer">
          <Button className="wrong">Wrong</Button>
          <Button className="right">Right</Button>
        </div>
      </div>
    </div>
  );
};

export default MathProblemBox;
