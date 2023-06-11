import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { signOutUser } from "../../utils/firebase.utils";
import { currentUserSelector } from "../../redux/user/userSelectors";
import { cartVisibleSelector } from "../../redux/cart/cartSelectors";

import {
  LogoContainer,
  NavBarContainer,
  NavLinksContainer,
  StyledNavLink,
} from "./navbar.style.jsx";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";

export default function NavBar() {
  const currentUser = useSelector(currentUserSelector);
  const cartVisible = useSelector(cartVisibleSelector);

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <NavBarContainer>
      <LogoContainer to="/">
        <CrownLogo className="logo" />
      </LogoContainer>

      <NavLinksContainer>
        <StyledNavLink to="/shop">SHOP</StyledNavLink>

        {currentUser ? (
          <StyledNavLink as="span" onClick={handleSignOut}>
            SIGN OUT
          </StyledNavLink>
        ) : (
          <StyledNavLink to="/auth">SIGN IN</StyledNavLink>
        )}

        <CartIcon />
      </NavLinksContainer>

      {cartVisible && <CartDropdown />}
    </NavBarContainer>
  );
}
