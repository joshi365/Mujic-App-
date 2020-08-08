import React from "react";

function Navbar({ logout, onSearchChange }) {
  return (
    <React.Fragment>
      <nav
        style={{ backgroundColor: "#555555" }}
        className="navbar fixed-top navbar-expand-lg navbar-light"
      >
        <h1 className="normal-text mr-4">
          <strong> MyMujic</strong>
        </h1>
        <input
          style={{ width: "45%" }}
          className="navbar-brand form-control input-login nav_input"
          type="search"
          onChange={onSearchChange}
          placeholder="Search Mujic"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-danger my-2 my-sm-0 logout-btn"
              type="submit"
              onClick={logout}
            >
              <p>Logout</p>
            </button>
          </form>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
