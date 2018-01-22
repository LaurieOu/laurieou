import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED, SIGN_UP_USER, LOGIN_USER } from './Constants';

export const fetchUser = username => ({
  type: FETCH_USER,
  payload: { username }
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user
});

export const fetchUserFailed = () => ({
  type: FETCH_USER_FAILED
});

export const signUpUser = signUpInfo => ({
  type: SIGN_UP_USER,
  payload: signUpInfo
});

export const loginUser = (loginInfo) => ({
  type: LOGIN_USER,
  payload: loginInfo
});
