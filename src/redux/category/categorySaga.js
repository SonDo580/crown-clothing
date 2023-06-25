import { all, call, put, takeLatest } from "redux-saga/effects";

import { getCategoryDocuments } from "../../utils/firebase.utils";
import {
  fetchCategoryListInit,
  fetchCategoryListFailed,
  fetchCategoryListPending,
  fetchCategoryListSuccess,
} from "./categorySlice";

function* fetchCategoryList() {
  yield put(fetchCategoryListPending());

  try {
    const categories = yield call(getCategoryDocuments);
    yield put(fetchCategoryListSuccess(categories));
  } catch (error) {
    yield put(fetchCategoryListFailed(error));
  }
}

function* onFetchCategoryList() {
  yield takeLatest(fetchCategoryListInit.type, fetchCategoryList);
}

export function* categorySaga() {
  yield all([call(onFetchCategoryList)]);
}
