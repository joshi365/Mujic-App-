import React from "react";

import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error_page_main">
      <img className="err_img" src={require("../Assets/images/dina.gif")} />
      <div className="back_home_button">
        <button className="error-button">Back To Home</button>
      </div>
    </div>
  );
}

export default ErrorPage;
