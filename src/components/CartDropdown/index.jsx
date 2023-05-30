import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { CartContext } from "../../contexts/CartContext";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cartDropdown.style.jsx";
import Button from "../../common/Button";
import CartItem from "../CartItem";

export default function CartDropdown() {
  const navigate = useNavigate();

  const { cartItems, toggleCartVisible } = useContext(CartContext);

  const gotoCheckout = () => {
    if (!cartItems.length) {
      toast.warn("You haven't selected any product");
      return;
    }

    navigate("/checkout");
    toggleCartVisible();
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>{"You haven't selected any product"}</EmptyMessage>
        )}
      </CartItemsContainer>

      <Button onClick={gotoCheckout}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
}
