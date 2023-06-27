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
  checkUserSession,
  googleSignInInit,
  emailSignInInit,
  signUpInit,
  signOutInit,
  signInSuccess,
  signInFailed,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
  stopInitialCheck,
  startAuthentication,
} from "./userSlice";

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
  yield takeLatest(checkUserSession.type, getAuthenticatedUser);
}
function* onGoogleSignIn() {
  yield takeLatest(googleSignInInit.type, googleSignIn);
}
function* onEmailSignIn() {
  yield takeLatest(emailSignInInit.type, emailSignIn);
}
function* onSignUp() {
  yield takeLatest(signUpInit.type, signUp);
}
function* onSignOut() {
  yield takeLatest(signOutInit.type, signOut);
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
