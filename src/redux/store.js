import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";

const middlewares = [logger];

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middlewares)
);
