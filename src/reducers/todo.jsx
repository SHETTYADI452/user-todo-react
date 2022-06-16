// importing modules
import { FETCH_USER_TODO, ADD_NEW_TODO } from "../actions/Types";

//exporting initialState of the Todos Array
export const initialState = {
  todos: [],
};

// export the state of Todo
export const Todo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_NEW_TODO:
      return {
        // this will return the previous state as it is and  todoData state from action.payload
        ...state,
        todos: [...state.todos, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};
