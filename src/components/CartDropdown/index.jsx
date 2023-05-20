import { useContext } from "react";
import { toast } from "react-toastify";

import { CartContext } from "../../contexts/CartContext";

import "./cartDropdown.scss";
import Button from "../../common/Button";
import CartItem from "../CartItem";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  const gotoCheckout = () => {
    if (!cartItems.length) {
      toast.warn("You haven't selected any product");
      return;
    }
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={gotoCheckout}>Go to Checkout</Button>
    </div>
  );
}
