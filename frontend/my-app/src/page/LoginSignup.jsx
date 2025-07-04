import React from "react";
import './CSS/LoginSignUp.css';

const LoginSignup = () => {
  return (
    <div className="login-sign-up">
      <form className="login-sign-up-container">
        <h1>Sign Up</h1>
        <div className="login-sign-up-fields">
          <label htmlFor="text">Your Name</label>
          <input type="text" id="text" placeholder="John Doe" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="you@example.com" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Continue</button>
        <p className="login-sign-up-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="login-sign-up-agree">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">By continuing, I agree to the terms of use & privacy policy</label>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;

/**

import React from "react";
import './CSS/LoginSignUp.css'

const LoginSignup = () => {
  return (
    <div>
      <div className="login-sign-up">
        <div className="login-sign-up-container">
          <h1>Sign up</h1>
          <div className="login-sign-up-fields">
            <input type="text" name="" id="" placeholder="Your Email"/>
            <input type="email" name="" id="" placeholder="Email Address"/>
            <input type="password" name="" id="" placeholder="Password"/>
          </div>
          <button>Continue</button>
          <p className="login-sign-up-login">
            Already have an account <span>Login here</span>
          </p>
          <div className="login-sign-up-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
 */