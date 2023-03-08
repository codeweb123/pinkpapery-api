import { useContext, Fragment } from "react";

import { PetsContext } from "../../contexts/pets.context";
import PetCard from "../../components/pet-card/pet-card.component";

import "./pick-a-pet.styles.scss";

const PickAPet = () => {
  const { petsMap } = useContext(PetsContext);

  return (
    <Fragment>
      <h1>Pick A Pet!</h1>
      {Object.keys(petsMap).map((title) => (
        <Fragment key={title}>
          <div className="pets-container">
            {petsMap[title].map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default PickAPet;
