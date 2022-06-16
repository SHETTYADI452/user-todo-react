// importing  modules
import axios from "axios";
import { FETCH_USER_TODO, ADD_NEW_TODO } from "./Types";
import { startLoading, stopLoading } from "./loading";

// exporting  modules dispatch and loading dispatch which will fetch the users and displays it.
// First the function startloading will be execute with its loadingDispatch then the result will contain fetched data from the Api.
// and create a dispatch with type FETCH_USER_TODO and return payload as result.data.items
export const fetchTodo = (id) => async (dispatch, loadingDispatch) => {
  try {
    startLoading()(loadingDispatch);
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}/todos`
    );
    console.log("Status of Todo:", result);
    dispatch({
      type: FETCH_USER_TODO,
      payload: result?.data,
    });
  } catch (err) {
    console.log("err: ", err);
  } finally {
    stopLoading()(loadingDispatch);
  }
};

// this function ist used to add new todos in the list of todos with The help of post Method.
// functioning of this function is also same as the above function
export const addNewTodo = (userData) => async (dispatch, loadingDispatch) => {
  try {
    startLoading()(loadingDispatch);

    const result = await axios.post(
      `https://jsonplaceholder.typicode.com/users/${userData.id}/todos`,
      userData
    );

    dispatch({
      type: ADD_NEW_TODO,
      payload: result?.data,
    });
  } catch (err) {
    console.log("err:", err);
  } finally {
    stopLoading()(loadingDispatch);
  }
};
