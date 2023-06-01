import { useContext } from "react";
import PropTypes from "prop-types";

import { CartContext } from "../../contexts/CartContext";

import {
  CartItemContainer,
  ItemDetails,
  RemoveButtonContainer,
} from "./cartItem.style.jsx";

export default function CartItem({ cartItem }) {
  const { id, name, imageUrl, price } = cartItem;

  const { removeProductFromCart } = useContext(CartContext);

  const removeFromCart = () => removeProductFromCart(id);

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />

      <ItemDetails>
        <h2>{name}</h2>
        <span>${price}</span>
      </ItemDetails>

      <RemoveButtonContainer>
        <button onClick={removeFromCart}>X</button>
      </RemoveButtonContainer>
    </CartItemContainer>
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
