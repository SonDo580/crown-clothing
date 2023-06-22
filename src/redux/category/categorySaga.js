import { all, call, put, takeLatest } from "redux-saga/effects";

import { getCategoryDocuments } from "../../utils/firebase.utils";
import { FETCH_CATEGORY_LIST_INIT } from "./categoryConstants";
import {
  fetchCategoryListFailed,
  fetchCategoryListPending,
  fetchCategoryListSuccess,
} from "./categoryActions";

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
  yield takeLatest(FETCH_CATEGORY_LIST_INIT, fetchCategoryList);
}

export function* categorySaga() {
  yield all([call(onFetchCategoryList)]);
}
