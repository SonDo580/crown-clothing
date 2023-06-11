import { SET_CATEGORY_LIST, SET_CATEGORY_MAP } from "./categoryConstants";

export const setCategoryList = (categories) => ({
  type: SET_CATEGORY_LIST,
  categories,
});

export const setCategoryMap = (categoryMap) => ({
  type: SET_CATEGORY_MAP,
  categoryMap,
});
