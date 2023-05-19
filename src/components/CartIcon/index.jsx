import PropTypes from "prop-types";

import "./cartIcon.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

export default function CartIcon({ onClick }) {
  return (
    <div className="cart-icon-container" onClick={onClick}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

CartIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};
