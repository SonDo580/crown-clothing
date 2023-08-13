import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  cartItemsSelector,
  totalCostSelector,
} from "@/redux/cart/cartSelectors";

import CheckOutItem from "../../components/CheckoutItem";
import PaymentForm from "../../components/PaymentForm";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalDisplay,
} from "./checkout.style.jsx";

export default function Checkout() {
  const navigate = useNavigate();

  const cartItems = useSelector(cartItemsSelector);
  const totalCost = useSelector(totalCostSelector);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/shop");
    }
  }, [cartItems, navigate]);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item) => (
        <CheckOutItem key={item.id} item={item} />
      ))}

      <TotalDisplay>Total: ${totalCost}</TotalDisplay>
      <PaymentForm />
    </CheckoutContainer>
  );
}
