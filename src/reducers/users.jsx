// importing modules
import { FETCH_USERS, SET_SELECTED_USER } from "../actions/Types";

// exporting  the initialstate of the users Array and user object.
export const initialState = {
  users: [],
  user: {},
};

export const Users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action?.payload,
      };
    case SET_SELECTED_USER:
      return {
        ...state,
        user: action?.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
