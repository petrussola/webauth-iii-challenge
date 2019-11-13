import React from "react";
import { Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <button>Logout</button>

      <Route
        path="/login"
        render={props => {
          return <Login {...props} />;
        }}
      />
      <Route
        path="/users"
        render={props => {
          return <Users {...props} />;
        }}
      />
    </div>
  );
}

export default App;
