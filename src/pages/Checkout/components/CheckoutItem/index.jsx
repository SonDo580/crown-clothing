import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeProductFromCart,
  setItemQuantity,
} from "@/redux/cart/cartSlice.js";

import {
  Cell,
  CheckoutItemContainer,
  ImageContainer,
  Input,
  Button,
} from "./checkoutItem.style.jsx";

const MIN_QUANTITY = 1;
const QUANTITY_REGEX = /^[1-9]\d*$/;

export default function CheckOutItem({ item }) {
  const dispatch = useDispatch();
  const { id, name, price, quantity, imageUrl } = item;

  const incrementQuantity = () => dispatch(incrementItemQuantity(id));
  const decrementQuantity = () => dispatch(decrementItemQuantity(id));
  const removeFromCart = () => dispatch(removeProductFromCart(id));

  const onChangeQuantityInput = (event) => {
    const input = event.target.value;

    if (input === "" || QUANTITY_REGEX.test(input)) {
      dispatch(setItemQuantity({ id, quantity: input }));
    }
  };

  const onBlurQuantityInput = (event) => {
    const input = event.target.value;

    if (input === "") {
      dispatch(setItemQuantity({ id, quantity: MIN_QUANTITY }));
    }
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>

      <Cell>{name}</Cell>

      <Cell columnTitle="quantity">
        <Button type="arrow" onClick={decrementQuantity}>
          &#10094;
        </Button>

        <Input
          value={quantity}
          onChange={onChangeQuantityInput}
          onBlur={onBlurQuantityInput}
        />

        <Button type="arrow" onClick={incrementQuantity}>
          &#10095;
        </Button>
      </Cell>

      <Cell>${price}</Cell>

      <Button type="remove" onClick={removeFromCart}>
        X
      </Button>
    </CheckoutItemContainer>
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
