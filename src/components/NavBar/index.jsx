import { Link, NavLink } from "react-router-dom";
import "./navigation.scss";
import CrownLogo from "../../assets/CrownLogo";

export default function NavBar() {
  return (
    <nav className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <NavLink className="nav-link" to="/shop">
          SHOP
        </NavLink>
      </div>
    </nav>
  );
}
