import { useContext, Fragment } from "react";

import { LandsContext } from "../../contexts/lands.context";

import LandCard from "../../components/land-card/land-card.component";

import "./pick-a-land.styles.scss";

const PickALand = () => {
  const { landsMap } = useContext(LandsContext);

  return (
    <Fragment>
      <h1>Pick A Land!</h1>
      {Object.keys(landsMap).map((title) => (
        <Fragment key={title}>
          <div className="lands-container">
            {landsMap[title].map((land) => (
              <LandCard key={land.id} land={land} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default PickALand;
