// importing modules

import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "../../styles/userdetails.css";

//exporting modules todos and isloding which is being used in  userdetails index files
export const Todos = ({ todos, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <div>
          <h3 className="loader">Fetching Todos...</h3>
          <ClipLoader loading={isLoading} size={150} />
        </div>
      ) : (
        <table id="todo-table">
          <thead>
            <tr>
              <th>Todo Id</th>
              <th>Todo Task Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping the todo data  */}
            {todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td id={`title-${todo.id}`}>{todo.title}</td>
                  <td>{todo.completed ? "Completed" : "Incomplete"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
