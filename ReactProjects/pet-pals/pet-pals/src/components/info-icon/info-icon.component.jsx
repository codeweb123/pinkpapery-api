import { useContext } from "react";
import { InfoBoxContext } from "../../contexts/info.context";
import "./info-icon.styles.scss";

import infoicon from "../../assets/info-icon.png";

const InfoIcon = () => {
  const { isInfoBoxOpen, setIsInfoBoxOpen } = useContext(InfoBoxContext);

  const toggleIsInfoBoxOpen = () => setIsInfoBoxOpen(!isInfoBoxOpen);

  return (
    <div className="info-icon-container" onClick={toggleIsInfoBoxOpen}>
      <img src={infoicon} alt="info-icon" />
    </div>
  );
};

export default InfoIcon;
