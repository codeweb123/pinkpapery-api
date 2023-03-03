import { useContext } from "react";
import { InfoBoxContext } from "../../contexts/info.context";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import InfoBoxItem from "../info-box-item/info-box-item.component";
import "./info-box.styles.scss";

const InfoBox = () => {
  const { infoBoxItems } = useContext(InfoBoxContext);
  const navigate = useNavigate();

  const goToGameHandler = () => {
    navigate("/game");
  };

  return (
    <div className="info-box-container">
      <h1>My Info:</h1>
      <div className="info-items" />
      {infoBoxItems.map((item) => (
        <InfoBoxItem key={item.id} infoBoxItem={item} />
      ))}
      <Button onClick={goToGameHandler}>Go to Game</Button>
    </div>
  );
};

export default InfoBox;
