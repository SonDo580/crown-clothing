import { useContext } from "react";
import PropTypes from "prop-types";

import { CartContext } from "../../contexts/CartContext";
import "./cartItem.scss";

export default function CartItem({ cartItem }) {
  const { id, name, imageUrl, price } = cartItem;

  const { removeProductFromCart } = useContext(CartContext);

  const removeFromCart = () => removeProductFromCart(id);

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />

      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span>${price}</span>
      </div>

      <div className="remove-button">
        <button onClick={removeFromCart}>X</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
};
