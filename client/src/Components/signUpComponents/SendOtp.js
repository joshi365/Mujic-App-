import React from "react";

export default function SendOtp({ number, inputHandler, otpSendHandler }) {
  return (
    <React.Fragment>
      <div className="main-login-div">
        <div className="col-12 center-div">
          <h1 className="col-sm-12 mid-text mb-4" style={{ color: "#fff" }}>
            To register please enter your mobile number
          </h1>
          <h1
            className="col-sm-12 normal-text mb-4"
            style={{ color: "#d9d02e" }}
          >
            We will send you and otp to register
          </h1>
          <input
            name="number"
            value={number}
            onChange={inputHandler}
            className={"col-sm-4 input-login mb-3"}
            placeholder="enter your mobile number"
            type="text"
          />
          <div>
            <button
              className=" col-sm-12 login-button"
              onClick={otpSendHandler}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
