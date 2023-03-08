import { createContext, useState, useEffect } from "react";
import { getLandsAndDocuments } from "../utils/firebase/firebase.utils";

export const LandsContext = createContext({
  landsMap: {},
});

export const LandsProvider = ({ children }) => {
  const [landsMap, setLandsMap] = useState({});

  useEffect(() => {
    const getLandsMap = async () => {
      const landMap = await getLandsAndDocuments();
      setLandsMap(landMap);
    };
    getLandsMap();
  }, []);

  const value = { landsMap };

  return (
    <LandsContext.Provider value={value}>{children}</LandsContext.Provider>
  );
};
