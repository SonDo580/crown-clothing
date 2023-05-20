import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import "./cartIcon.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

export default function CartIcon() {
  const { cartItems, toggleCartVisible } = useContext(CartContext);

  return (
    <div className="cart-icon-container" onClick={toggleCartVisible}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{cartItems.length}</span>
    </div>
  );
}
