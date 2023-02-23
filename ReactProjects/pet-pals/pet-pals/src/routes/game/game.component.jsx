import { useContext } from "react";
import { InfoBoxContext } from "../../contexts/info.context";
import ProgressBar from "../../components/progress-bar/progress-bar.component";
import MathProblemBox from "../../components/math-problem-box/math-problem-box.component";
import "./game.styles.scss";

const Game = () => {
  const { infoBoxItems } = useContext(InfoBoxContext);

  return (
    <div>
      <ProgressBar />
      <h1>I am the game page</h1>
      <div className="info-box-items">
        {infoBoxItems.map((infoBoxItem) => {
          const { name, imageUrl } = infoBoxItem;
          return (
            <div>
              <h2>{name}</h2>
              <img src={imageUrl} alt={name} />
            </div>
          );
        })}
      </div>
      <div className="math-problem-box">
        <MathProblemBox />
      </div>
    </div>
  );
};
export default Game;
