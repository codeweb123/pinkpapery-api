import { createContext, useState } from "react";

const addInfoBoxItem = (infoBoxItems, itemToAdd) => {
  const existingInfoBoxItem = infoBoxItems.find(
    (infoBoxItem) => infoBoxItem.id === itemToAdd.id
  );

  if (!existingInfoBoxItem) {
    return [...infoBoxItems, { ...itemToAdd }];
  }
};

export const InfoBoxContext = createContext({
  isInfoBoxOpen: false,
  setIsInfoBoxOpen: () => {},
  infoBoxItems: [],
  addItemToInfoBox: () => {},
});

export const InfoProvider = ({ children }) => {
  const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(false);
  const [infoBoxItems, setInfoBoxItems] = useState([]);

  const addItemToInfoBox = (itemToAdd) => {
    setInfoBoxItems(addInfoBoxItem(infoBoxItems, itemToAdd));
  };

  const value = {
    isInfoBoxOpen,
    setIsInfoBoxOpen,
    addItemToInfoBox,
    infoBoxItems,
  };

  return (
    <InfoBoxContext.Provider value={value}>{children}</InfoBoxContext.Provider>
  );
};
