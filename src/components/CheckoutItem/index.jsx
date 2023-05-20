import { useContext } from "react";
import PropTypes from "prop-types";

import { CartContext } from "../../contexts/CartContext";
import "./checkoutItem.scss";

export default function CheckOutItem({ item }) {
  const { id, name, price, quantity, imageUrl } = item;

  const {
    incrementItemQuantity,
    decrementItemQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const incrementQuantity = () => incrementItemQuantity(id);
  const decrementQuantity = () => decrementItemQuantity(id);

  const removeFromCart = () => removeProductFromCart(id);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="name">{name}</div>

      <div className="quantity">
        <button onClick={decrementQuantity}>-</button>
        <span className="value">{quantity}</span>
        <button onClick={incrementQuantity}>+</button>
      </div>

      <div className="price">${price}</div>

      <button className="remove-button" onClick={removeFromCart}>
        X
      </button>
    </div>
  );
}

CheckOutItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
};
