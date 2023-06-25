import { createSelector } from "@reduxjs/toolkit";

const cartSliceSelector = (state) => state.cart;

export const cartVisibleSelector = createSelector(
  cartSliceSelector,
  (state) => state.cartVisible
);

export const cartItemsSelector = createSelector(
  cartSliceSelector,
  (state) => state.cartItems
);

export const totalCostSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
