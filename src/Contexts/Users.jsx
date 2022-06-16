// importing modules
import { createContext, useReducer } from "react";
import { Users, initialState } from "../reducers/users";

// creating context provider
export const UsersContext = createContext({
  state: initialState,
  dispatch: () => null,
});

// creating  Users context provider
export const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Users, initialState);
  const value = { state, dispatch };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
