import { createSlice } from "@reduxjs/toolkit";
import { createActions } from "@/utils/redux.utils";

const initialState = {
  currentUser: null,
  initialChecking: true,
  authenticating: false,
  error: null,
  shouldResetForm: false,
};

const sliceName = "user";

const userSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    stopInitialCheck(state) {
      state.initialChecking = false;
    },
    startAuthentication(state) {
      state.authenticating = true;
    },
    signInSuccess(state, action) {
      state.authenticating = false;
      state.error = null;
      state.currentUser = action.payload;
    },
    signInFailed(state, action) {
      state.authenticating = false;
      state.error = action.payload;
    },
    signUpSuccess(state) {
      state.authenticating = false;
      state.error = null;
      state.shouldResetForm = true;
    },
    signUpFailed(state, action) {
      state.authenticating = false;
      state.error = action.payload;
    },
    signUpReset(state) {
      state.shouldResetForm = false;
    },
    signOutSuccess(state) {
      state.authenticating = false;
      state.error = null;
      state.currentUser = null;
    },
    signOutFailed(state, action) {
      state.authenticating = false;
      state.error = action.payloady;
    },
  },
});

export default userSlice.reducer;

export const {
  stopInitialCheck,
  startAuthentication,
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signUpReset,
  signOutSuccess,
  signOutFailed,
} = userSlice.actions;

const sagaInitActionTypes = [
  "checkUserSession",
  "googleSignInInit",
  "emailSignInInit",
  "signUpInit",
  "signOutInit",
];

const sagaInitActions = createActions(sliceName, sagaInitActionTypes);

export const {
  checkUserSession,
  googleSignInInit,
  emailSignInInit,
  signUpInit,
  signOutInit,
} = sagaInitActions;
