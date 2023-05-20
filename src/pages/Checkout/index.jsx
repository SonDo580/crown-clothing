import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

export default function Checkout() {
  const navigate = useNavigate();

  const { cartItems, incrementItemQuantity, decrementItemQuantity } =
    useContext(CartContext);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/shop");
    }
  }, [cartItems, navigate]);

  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        {cartItems.map(({ name, id, quantity }) => (
          <div key={id}>
            <h2>{name}</h2>
            <button onClick={() => decrementItemQuantity(id)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => incrementItemQuantity(id)}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
}
