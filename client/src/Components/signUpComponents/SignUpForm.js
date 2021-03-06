import React from "react";

function SignUpForm({
  onSignupHandler,
  inputHandler,
  name,
  email,
  password,
  confirmPassword,
}) {
  return (
    <React.Fragment>
      <div className="main-login-div">
        <div className="container center-div form-data ">
          <form onSubmit={onSignupHandler}>
            <h4 className="mid-text mb-3">Sign-Up To Continue</h4>
            <div className="form-group row">
              <div className="col-sm-4"></div>

              <div className="col-sm-12">
                <input
                  type="text"
                  className="input-login mb-3"
                  placeholder="Full Name"
                  autoCorrect="false"
                  name="name"
                  onChange={inputHandler}
                  value={name}
                />
              </div>
              <div className="col-sm-12"></div>
            </div>
            <div className="form-group row">
              <div className="col-sm-4"></div>

              <div className="col-sm-12">
                <input
                  type="email"
                  className="input-login mb-3"
                  placeholder="Email"
                  autoCorrect="false"
                  name="email"
                  onChange={inputHandler}
                  value={email}
                />
              </div>
              <div className="col-sm-12"></div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12"></div>

              <div className="col-sm-12 ">
                <input
                  type="password"
                  className="input-login mb-4 "
                  placeholder="Password"
                  name="password"
                  onChange={inputHandler}
                  value={password}
                />
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="form-group row">
              <div className="col-sm-4"></div>

              <div className="col-sm-12">
                <input
                  type="password"
                  className="input-login mb-2"
                  placeholder="Confirm Password"
                  onChange={inputHandler}
                  value={confirmPassword}
                  name="confirmPassword"
                />
              </div>
              <div className="col-sm-4"></div>
            </div>
            <button type="submit" className="login-button mb-3">
              Sign-Up
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUpForm;
