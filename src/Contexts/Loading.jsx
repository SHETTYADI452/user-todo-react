// importing modules
import { createContext, useReducer } from "react";
import { Loading, initialState } from "../reducers/loading";

// creating loading context
export const LoadingContext = createContext({
  state: initialState,
  dispatch: () => null,
});

// creating loading context provider
export const LoadingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Loading, initialState);
  const value = { state, dispatch };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
