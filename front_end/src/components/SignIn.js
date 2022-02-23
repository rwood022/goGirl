import React from "react";
import { Form } from "react-bootstrap";

const SignIn = () => {
  return (
    <div>
      <h2>Sign In Form</h2>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Please enter your email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Please enter your password"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignIn;
