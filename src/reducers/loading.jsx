// importing modules
import { START_LOADING, STOP_LOADING } from "../actions/Types";

// Export initialState of loading as false
export const initialState = {
  isLoading: false,
};

//exporting the state as true ,false or default
export const Loading = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
