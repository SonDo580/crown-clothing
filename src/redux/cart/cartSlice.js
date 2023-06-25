import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartVisible: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartVisible(state) {
      state.cartVisible = !state.cartVisible;
    },
    addProductToCart(state, action) {
      state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    removeProductFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementItemQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity += 1;
    },
    decrementItemQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    setItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      item.quantity = quantity;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  toggleCartVisible,
  addProductToCart,
  removeProductFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  setItemQuantity,
} = cartSlice.actions;
