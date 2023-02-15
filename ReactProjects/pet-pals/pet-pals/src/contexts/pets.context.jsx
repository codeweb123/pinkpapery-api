import { createContext, useState, useEffect } from "react";
import PETS from "../pet-data.json";

export const PetContext = createContext({});

export const PetsProvider = ({ children }) => {
  const [pets, setPet] = useState(PETS);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
