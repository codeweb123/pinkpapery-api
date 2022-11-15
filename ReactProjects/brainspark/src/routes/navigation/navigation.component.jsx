import { Fragment, useContext } from 'react'
import { Outlet, Link } from "react-router-dom";
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import logo from '../../assets/brainspark.png'
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context'
import './navigation.styles.scss'
import { signOutUser } from '../../utils/firebase/firebase.utils';
//|| Fragment used if you don't want to render out a specific html element. Example: Use instead of a container div.
//|| Outlet renders out <Routes> </Routes>
const Navigation = () => {
  const { currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
    return (
      <Fragment>
        <div className="navigation">
          <div className="logo-container" to="/">
            <Link to="/">
              <img src={logo} alt="Logo" width="310px"/>
            </Link>
          </div>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
            Shop
            </Link>
            <Link className="nav-link" to="/aboutus">
            About Us
            </Link>
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}>Sign Out</span> ) : ( 
                <Link className="nav-link" to="/auth">
                Sign In
                </Link> 
              ) 
            }
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
      </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;