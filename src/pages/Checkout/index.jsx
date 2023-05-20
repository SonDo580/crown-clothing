import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

export default function Checkout() {
  const { cartItems, incrementItemQuantity, decrementItemQuantity } =
    useContext(CartContext);

  // TODO: navigate to shop if cart has no items

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
