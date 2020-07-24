import React from "react";

function Navbar({ logout, onSearchChange }) {
  return (
    <React.Fragment>
      <nav className="navbar mb-5 fixed-top navbar-light bg-success">
        <img
          style={{ width: "4%" }}
          src="https://www.screenja.com/static/img/thumbs/goku-ultra-instinct-1-normal-636.png"
        />
        <input onChange={onSearchChange} placeholder="search here" />
        <form className="form-inline">
          <button className="btn btn-danger my-2 my-sm-0" onClick={logout}>
            logout
          </button>
        </form>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
