import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import "./NavBar.css";

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
      <h1 className="p-3 text-center">Welcome to Trip $plit</h1>
      <nav className="navbar navbar-expand-lg  navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          expand="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse p-3" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex justify-content-between w-100">
            <div className="d-flex">
              <li className="nav-item">
                <Link className="btn btn-dark m-2" to={"/mytrips"}>
                  My Trips
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-dark m-2" to={"/addjointrip"}>
                  Add/Join Trip
                </Link>
              </li>
            </div>
            <div className="d-flex">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={logout} to={"/"}>
                  Logout
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
