import { useContext } from "react";
import PropTypes from "prop-types";

import { CartContext } from "../../contexts/CartContext";

import "./productCard.scss";
import Button from "../../common/Button";

export default function ProductCard({ product }) {
  const { id, name, imageUrl, price } = product;

  const { cartItems, addProductToCart, removeProductFromCart } =
    useContext(CartContext);

  const isInCart = cartItems.findIndex((item) => item.id === id) !== -1;

  const addToCart = () => addProductToCart(product);
  const removeFromCart = () => removeProductFromCart(id);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>

      {isInCart ? (
        <Button buttonType="danger" onClick={removeFromCart}>
          Remove from Cart
        </Button>
      ) : (
        <Button buttonType="inverted" onClick={addToCart}>
          Add to Cart
        </Button>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};
