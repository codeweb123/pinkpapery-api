import { createContext, useState } from "react";
import LANDS from "../land-data.json";

export const LandsContext = createContext({
  lands: [],
});

export const LandsProvider = ({ children }) => {
  const [lands, setLands] = useState(LANDS);
  const value = { lands };

  return (
    <LandsContext.Provider value={value}>{children}</LandsContext.Provider>
  );
};
