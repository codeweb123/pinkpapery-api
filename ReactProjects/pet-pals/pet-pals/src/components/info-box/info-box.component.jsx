import { useContext } from "react";

import { InfoBoxContext } from "../../contexts/info.context";

import Button from "../button/button.component";
import InfoBoxItem from "../info-box-item/info-box-item.component";

import "./info-box.styles.scss";

const InfoBox = () => {
  const { infoBoxItems } = useContext(InfoBoxContext);

  return (
    <div className="info-box-container">
      <div className="info-items" />
      {infoBoxItems.map((item) => (
        <InfoBoxItem key={item.id} infoBoxItem={item} />
      ))}
      <Button>Let's get Learning!</Button>
    </div>
  );
};

export default InfoBox;
