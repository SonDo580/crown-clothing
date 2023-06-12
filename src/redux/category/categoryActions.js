import { SET_CATEGORY_LIST } from "./categoryConstants";

export const setCategoryList = (categories) => ({
  type: SET_CATEGORY_LIST,
  categories,
});
