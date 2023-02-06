import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="logo"></img>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Login
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
