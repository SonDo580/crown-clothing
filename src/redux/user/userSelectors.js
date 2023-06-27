import { createSelector } from "@reduxjs/toolkit";

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

export const initialCheckingSelector = createSelector(
  userSliceSelector,
  (state) => state.initialChecking
);

export const authenticatingSelector = createSelector(
  userSliceSelector,
  (state) => state.authenticating
);
