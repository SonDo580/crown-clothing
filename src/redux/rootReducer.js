import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import categoryReducer from "./category/categorySlice";
import cartReducer from "./cart/cartSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
});
