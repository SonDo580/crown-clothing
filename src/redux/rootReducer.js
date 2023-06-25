import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./user/userReducer";
import { categoryReducer } from "./category/categoryReducer";
import { cartReducer } from "./cart/cartSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
});
