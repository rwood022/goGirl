import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import BackButton from "./BackButton";
import SignInButton from "./Auth";

const SignIn = (props) => {
  console.log("props", props);
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [errroMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const { match } = props;
    const { path = "/" } = match;
    if (path === "/signin") {
      document.body.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/sign_in.jpg)";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.height = "100vh"; // vh stands for viewport height
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
   try {
    const username = state.username.trim();
    const password = state.password.trim();
    if(username !== '' && password !== '') {
     setErrorMsg("");
     const { data } = await axios.post(`/api/users/${username}`, { password });
     console.log(data);
     if(data) {
       props.history.push('/dashboard');
     } else {
      setErrorMsg("Authentication failed.");
     }
    }
   } catch (error) {
     setErrorMsg("Authentication failed.");
     console.log(error);
   }
  };

  return (
    <div>
      <BackButton />
      <h2>Sign In</h2>
      {errroMsg && <p className="error-msg">{errroMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            name="username"
            placeholder="Please enter your username"
            value={state.username}
            onChange={handleInputChange}
          />
        </Form.Group>
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
        <Button variant="primary" type="submit">
          Sign In
        </Button>
        <SignInButton />
      </Form>
    </div>
  );
};

export default SignIn;
