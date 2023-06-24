import { all, call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import {
  createEmailPasswordUser,
  createUserDocument,
  getCurrentUser,
  signInWithEmailPassword,
  signInWithGoogle,
  signOutUser,
} from "../../utils/firebase.utils";
import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_INIT,
  GOOGLE_SIGN_IN_INIT,
  SIGN_OUT_INIT,
  SIGN_UP_INIT,
} from "./userConstants";
import {
  signInSuccess,
  signInFailed,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
  stopInitialCheck,
  startAuthentication,
} from "./userActions";

function* getAuthenticatedUser() {
  yield put(startAuthentication());

  try {
    const user = yield call(getCurrentUser);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailed(error));
  }

  yield put(stopInitialCheck());
}

function* googleSignIn() {
  yield put(startAuthentication());

  try {
    const { user } = yield call(signInWithGoogle);
    yield call(createUserDocument, user);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* emailSignIn({ email, password }) {
  yield put(startAuthentication());

  try {
    const { user } = yield call(signInWithEmailPassword, email, password);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signUp({ email, password, displayName }) {
  yield put(startAuthentication());

  try {
    const { user } = yield call(createEmailPasswordUser, email, password);
    yield call(createUserDocument, user, { displayName });
    toast.success("Sign up successful");
    yield put(signUpSuccess());
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

function* signOut() {
  yield put(startAuthentication());

  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, getAuthenticatedUser);
}
function* onGoogleSignIn() {
  yield takeLatest(GOOGLE_SIGN_IN_INIT, googleSignIn);
}
function* onEmailSignIn() {
  yield takeLatest(EMAIL_SIGN_IN_INIT, emailSignIn);
}
function* onSignUp() {
  yield takeLatest(SIGN_UP_INIT, signUp);
}
function* onSignOut() {
  yield takeLatest(SIGN_OUT_INIT, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onSignUp),
    call(onSignOut),
  ]);
}
