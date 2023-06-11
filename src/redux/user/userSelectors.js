import { createSelector } from "reselect";

const userSliceSelector = (state) => state.user;

export const currentUserSelector = createSelector(
  userSliceSelector,
  (state) => state.currentUser
);
