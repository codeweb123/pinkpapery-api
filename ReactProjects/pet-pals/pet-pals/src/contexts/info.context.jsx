import { createContext, useState } from "react";

const addInfoBoxItem = (
  infoBoxPetItems,
  infoBoxLandItems,
  petItemToAdd,
  landItemToAdd
) => {
  const existingInfoBoxPetItem = infoBoxPetItems.find(
    (infoBoxPetItem) => infoBoxPetItem.id === petItemToAdd.id
  );

  if (!existingInfoBoxPetItem) {
    return [{ ...petItemToAdd }];
  }
};

export const InfoBoxContext = createContext({
  isInfoBoxOpen: false,
  setIsInfoBoxOpen: () => {},
  infoBoxPetItems: [],
  infoBoxLandItems: [],
  addItemToInfoBox: () => {},
});

export const InfoProvider = ({ children }) => {
  const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(false);
  const [infoBoxPetItems, setInfoBoxPetItems] = useState([]);

  const addPetItemToInfoBox = (petItemToAdd) => {
    setInfoBoxPetItems(addInfoBoxPetItem(infoBoxPetItems, petItemToAdd));
  };

  const value = {
    isInfoBoxOpen,
    setIsInfoBoxOpen,
    addPetItemToInfoBox,
    infoBoxPetItems,
  };

  return (
    <InfoBoxContext.Provider value={value}>{children}</InfoBoxContext.Provider>
  );
};
