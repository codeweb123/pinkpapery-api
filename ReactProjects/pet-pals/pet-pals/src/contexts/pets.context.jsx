import { createContext, useState } from "react";
import PET_DATA from "../pet-data.js";

export const PetsContext = createContext({
  pets: [],
});

export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const value = { pets };

  return <PetsContext.Provider value={value}>{children}</PetsContext.Provider>;
};
