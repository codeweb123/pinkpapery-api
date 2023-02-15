import { createContext, useState } from "react";
import PETS from "../pet-data.json";

export const PetsContext = createContext({
  pets: [],
});

export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState(PETS);
  const value = { pets };

  return <PetsContext.Provider value={value}>{children}</PetsContext.Provider>;
};
