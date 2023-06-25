import { createSelector } from "@reduxjs/toolkit";

const categorySliceSelector = (state) => state.category;

export const categoryListSelector = createSelector(
  categorySliceSelector,
  (state) => state.categories
);

export const categoryMapSelector = createSelector(
  categoryListSelector,
  (categories) =>
    categories.reduce(
      (accumulator, { title, items }) => ({ ...accumulator, [title]: items }),
      {}
    )
);

export const categoryLoadingSelector = createSelector(
  categorySliceSelector,
  (state) => state.loading
);

export const categoryErrorSelector = createSelector(
  categorySliceSelector,
  (state) => state.error
);
