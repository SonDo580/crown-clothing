import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

import CheckOutItem from "../../components/CheckoutItem";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalDisplay,
} from "./checkout.style.jsx";

export default function Checkout() {
  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/shop");
    }
  }, [cartItems, navigate]);

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>

      <>
        {cartItems.map((item) => (
          <CheckOutItem key={item.id} item={item} />
        ))}
      </>

      <TotalDisplay>Total: ${totalCost}</TotalDisplay>
    </CheckoutContainer>
  );
}
