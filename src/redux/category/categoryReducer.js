import {
  FETCH_CATEGORY_LIST_FAILED,
  FETCH_CATEGORY_LIST_PENDING,
  FETCH_CATEGORY_LIST_SUCCESS,
} from "./categoryConstants";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_LIST_PENDING:
      return { ...state, loading: true };

    case FETCH_CATEGORY_LIST_FAILED:
      return { ...state, error: action.error, loading: false };

    case FETCH_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
