// importing modules
import React, { useEffect, useContext } from "react";
import { fetchUsers, setSelectedUser } from "../../actions/users";
import { UsersList } from "./UsersList";
import { UsersContext } from "../../Contexts/Users";
import { LoadingContext } from "../../Contexts/Loading";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "../../styles/home.css";

//export default class
export default (props) => {
  const title = "USERS LIST";
  const history = useHistory();
  //Initializing users context
  const { state: userState, dispatch: userDispatch } = useContext(UsersContext);
  // Initializing loading context
  const { state: loadingState, dispatch: loadingDispatch } =
    useContext(LoadingContext);

  // with the help of useEffect Hook the as soons as the app renders the userdetails will be loaded with effect
  useEffect(() => {
    fetchUsers()(userDispatch, loadingDispatch);
  }, []);

  // This function will help to fetch user details with the help of diapatch and Navigate users to userdeatails page
  const handleOnUserClick = (user) => {
    // this will push to new page
    history.push(`/userdetail-todo/${user.id}`);
    // this function will invoke in action/user folder and set the userData
    setSelectedUser(user)(userDispatch, loadingDispatch);
  };

  return (
    <div>
      <center>
        <div id="page-title">
          <h1>{title}</h1>
        </div>

        <div className="userlist">
          {loadingState.isLoading ? (
            <div>
              <h3 className="loader">Fetching Users...</h3>
              <ClipLoader loading={loadingState.isLoading} size={150} />
            </div>
          ) : (
            <UsersList
              allUsers={userState.users}
              onUserClick={handleOnUserClick}
            />
          )}
        </div>
      </center>
    </div>
  );
};
