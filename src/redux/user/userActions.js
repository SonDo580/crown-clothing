import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_INIT,
  GOOGLE_SIGN_IN_INIT,
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_INIT,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_INIT,
  SIGN_UP_RESET,
  SIGN_UP_SUCCESS,
  START_AUTHENTICATION,
  STOP_INITIAL_CHECK,
} from "./userConstants";

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

export const stopInitialCheck = () => ({
  type: STOP_INITIAL_CHECK,
});

export const startAuthentication = () => ({
  type: START_AUTHENTICATION,
});

export const googleSignInInit = () => ({
  type: GOOGLE_SIGN_IN_INIT,
});

export const emailSignInInit = (email, password) => ({
  type: EMAIL_SIGN_IN_INIT,
  email,
  password,
});

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  user,
});

export const signInFailed = (error) => ({
  type: SIGN_IN_FAILED,
  error,
});

export const signUpInit = (email, password, displayName) => ({
  type: SIGN_UP_INIT,
  email,
  password,
  displayName,
});

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
});

export const signUpFailed = (error) => ({
  type: SIGN_UP_FAILED,
  error,
});

export const signUpReset = () => ({
  type: SIGN_UP_RESET,
});

export const signOutInit = () => ({
  type: SIGN_OUT_INIT,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFailed = (error) => ({
  type: SIGN_OUT_FAILED,
  error,
});
