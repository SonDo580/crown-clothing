import { createSelector } from "reselect";

const userSliceSelector = (state) => state.user;

export const currentUserSelector = createSelector(
  userSliceSelector,
  (state) => state.currentUser
);

export const shouldResetFormSelector = createSelector(
  userSliceSelector,
  (state) => state.shouldResetForm
);

export const authenticationErrorSelector = createSelector(
  userSliceSelector,
  (state) => state.error
);
