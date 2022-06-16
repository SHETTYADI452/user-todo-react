//Importing modules
import React from "react";

//exporting allusers and onclick to  index.jsx so that we can map the data of allUsers and perform a click event.
export const UsersList = ({ allUsers, onUserClick }) => {
  // will return a list of users
  return (
    <ul className="users-list-container">
      <ul>
        {allUsers?.map((user, index) => (
          <p
            key={`user-${index}`}
            className={`user-${index}`}
            id={`user-${index}`}
            onClick={() => onUserClick(user)}
          >
            {user.id}. {user.username}
          </p>
        ))}
      </ul>
    </ul>
  );
};
