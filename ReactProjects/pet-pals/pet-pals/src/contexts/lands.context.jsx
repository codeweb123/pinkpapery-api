import { createContext, useState } from "react";
import LAND_DATA from "../land-data.js";

export const LandsContext = createContext({
  lands: [],
});

export const LandsProvider = ({ children }) => {
  const [lands, setLands] = useState([]);
  const value = { lands };

  return (
    <LandsContext.Provider value={value}>{children}</LandsContext.Provider>
  );
};
