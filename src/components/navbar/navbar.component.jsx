import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import "./navbar.styles.scss";

const NavBar = ({ currentUser }) => (
  <div className="nav-bar">
    <div className="logo">
      <h2>E.Z.B</h2>
    </div>
    <div className="options">
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default NavBar;
