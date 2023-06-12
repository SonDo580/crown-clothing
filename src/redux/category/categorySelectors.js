import { createSelector } from "reselect";

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
