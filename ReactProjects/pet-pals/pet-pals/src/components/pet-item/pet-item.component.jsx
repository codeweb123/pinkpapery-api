import "./pet-item.styles.scss";

const PetItem = ({ pet }) => {
  const { imageUrl, name } = pet;
  return (
    <div className="pet-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="pet-body-container">
          <h6>{name}</h6>
        </div>
      </div>
    </div>
  );
};

export default PetItem;
