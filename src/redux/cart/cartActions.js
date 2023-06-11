import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_ITEM_QUANTITY,
  INCREMENT_ITEM_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
  SET_ITEM_QUANTITY,
  TOGGLE_CART_VISIBLE,
} from "./cartConstants";

export const toggleCartVisible = () => ({
  type: TOGGLE_CART_VISIBLE,
});

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  product,
});

export const removeProductFromCart = (id) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  id,
});

export const incrementItemQuantity = (id) => ({
  type: INCREMENT_ITEM_QUANTITY,
  id,
});

export const decrementItemQuantity = (id) => ({
  type: DECREMENT_ITEM_QUANTITY,
  id,
});

export const setItemQuantity = ({ id, quantity }) => ({
  type: SET_ITEM_QUANTITY,
  id,
  quantity,
});
