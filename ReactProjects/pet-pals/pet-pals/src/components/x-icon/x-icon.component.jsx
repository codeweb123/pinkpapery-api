import "./x-icon.styles.scss";

import xicon from "../../assets/x-icon.png";

const XIcon = () => {
  return (
    <div className="x-icon-container">
      <img src={xicon} alt="x-icon" />
    </div>
  );
};

export default XIcon;
