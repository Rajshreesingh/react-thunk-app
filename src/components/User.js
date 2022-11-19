import React from "react";

const User = ({ users }) => {
  return (
    <div>
      <h1>Users table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        {users.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.username}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default User;
