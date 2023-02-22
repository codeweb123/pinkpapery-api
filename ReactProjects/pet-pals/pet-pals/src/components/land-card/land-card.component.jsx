import "./land-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { InfoBoxContext } from "../../contexts/info.context";

const LandCard = ({ land }) => {
  const { name, imageUrl } = land;
  const { addItemToInfoBox } = useContext(InfoBoxContext);

  const addLandToInfoBox = () => addItemToInfoBox(land);

  return (
    <div className="land-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="land-footer">
        <span className="name">{name}</span>
      </div>
      <Button buttonType="inverted" onClick={addLandToInfoBox}>
        Add Land
      </Button>
    </div>
  );
};

export default LandCard;
