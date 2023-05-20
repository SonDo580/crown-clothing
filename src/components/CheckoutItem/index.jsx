import { useContext } from "react";
import PropTypes from "prop-types";

import { CartContext } from "../../contexts/CartContext";
import "./checkoutItem.scss";

const MIN_QUANTITY = 1;
const regexQuantity = /^[1-9]\d*$/;

export default function CheckOutItem({ item }) {
  const { id, name, price, quantity, imageUrl } = item;

  const {
    incrementItemQuantity,
    decrementItemQuantity,
    removeProductFromCart,
    setItemQuantity,
  } = useContext(CartContext);

  const incrementQuantity = () => incrementItemQuantity(id);
  const decrementQuantity = () => decrementItemQuantity(id);

  const removeFromCart = () => removeProductFromCart(id);

  const onChangeQuantityInput = (event) => {
    const input = event.target.value;

    if (input === "" || regexQuantity.test(input)) {
      setItemQuantity({ id, quantity: input });
    }
  };

  const onBlurQuantityInput = (event) => {
    const input = event.target.value;

    if (input === "") {
      setItemQuantity({ id, quantity: MIN_QUANTITY });
    }
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="name">{name}</div>

      <div className="quantity">
        <button className="arrow" onClick={decrementQuantity}>
          &#10094;
        </button>

        <input
          className="value"
          value={quantity}
          onChange={onChangeQuantityInput}
          onBlur={onBlurQuantityInput}
        />

        <button className="arrow" onClick={incrementQuantity}>
          &#10095;
        </button>
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
