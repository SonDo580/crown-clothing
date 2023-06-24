import {
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_RESET,
  SIGN_UP_SUCCESS,
  START_AUTHENTICATION,
  STOP_INITIAL_CHECK,
} from "./userConstants";

const initialState = {
  currentUser: null,
  initialChecking: true,
  authenticating: false,
  error: null,
  shouldResetForm: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case STOP_INITIAL_CHECK:
      return { ...state, initialChecking: false };

    case START_AUTHENTICATION:
      return { ...state, authenticating: true };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        authenticating: false,
        error: null,
        currentUser: action.user,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        authenticating: false,
        error: null,
        shouldResetForm: true,
      };

    case SIGN_UP_RESET:
      return { ...state, shouldResetForm: false };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        authenticating: false,
        error: null,
        currentUser: null,
      };

    case SIGN_IN_FAILED:
    case SIGN_UP_FAILED:
    case SIGN_OUT_FAILED:
      return { ...state, authenticating: false, error: action.error };

    default:
      return state;
  }
};
