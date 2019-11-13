import React, { useState, useEffect } from "react";

import withAuth from "../axios/index";

export default function Users(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    withAuth()
      .get("http://localhost:5000/api/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        debugger;
      });
  }, [users]);
  return (
    <div>
      {users.length === 0 ? (
        <div>Welcome to the Users page</div>
      ) : (
        users.map(item => (
          <li key={item.id}>
            {item.username}, {item.department} department
          </li>
        ))
      )}
    </div>
  );
}
