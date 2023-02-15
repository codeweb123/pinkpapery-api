import "./land-card.styles.scss";
import Button from "../button/button.component";

const LandCard = ({ land }) => {
  const { name, imageUrl } = land;

  return (
    <div className="land-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="land-footer">
        <span className="name">{name}</span>
      </div>
      <Button buttonType="inverted">Add Land</Button>
    </div>
  );
};

export default LandCard;
