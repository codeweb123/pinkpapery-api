import { createContext, useState } from "react";
import PROBLEMS from "../math-data.json";

export const ProblemsContext = createContext({
  problems: [],
});

export const ProblemsProvider = ({ children }) => {
  const [problems, setProblems] = useState(PROBLEMS);
  const value = { problems };

  return (
    <ProblemsContext.Provider value={value}>
      {children}
    </ProblemsContext.Provider>
  );
};
