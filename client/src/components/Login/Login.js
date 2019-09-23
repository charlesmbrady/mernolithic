import React, { useState } from "react";
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import AUTH from '../../utils/AUTH';
import './style.css';

function Login(props) {
  //need to use toggleSignup from props
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = { username, password };
    AUTH.login(user).then(response => {
      //If there is a successfull connection, store in local storage and 
      //redirect to the user's dashboard
      if (response.data.token) {
        props.notify("success", "Authenticated, logging in...")
        localStorage.setItem('connection', JSON.stringify(response.data))
        setTimeout(() => {
          window.location.replace('dashboard')
        }, 2000)
      } else {
        props.notify("error", response.data.message)
      }
    });
  }

  return (
    <Container className="Login">
      <Row>
        <Col>
          <h3 className="authentication-header" data-test="login-header">Login</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <input id="username"
            className="authentication-input"
            placeholder="email/username"
            name="username"
            data-test="login-input-username"
            onChange={e => setUsername(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input id="password"
            placeholder="password"
            className="authentication-input"
            name="password"
            type="password"
            data-test="login-input-password"
            onChange={e => setPassword(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <button data-test="login-submit-button" id="login-button" className="options btn btn-primary" onClick={() => handleLogin()}>Submit</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button data-test="login-signup-button" id="signup-button" className="options btn btn-secondary" onClick={() => props.toggleSignup()}>Signup</button>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;