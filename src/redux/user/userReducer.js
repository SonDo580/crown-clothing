import { SET_CURRENT_USER } from "./userConstants";

const initialState = {
  currentUser: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.user };

    default:
      return state;
  }
};
