import React from "react";

function Navbar({ logout, onSearchChange }) {
  return (
    <React.Fragment>
      <nav
        style={{ backgroundColor: "#555555" }}
        class="navbar navbar-expand-lg navbar-light"
      >
        <img
          className="profile_img "
          src="https://www.screenja.com/static/img/thumbs/goku-ultra-instinct-1-normal-636.png"
        />
        <input
          style={{ width: "60%" }}
          class="navbar-brand form-control mr-sm-2 input-login nav_input"
          type="search"
          placeholder="Search Your Song"
          onChange={onSearchChange}
          placeholder="Search Mujic Here"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <form class="form-inline my-2 my-lg-0">
            <button
              class="btn btn-danger my-2 my-sm-0 logout-btn"
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
