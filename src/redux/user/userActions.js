import { SET_CURRENT_USER } from "./userConstants";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
});
