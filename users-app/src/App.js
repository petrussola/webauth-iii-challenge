import React from "react";
import { Route, Link, withRouter, Redirect } from "react-router-dom";

import Login from "./components/Login";
import Users from "./components/Users";
import Home from "./components/Home";

function App(props) {
  // LOGOUT FEATURE
  function logoutHandler(event) {
    localStorage.clear();
    props.history.push("/home");
  }

  return (
    <div className="App">
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <button onClick={logoutHandler}>Logout</button>

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
      <Route path="/home" component={Home} />
    </div>
  );
}

export default withRouter(App);
