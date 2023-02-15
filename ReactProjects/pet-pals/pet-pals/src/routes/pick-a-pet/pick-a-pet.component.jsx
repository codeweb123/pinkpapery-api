import { useContext } from "react";

import { PetsContext } from "../../contexts/pets.context";
import PetCard from "../../components/pet-card/pet-card.component";

import "./pick-a-pet.styles.scss";

const PickAPet = () => {
  const { pets } = useContext(PetsContext);

  return (
    <>
      <h1>Choose a Pet Pal!</h1>
      <div className="pets-container">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </>
  );
};

export default PickAPet;
