import { createContext, useState } from "react";

export const InfoContext = createContext({
  isInfoBoxOpen: false,
  setIsInfoBoxOpen: () => {},
});

export const InfoProvider = ({ children }) => {
  const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(false);
  const value = { isInfoBoxOpen, setIsInfoBoxOpen };
  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};
