import { useContext } from "react";
import { InfoBoxContext } from "../../contexts/info.context";

import "./game.styles.scss";

const Game = () => {
  const { infoBoxItems } = useContext(InfoBoxContext);
  return (
    <div>
      <h1>I am the game page</h1>
      <div>
        {infoBoxItems.map((infoBoxItem) => {
          const { name } = infoBoxItem;
          return (
            <div>
              <h2>{name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Game;
