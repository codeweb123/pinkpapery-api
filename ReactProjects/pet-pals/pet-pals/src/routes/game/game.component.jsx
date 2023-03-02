import { useContext } from "react";
import { InfoBoxContext } from "../../contexts/info.context";
import ProgressBar from "../../components/progress-bar/progress-bar.component";
import "./game.styles.scss";

const Game = () => {
  const { infoBoxItems } = useContext(InfoBoxContext);

  return (
    <div>
      <ProgressBar />
      <div className="info-box-items">
        {infoBoxItems.map((infoBoxItem) => {
          const { name, imageUrl } = infoBoxItem;
          return (
            <div>
              <h2>I'm your PetPal {name}!</h2>
              <img src={imageUrl} alt={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
