import { SET_CATEGORY_LIST, SET_CATEGORY_MAP } from "./categoryConstants";

const initialState = {
  categoryMap: {},
  categories: [],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY_LIST:
      return { ...state, categories: action.categories };

    case SET_CATEGORY_MAP:
      return { ...state, categoryMap: action.categoryMap };

    default:
      return state;
  }
};
