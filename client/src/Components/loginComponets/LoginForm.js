import React from "react";
import { Link } from "react-router-dom";

function LoginForm({ inputHandler, onSubmitHandler, mobile, password }) {
  return (
    <React.Fragment>
      <div className="main-login-div">
        <div className="container center-div form-data ">
          <form onSubmit={onSubmitHandler}>
            {/* HEADER PART */}
            <h1 className="header-text p-1">Welcome To My Mujic App</h1>
            <h4 style={{ color: "#f5f507" }} className="mid-text mb-4">
              Login To Continue
            </h4>
            {/* HEADER PART */}

            <div className="col-12">
              <input
                type="text"
                className="input-login mb-4 col-12"
                placeholder="Mobile Number"
                autoCorrect="false"
                name="number"
                onChange={inputHandler}
                value={mobile}
              />
            </div>

            <div className="col-12">
              <input
                type="password"
                className="input-login "
                placeholder="Password"
                name="password"
                onChange={inputHandler}
                value={password}
              />
            </div>

            <button type="submit" className="login-button mt-4 mb-2">
              Login
            </button>

            <h4 style={{ color: "#f5f507" }} className="normal-text ">
              <b>
                Not A Member
                <Link className="ml-2" to="signup" style={{ color: "red" }}>
                  SIGN-UP
                </Link>
              </b>
            </h4>
            <p style={{ color: "white" }}>
              <b>Forgot Password</b>
            </p>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginForm;
