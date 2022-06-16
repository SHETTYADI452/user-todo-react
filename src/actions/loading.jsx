// importing modules
import { START_LOADING, STOP_LOADING } from "./Types";

//exporting modules

//Creating function for dispatch with START_LOADING
export const startLoading = () => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
};

//Creating function for dispatch with STOP_LOADING
export const stopLoading = () => (dispatch) => {
  dispatch({
    type: STOP_LOADING,
  });
};
