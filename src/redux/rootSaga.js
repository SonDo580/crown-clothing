import { all, call } from "redux-saga/effects";
import { categorySaga } from "./category/categorySaga";

export function* rootSaga() {
  yield all([call(categorySaga)]);
}
