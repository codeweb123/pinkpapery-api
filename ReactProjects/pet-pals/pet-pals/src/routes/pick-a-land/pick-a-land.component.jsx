import { useContext } from "react";

import { LandsContext } from "../../contexts/lands.context";

import LandCard from "../../components/land-card/land-card.component";

import "./pick-a-land.styles.scss";

const PickALand = () => {
  const { lands } = useContext(LandsContext);

  return (
    <>
      <h1>Choose a Land!</h1>
      <div className="lands-container">
        {lands.map((land) => (
          <LandCard key={land.id} land={land} />
        ))}
      </div>
    </>
  );
};

export default PickALand;
