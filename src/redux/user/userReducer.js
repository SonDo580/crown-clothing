import {
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_RESET,
  SIGN_UP_SUCCESS,
} from "./userConstants";

const initialState = {
  currentUser: null,
  // loading: false,
  error: null,
  shouldResetForm: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...state, error: null, currentUser: action.user };

    case SIGN_UP_SUCCESS:
      return { ...state, error: null, shouldResetForm: true };

    case SIGN_UP_RESET:
      return { ...state, shouldResetForm: false };

    case SIGN_OUT_SUCCESS:
      return { ...state, error: null, currentUser: null };

    case SIGN_IN_FAILED:
    case SIGN_UP_FAILED:
    case SIGN_OUT_FAILED:
      return { ...state, error: action.error };

    default:
      return state;
  }
};
