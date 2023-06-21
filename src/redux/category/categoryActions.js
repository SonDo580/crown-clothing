import { getCategoryDocuments } from "../../utils/firebase.utils";
import {
  FETCH_CATEGORY_LIST_FAILED,
  FETCH_CATEGORY_LIST_INIT,
  FETCH_CATEGORY_LIST_SUCCESS,
} from "./categoryConstants";

export const fetchCategoryListInit = () => ({
  type: FETCH_CATEGORY_LIST_INIT,
});

export const fetchCategoryListSuccess = (categories) => ({
  type: FETCH_CATEGORY_LIST_SUCCESS,
  categories,
});

export const fetchCategoryListFailed = (error) => ({
  type: FETCH_CATEGORY_LIST_FAILED,
  error,
});

export const fetchCategoryListThunk = () => async (dispatch) => {
  dispatch(fetchCategoryListInit());

  try {
    const categories = await getCategoryDocuments();
    dispatch(fetchCategoryListSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoryListFailed(error));
  }
};
