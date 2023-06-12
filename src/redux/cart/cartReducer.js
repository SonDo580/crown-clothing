import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_ITEM_QUANTITY,
  INCREMENT_ITEM_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
  SET_ITEM_QUANTITY,
  TOGGLE_CART_VISIBLE,
} from "./cartConstants";

const initialState = {
  cartVisible: false,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_VISIBLE:
      return { ...state, cartVisible: !state.cartVisible };

    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.product, quantity: 1 }],
      };

    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.id),
      };

    case INCREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case DECREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id !== action.id || item.quantity === 1
            ? item
            : { ...item, quantity: item.quantity - 1 }
        ),
      };

    case SET_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.id ? { ...item, quantity: action.quantity } : item
        ),
      };

    default:
      return state;
  }
};
