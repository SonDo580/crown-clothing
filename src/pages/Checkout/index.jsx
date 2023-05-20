import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

import "./checkout.scss";
import CheckOutItem from "../../components/CheckoutItem";

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
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>

      <>
        {cartItems.map((item) => (
          <CheckOutItem key={item.id} item={item} />
        ))}
      </>

      <span className="total">Total: ${totalCost}</span>
    </div>
  );
}
