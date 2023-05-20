import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import "./cartDropdown.scss";
import Button from "../../common/Button";
import CartItem from "../CartItem";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  );
}
