import { createContext, useState, useEffect } from "react";
import { getPetsAndDocuments } from "../utils/firebase/firebase.utils";

export const PetsContext = createContext({
  petsMap: {},
});

export const PetsProvider = ({ children }) => {
  const [petsMap, setPetsMap] = useState({});

  useEffect(() => {
    const getPetsMap = async () => {
      const petMap = await getPetsAndDocuments();
      setPetsMap(petMap);
    };
    getPetsMap();
  }, []);
  const value = { petsMap };

  return <PetsContext.Provider value={value}>{children}</PetsContext.Provider>;
};
