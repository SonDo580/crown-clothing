import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { signOutUser } from "../../utils/firebase.utils";

import { UserContext } from "../../contexts/UserContext";

import "./navigation.scss";
import CrownLogo from "../../assets/CrownLogo";

const navlinkClassName = ({ isActive }) =>
  isActive ? "nav-link active" : "nav-link";

export default function NavBar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <nav className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <NavLink className={navlinkClassName} to="/shop">
          SHOP
        </NavLink>

        {currentUser ? (
          <span className="nav-link" onClick={handleSignOut}>
            SIGN OUT
          </span>
        ) : (
          <NavLink className={navlinkClassName} to="/auth">
            SIGN IN
          </NavLink>
        )}
      </div>
    </nav>
  );
}
