import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link
          className="logo-container"
          to="/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="logo.png" alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            SignIn
          </Link>
          <Link className="nav-link" to="/land">
            Pick_a_Land
          </Link>
          <Link className="nav-link" to="/pet">
            Pick_a_Pet
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
