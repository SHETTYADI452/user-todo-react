// Importing modules
import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../Contexts/Users";
import { LoadingContext } from "../../Contexts/Loading";
import { fetchTodo, addNewTodo } from "../../actions/todo";
import { Todos } from "./todos";
import { setSelectedUser } from "../../actions/users";
import { useParams } from "react-router-dom";
import { TodoContext } from "../../Contexts/Todo";
import { TextField } from "../Common/TextField";
import "../../styles/userdetails.css";

//exporting  modules
export const UserDetails = () => {
  const title = "User Details Page";

  // initializing user context
  const { state: userState, dispatch: userDispatch } = useContext(UsersContext);
  // initializing loading context
  const { state: loadingState, dispatch: loadingDispatch } =
    useContext(LoadingContext);

  // initializing Todo context
  const { state: todoState, dispatch: todoDispatch } = useContext(TodoContext);
  const { id } = useParams();
  const [newTodo, setNewTodo] = useState();

  useEffect(() => {
    setSelectedUser(id)(userDispatch, loadingDispatch);
    fetchTodo(id)(todoDispatch, loadingDispatch);
  }, []);

  // this function is used to add new todo task after entering an input and performing click event
  const handleClick = () => {
    if (!newTodo) return;
    const userData = {
      id,
      title: newTodo,
      completed: false,
    };
    addNewTodo(userData)(todoDispatch, loadingDispatch);
    setNewTodo("");
  };

  return (
    <div>
      <center>
        <h1 id="page-title">{title}</h1>
      </center>
      <div className="usercontainer">
        <div className="userdetail">
          <div className="ud">
            <h2>
              <b>Name : </b>
              {userState?.user?.name ?? ""}
            </h2>
            <div>
              <b>User Name :</b> {userState?.user?.username ?? ""}
            </div>
            <div>
              <b>Email Id :</b> {userState?.user?.email ?? ""}
            </div>
            <div>
              <b>Address :</b> {userState?.user?.address?.suite ?? ""},
              {userState?.user?.address?.street ?? ""},
              {userState?.user?.address?.city ?? ""}
            </div>
            <div>
              <b>Company Name :</b> {userState?.user?.company?.name ?? ""}
            </div>
          </div>
          <div className="add-todo">
            <TextField
              id={"todo-input"}
              label={"Add Todo"}
              placeholder={"Add Task"}
              value={newTodo}
              // the setTodoInput will set the changes occur in input field
              handleChange={(e) => setNewTodo(e.target.value)}
            />
            <button id="add-btn" onClick={handleClick}>
              Add
            </button>
          </div>
        </div>

        <div className="usertodo">
          <center>
            <h2>Users Todo's</h2>
            <Todos todos={todoState.todos} isLoading={loadingState.isLoading} />
          </center>
        </div>
      </div>
    </div>
  );
};
