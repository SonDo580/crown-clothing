import {
  FETCH_CATEGORY_LIST_FAILED,
  FETCH_CATEGORY_LIST_INIT,
  FETCH_CATEGORY_LIST_PENDING,
  FETCH_CATEGORY_LIST_SUCCESS,
} from "./categoryConstants";

export const fetchCategoryListInit = () => ({
  type: FETCH_CATEGORY_LIST_INIT,
});

export const fetchCategoryListPending = () => ({
  type: FETCH_CATEGORY_LIST_PENDING,
});

export const fetchCategoryListSuccess = (categories) => ({
  type: FETCH_CATEGORY_LIST_SUCCESS,
  categories,
});

export const fetchCategoryListFailed = (error) => ({
  type: FETCH_CATEGORY_LIST_FAILED,
  error,
});
