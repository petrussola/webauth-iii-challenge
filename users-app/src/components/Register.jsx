import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
  department: ""
};

export default function Register(props) {
  function onRegisterHandler(formValues) {
    axios
      .post("http://localhost:5000/auth/register", formValues)
      .then(res => {
        props.history.push("/login");
      })
      .catch(error => {
        debugger;
      });
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onRegisterHandler}
      component={RegistrationForm}
    />
  );
}

function RegistrationForm() {
  return (
    <Form>
      <Field name="username" type="text" placeholder="username" />
      <Field name="password" type="password" placeholder="password" />
      <Field name="department" type="text" placeholder="department" />
      <button type="submit">Register</button>
    </Form>
  );
}
