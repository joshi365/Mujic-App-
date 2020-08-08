import React from "react";

function VerifyOtp({ inputHandler, otp, onOtpSubmit, changeNumber }) {
  return (
    <React.Fragment>
      <div className="main-login-div">
        <div className="col-12 center-div">
          <h1 className="col-sm-12 mid-text mb-4">
            Otp sended to {sessionStorage.getItem("number")}
          </h1>

          <input
            name="number"
            type="text"
            value={localStorage.getItem("number")}
            onChange={inputHandler}
            placeholder="enter your mobile number"
            className="col-sm-4 input-login mb-3"
          />

          <div>
            <input
              name="otp"
              type="text"
              value={otp}
              onChange={inputHandler}
              placeholder="OTP"
              className="col-sm-4 input-login mb-3"
            />
          </div>
          <div>
            <button
              className="col-sm-12 mb-3 login-button"
              onClick={onOtpSubmit}
            >
              submit
            </button>
            <h1 style={{ color: "#d9d02e" }} className="col-sm-12 normal-text">
              Want to change number click here
            </h1>
            <h1
              className="col-sm-12 normal-text"
              style={{ color: "#ff0505", cursor: "pointer" }}
              onClick={changeNumber}
            >
              Click here
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VerifyOtp;
