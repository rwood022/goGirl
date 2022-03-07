import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import BackButton from "./BackButton";

const SignUp = (props) => {
  const [state, setState] = useState({
    username: "",
   // email: "",
    password: "",
    cpassword: ""
  });
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const { match } = props;
    const { path = "/" } = match;
    if (path === "/signup") {
      document.body.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(/images/sign_up.jpg)";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.height = "100vh";
      document.body.style.backgroundRepeat = "no-repeat";
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log(state);
    const username = state.username.trim();
    const password = state.password.trim();
    const cpassword = state.cpassword.trim();
    if(password !== cpassword) {
      setErrorMsg("Password and confirm password do not match.");
      return;
    }
   try {
    if(username !== '' && password !== '') {
      setErrorMsg("");
      const { data } = await axios.post('/api/users', {
        username,
        password
      });

      console.log('result', data);
      props.history.push('/signin');
    }
   } catch (error) {
     console.log(error.response);
     if(error.response && error.response.data) {
       setErrorMsg(error.response.data);
     }
     console.log('error', error);
   }
   
  };

  return (
    <div className="sign-up">
      <BackButton />
      <h2>Sign Up</h2>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Please enter your name"
            value={state.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        {/*<Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Please enter your email"
            value={state.email}
            onChange={handleInputChange}
          />
        </Form.Group>*/}
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Please enter your password"
            value={state.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="cpassword"
            placeholder="Please enter your confirm password"
            value={state.cpassword}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
