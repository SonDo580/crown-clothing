import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cartIcon.style.jsx";

export default function CartIcon() {
  const { cartItems, toggleCartVisible } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleCartVisible}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartItems.length}</ItemCount>
    </CartIconContainer>
  );
}
