import { all, call } from "redux-saga/effects";

import { categorySaga } from "./category/categorySaga";
import { userSaga } from "./user/userSaga";

export function* rootSaga() {
  yield all([call(categorySaga), call(userSaga)]);
}
