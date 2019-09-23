import React, { useState } from "react";
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import './style.css';

function Landing(props) {
  const [signup, setSignup] = useState(false);

  const toggleSignup = () => {
    setSignup(!signup);
  }

  return (
    <div className="Landing">
      <h1 data-test='landing-header'>MERN-JWT-Starter-Auth</h1>
      {
        !signup ? (
          <Login notify={props.notify} toggleSignup={toggleSignup}/>
        ) : (
          <Signup notify={props.notify} toggleSignup={toggleSignup}/>
        )
      }
    </div>
  );
}

export default Landing;
