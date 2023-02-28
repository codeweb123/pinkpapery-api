import "./math-problem-box.styles.scss";
import Button from "../button/button.component";

const gamePage = document.getElementById("game-page");
const scorePage = document.getElementById("score-page");
const splashPage = document.getElementById("splash-page");
const countdownPage = document.getElementById("countdown-page");
// Splash Page
const startForm = document.getElementById("start-form");
const radioContainers = document.querySelectorAll(".radio-container");
const radioInputs = document.querySelectorAll("input");
const bestScores = document.querySelectorAll(".best-score-value");
// Countdown Page
const countdown = document.querySelector(".countdown");
// Game Page
const itemContainer = document.querySelector(".item-container");
// Score Page
const finalTimeEl = document.querySelector(".final-time");
const baseTimeEl = document.querySelector(".base-time");
const penaltyTimeEl = document.querySelector(".penalty-time");
const playAgainBtn = document.querySelector(".play-again");

// Equations

let equationsArray = [];
let questionAmount = 0;

// Game Page
let firstNumber = 0;
let secondNumber = 0;
let equationObject = {};
const wrongFormat = [];

const MathProblemBox = () => {
  // Time
  // Scroll
  // Create Correct/Incorrect Random Equations
  function createEquations() {
    // Randomly choose how many correct equations there should be
    // const correctEquations =
    // Set amount of wrong equations
    // const wrongEquations =
    // Loop through, multiply random numbers up to 9, push to array
    // for (let i = 0; i < correctEquations; i++) {
    //   firstNumber =
    //   secondNumber =
    //   const equationValue = firstNumber * secondNumber;
    //   const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;
    //   equationObject = { value: equation, evaluated: 'true' };
    //   equationsArray.push(equationObject);
    // }
    // Loop through, mess with the equation results, push to array
    // for (let i = 0; i < wrongEquations; i++) {
    //   firstNumber =
    //   secondNumber =
    //   const equationValue = firstNumber * secondNumber;
    //   wrongFormat[0] = `${firstNumber} x ${secondNumber + 1} = ${equationValue}`;
    //   wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;
    //   wrongFormat[2] = `${firstNumber + 1} x ${secondNumber} = ${equationValue}`;
    //   const formatChoice =
    //   const equation = wrongFormat[formatChoice];
    //   equationObject = { value: equation, evaluated: 'false' };
    //   equationsArray.push(equationObject);
    // }
  }

  // Dynamically adding correct/incorrect equations
  // function populateGamePage() {
  //   // Reset DOM, Set Blank Space Above
  //   itemContainer.textContent = '';
  //   // Spacer
  //   const topSpacer = document.createElement('div');
  //   topSpacer.classList.add('height-240');
  //   // Selected Item
  //   const selectedItem = document.createElement('div');
  //   selectedItem.classList.add('selected-item');
  //   // Append
  //   itemContainer.append(topSpacer, selectedItem);

  //   // Create Equations, Build Elements in DOM

  //   // Set Blank Space Below
  //   const bottomSpacer = document.createElement('div');
  //   bottomSpacer.classList.add('height-500');
  //   itemContainer.appendChild(bottomSpacer);
  // }

  window.onload = function () {
    function countdownStart() {}

    function showCountdown() {
      countdownPage.hidden = false;
      splashPage.hidden = true;
    }

    function getRadioValue() {
      let radioValue;
      radioInputs.forEach((radioInput) => {
        if (radioInput.checked) {
          radioValue = radioInput.value;
        }
      });
      return radioValue;
    }

    function selectQuestionAmount(e) {
      e.preventDefault();
      questionAmount = getRadioValue();
      if (questionAmount) {
        showCountdown();
      }
    }

    startForm.addEventListener("click", () => {
      radioContainers.forEach((radioEl) => {
        radioEl.classList.remove("selected-label");
        if (radioEl.children[1].checked) {
          radioEl.classList.add("selected-label");
        }
      });
    });

    startForm.addEventListener("submit", selectQuestionAmount);
  };

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

      <div className="card" id="countdown-page">
        <h1 className="countdown"></h1>
      </div>

      <div className="card" id="game-page">
        <div className="item-container"></div>
        <div className="item-footer">
          <button className="wrong">Wrong</button>
          <button className="right">Right</button>
        </div>
      </div>
      <div className="card" id="score-page">
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
