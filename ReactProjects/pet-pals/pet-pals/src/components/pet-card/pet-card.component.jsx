import { useContext } from "react";
import { InfoBoxContext } from "../../contexts/info.context";
import "./pet-card.styles.scss";
import Button from "../button/button.component";

const PetCard = ({ pet }) => {
  const { name, imageUrl } = pet;
  const { addItemToInfoBox } = useContext(InfoBoxContext);

  const addPetToInfoBox = () => addItemToInfoBox(pet);

  return (
    <div className="pet-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="pet-footer">
        <span className="name">{name}</span>
      </div>
      <Button buttonType="inverted" onClick={addPetToInfoBox}>
        Add Pet
      </Button>
    </div>
  );
};

export default PetCard;
