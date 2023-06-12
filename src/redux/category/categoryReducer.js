import { SET_CATEGORY_LIST } from "./categoryConstants";

const initialState = {
  categories: [],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY_LIST:
      return { ...state, categories: action.categories };

    default:
      return state;
  }
};
