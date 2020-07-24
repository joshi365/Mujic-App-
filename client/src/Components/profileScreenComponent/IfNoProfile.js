import React from "react";
import { Link } from "react-router-dom";

function IfNoProfile() {
  return (
    <React.Fragment>
      <div style={{ padding: "2%", textAlign: "center" }}>
        <div className="center-div">
          <h2 style={{ color: "black" }} className="mid-text mb-2">
            Hey User !
          </h2>
          <p className="normal-text" style={{ color: "black" }}>
            We just want a few details to get you started
          </p>
          <p className="normal-text mb-4" style={{ color: "black" }}>
            Click the link below it will take only take a minute
          </p>

          <Link to="/profileform">
            <h1
              style={{
                color: "red",
                textDecoration: "hue($color: black)",
              }}
              className="mid-text"
            >
              Continue
            </h1>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default IfNoProfile;
