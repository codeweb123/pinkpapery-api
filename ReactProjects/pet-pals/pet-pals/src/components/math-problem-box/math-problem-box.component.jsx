import "./math-problem-box.styles.scss";
import Button from "../button/button.component";

const MathProblemBox = () => {
  return (
    <div className="game-container">
      <div className="header">
        <h1>Math Game</h1>
      </div>
      <div className="card" id="splash-page">
        <form id="start-form">
          <div className="selection-container">
            <div className="radio-container">
              <label for="value-10"> 10 questions </label>
              <input
                type="radio"
                name="questions"
                value="10"
                id="value"
              ></input>
              <span className="best-score">
                <span> Best Score </span>
                <span className="best-score-value">0.0s</span>
              </span>
            </div>
            <div className="radio-container">
              <label for="value-25"> 25 questions </label>
              <input
                type="radio"
                name="questions"
                value="25"
                id="value"
              ></input>
              <span className="best-score">
                <span> Best Score </span>
                <span className="best-score-value">0.0s</span>
              </span>
            </div>
            <div className="radio-container">
              <label for="value-50"> 50 questions </label>
              <input
                type="radio"
                name="questions"
                value="50"
                id="value"
              ></input>
              <span className="best-score">
                <span> Best Score </span>
                <span className="best-score-value">0.0s</span>
              </span>
            </div>
            <div className="radio-container">
              <label for="value-99"> 99 questions </label>
              <input
                type="radio"
                name="questions"
                value="99"
                id="value"
              ></input>
              <span className="best-score">
                <span> Best Score </span>
                <span className="best-score-value">0.0s</span>
              </span>
            </div>
          </div>
          <div class="selection-footer">
            <button className="start" type="submit">
              Start Round!
            </button>
          </div>
        </form>
      </div>

      <div className="card" id="countdown-page" hidden>
        <h1 className="countdown">3</h1>
      </div>

      <div className="card" id="game-page" hidden>
        <div className="item-container"></div>
        <div className="item-footer">
          <button className="wrong">Wrong</button>
          <button className="right">Right</button>
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
