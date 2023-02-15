import "./pet-card.styles.scss";
import Button from "../button/button.component";

const PetCard = ({ pet }) => {
  const { name, imageUrl } = pet;

  return (
    <div className="pet-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="pet-footer">
        <span className="name">{name}</span>
      </div>
      <Button buttonType="inverted">Add Pet</Button>
    </div>
  );
};

export default PetCard;
