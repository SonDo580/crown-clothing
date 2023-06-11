import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { BUTTON_TYPES } from "../../constants/button";
import { cartItemsSelector } from "../../redux/cart/cartSelectors";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../redux/cart/cartActions";

import Button from "../../common/Button";
import { Footer, ProductCardContainer } from "./produceCard.style";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { id, name, imageUrl, price } = product;
  const cartItems = useSelector(cartItemsSelector);

  const isInCart = cartItems.findIndex((item) => item.id === id) !== -1;

  const addToCart = () => dispatch(addProductToCart(product));
  const removeFromCart = () => dispatch(removeProductFromCart(id));

  return (
    <ProductCardContainer isInCart={isInCart}>
      <img src={imageUrl} alt={name} />

      <Footer>
        <span>{name}</span>
        <span>${price}</span>
      </Footer>

      {isInCart ? (
        <Button buttonType={BUTTON_TYPES.danger} onClick={removeFromCart}>
          Remove from Cart
        </Button>
      ) : (
        <Button buttonType={BUTTON_TYPES.inverted} onClick={addToCart}>
          Add to Cart
        </Button>
      )}
    </ProductCardContainer>
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
