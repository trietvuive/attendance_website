import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const { pass } = document.forms[0];

	console.log(pass);
    // Compare password
    if (pass.value === "abcde") {
        setIsSubmitted(true);
		localStorage.setItem("password", pass.value);
		new Promise(r => setTimeout(r, 1000)).then(() => {
			window.location = "./attendance"
		})
      }
    else {
      // Username not found
      setErrorMessages({ name: "pass", message: errors.pass });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value = "Login"/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;