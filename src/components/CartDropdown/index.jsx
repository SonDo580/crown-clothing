import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { cartItemsSelector } from "../../redux/cart/cartSelectors";
import { toggleCartVisible } from "../../redux/cart/cartSlice";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cartDropdown.style.jsx";
import Button from "../../common/Button";
import CartItem from "../CartItem";

export default function CartDropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(cartItemsSelector);

  const gotoCheckout = () => {
    if (!cartItems.length) {
      toast.warn("You haven't selected any product");
      return;
    }

    navigate("/checkout");
    dispatch(toggleCartVisible());
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
