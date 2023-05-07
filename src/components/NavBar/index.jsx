import { Link, NavLink } from "react-router-dom";
import "./navigation.scss";
import CrownLogo from "../../assets/CrownLogo";

const navlinkClassName = ({ isActive }) =>
  isActive ? "nav-link active" : "nav-link";

export default function NavBar() {
  return (
    <nav className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <NavLink className={navlinkClassName} to="/shop">
          SHOP
        </NavLink>
        <NavLink className={navlinkClassName} to="/sign-in">
          SIGN IN
        </NavLink>
      </div>
    </nav>
  );
}
