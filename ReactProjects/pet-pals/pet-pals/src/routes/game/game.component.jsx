import { useContext } from "react";
import { InfoBoxContext } from "../../contexts/info.context";
import Math from "../../components/math/math.component";
import "./game.styles.scss";

const Game = () => {
  const { infoBoxItems } = useContext(InfoBoxContext);

  return (
    <div className="i-box-container">
      <div className="info-box-items">
        {infoBoxItems.map((infoBoxItem) => {
          const { name, imageUrl } = infoBoxItem;
          return (
            <div>
              <img src={imageUrl} alt={name} key={infoBoxItem.id} />
            </div>
          );
        })}
      </div>
      <div className="z-index-created-div">
        <Math className="math-game" />
      </div>
    </div>
  );
};

export default Game;
