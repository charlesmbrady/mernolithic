import React, { useState } from "react";
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import AUTH from '../../utils/AUTH';
import './style.css';

function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const user = { firstName, lastName, username, password };
    AUTH.signup(user).then( response => {
      if(response.data.message){
        props.notify("error", response.data.message)
      }else {
        props.notify("success", "Success! Signed up!")
        props.toggleSignup();
      }
    });
  }

  return (
    <Container className="Signup">
      <Row>
        <Col>
          <h3 className="authentication-header" data-test="signup-header">Signup</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            id="first-name"
            className="authentication-input"
            placeholder="First Name"
            name="firstName"
            data-test="signup-input-first-name"
            onChange={e => setFirstName(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            id="last-name"
            className="authentication-input"
            placeholder="Last Name"
            name="lastName"
            data-test="signup-input-last-name"
            onChange={e => setLastName(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            id="username"
            className="authentication-input"
            placeholder="Email/Username"
            name="username"
            data-test="signup-input-username"
            onChange={e => setUsername(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            id="password"
            className="authentication-input"
            placeholder="Password"
            name="password"
            type="password"
            data-test="signup-input-password"
            onChange={e => setPassword(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <button data-test="signup-submit-button" id="submit-button" className="options btn btn-primary" onClick={() => handleSignup()}>Submit</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button data-test="signup-login-button" id="login-button" className="options btn btn-secondary" onClick={() => props.toggleSignup()}>Login</button>
        </Col>
      </Row>
    </Container>
  );
}
export default Signup;
