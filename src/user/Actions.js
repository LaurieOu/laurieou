import { FETCH_USER_SUCCESS, FETCH_USER_FAILED, SIGN_UP_USER, SIGN_UP_USER_SUCCESS, LOGIN_USER } from './Constants';

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

export const signupUserSuccess = newUser => ({
  type: SIGN_UP_USER_SUCCESS,
  payload: newUser
})

export const loginUser = (loginInfo) => ({
  type: LOGIN_USER,
  payload: loginInfo
});
