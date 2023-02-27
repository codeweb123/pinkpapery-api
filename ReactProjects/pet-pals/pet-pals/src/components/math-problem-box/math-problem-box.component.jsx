import "./math-problem-box.styles.scss";
import Button from "../button/button.component";

const MathProblemBox = () => {
  let questionAmount = 10;
  let equationsArray = [];
  let firstNumber = 0;
  let secondNumber = 0;
  let equationObject = {};
  const wrongFormat = [];

  const correctEquations = getRandomInt(questionAmount);
  const wrongEquations = questionAmount - correctEquations;

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  for (let i = 0; i < correctEquations; i++) {
    firstNumber = getRandomInt(9);
    secondNumber = getRandomInt(9);

    const equationValue = firstNumber * secondNumber;
    const equation = `${firstNumber} X ${secondNumber} = ${equationValue}`;
    equationObject = { value: equation, evaluated: "true" };
    equationsArray.push(equationObject);

    for (let i = 0; i < wrongEquations; i++) {
      firstNumber = getRandomInt(9);
      secondNumber = getRandomInt(9);
      const equationValue = firstNumber * secondNumber;
      wrongFormat[0] = `${firstNumber} X ${
        secondNumber + 1
      } = ${equationValue}`;
      wrongFormat[1] = `${firstNumber} X ${secondNumber} = ${
        equationValue - 1
      }`;
      wrongFormat[2] = `${
        firstNumber + 1
      } X ${secondNumber} = ${equationValue}`;
      const formatChoice = getRandomInt(3);
      const equation = wrongFormat[formatChoice];
      equationObject = { value: equation, evaluated: "false" };
      equationsArray.push(equationObject);
    }
    equationsToDOM();
  }

  function equationsToDOM() {
    equationsArray.forEach((equation) => {
      const item = document.createElement("div");
      item.classList.add("item");
      const equationText = document.createElement("h1");
      equationText.textContent = equation.value;
      item.appendChild(equationText);
      itemContainer.appendChild(item);
    });
  }

  return (
    <div className="game-container">
      <div className="header">
        <h1>Math Game</h1>
      </div>
      <div className="card" id="countdown-page" hidden>
        <h1 className="countdown">3</h1>
      </div>
      <div className="card" id="game-page">
        <div className="selected-item"></div>
        <div className="itemContainer"></div>
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
