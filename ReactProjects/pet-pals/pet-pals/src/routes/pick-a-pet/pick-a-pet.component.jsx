import { useContext } from "react";

import { PetsContext } from "../../contexts/pets.context";

const PickAPet = () => {
  const { pets } = useContext(PetsContext);

  return (
    <div>
      {pets.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default PickAPet;
