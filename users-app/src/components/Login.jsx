import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const initialValues = {
  username: "",
  password: ""
};

export default function Login(props) {
  function onLoginHandler(formValues) {
    axios
      .post("http://localhost:5000/auth/login", formValues)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/users");
      })
      .catch(error => {
        debugger;
      });
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onLoginHandler}
      component={LoginForm}
    />
  );
}

function LoginForm(props) {
  return (
    <Form>
      <Field name="username" type="text" placeholder="username" />
      <Field name="password" type="password" placeholder="password" />
      <button type="submit">Log In</button>
    </Form>
  );
}
