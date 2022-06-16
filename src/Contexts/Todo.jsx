// importing modules
import { createContext, useReducer } from "react";
import { Todo, initialState } from "../reducers/todo";

// creating todo context
export const TodoContext = createContext({
  state: initialState,
  dispatch: () => null,
});

//creating todo context provider
export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Todo, initialState);
  const value = { state, dispatch };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
