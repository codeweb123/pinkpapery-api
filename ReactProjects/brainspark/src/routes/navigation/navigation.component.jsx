import { Fragment } from 'react'
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'
//|| Fragment used if you don't want to render out a specific html element. Example: Use instead of a container div.
//|| Outlet renders out <Routes> </Routes>

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <CrownLogo className='logo'/>
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
            Shop
            </Link>
            <Link className="nav-link" to="/auth">
            Sign In
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;