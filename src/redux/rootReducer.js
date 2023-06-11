import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer";
import { categoryReducer } from "./category/categoryReducer";
import { cartReducer } from "./cart/cartReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
});
