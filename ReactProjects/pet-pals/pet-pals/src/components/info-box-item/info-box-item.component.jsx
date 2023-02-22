import "./info-box-item.styles.scss";

const InfoBoxItem = ({ infoBoxItem }) => {
  const { id, type, name, imageUrl } = infoBoxItem;
  return (
    <div className="info-box-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="type">{type}</span>
        <span className="id">{id}</span>
      </div>
    </div>
  );
};

export default InfoBoxItem;
