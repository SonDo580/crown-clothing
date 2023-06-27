import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    fetchCategoryListPending(state) {
      state.loading = true;
    },
    fetchCategoryListSuccess(state, action) {
      state.error = null;
      state.categories = action.payload;
      state.loading = false;
    },
    fetchCategoryListFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default categorySlice.reducer;

export const {
  fetchCategoryListPending,
  fetchCategoryListSuccess,
  fetchCategoryListFailed,
} = categorySlice.actions;

export const fetchCategoryListInit = createAction(
  "category/fetchCategoryListInit"
);
