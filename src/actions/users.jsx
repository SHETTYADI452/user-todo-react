// importing  modules
import axios from "axios";
import { FETCH_USERS, SET_SELECTED_USER } from "./Types";
import { startLoading, stopLoading } from "./loading";

// exporting  modules dispatch and loading dispatch which will fetch the users and displays it.
// First the function startloading will be execute with its loadingDispatch then the result will contain fetched data from the Api.
// and create a dispatch with type FETCH_USERS and return payload as result.data
export const fetchUsers = () => async (dispatch, loadingDispatch) => {
  try {
    startLoading()(loadingDispatch);
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    dispatch({
      type: FETCH_USERS,
      payload: result.data,
    });
  } catch (err) {
    console.log("err: ", err);
  } finally {
    stopLoading()(loadingDispatch);
  }
};

// this function works same as the above function but it will return the payload data which contains the user details of the user which is selected.
export const setSelectedUser = (id) => async (dispatch, loadingDispatch) => {
  try {
    startLoading()(loadingDispatch);

    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: SET_SELECTED_USER,
      payload: result?.data,
    });
  } catch (err) {
    console.log("err:", err);
  } finally {
    stopLoading()(loadingDispatch);
  }
};
