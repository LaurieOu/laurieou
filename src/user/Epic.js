import { combineEpics } from 'redux-observable';
import { FETCH_USER, SIGN_UP_USER, LOGIN_USER } from './Constants';
import { fetchUserSuccess, fetchUserFailed, signupUserSuccess } from './Actions';
import { ajax } from 'rxjs/observable/dom/ajax';
import Rx from 'rxjs/Rx';
import { Observable } from 'rxjs';
import * as api from "./Api"


export const fetchUser = actions$ =>
  actions$
    .ofType(FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload.username}`)
        .map(user => fetchUserSuccess(user))
        .takeUntil(actions$.ofType(FETCH_USER))
        .retry(2)
        .catch(error => Observable.of(fetchUserFailed()))
    );

export const signUpUser = actions$ =>
  actions$
    .ofType(SIGN_UP_USER)
    .mergeMap(action =>
        Rx.Observable.fromPromise(api.signUpUser(action.payload.email, action.payload.password))
                .map(user => signupUserSuccess(user))
                .catch(error => Observable.of(fetchUserFailed))
    );

export const loginUser = actions$ =>
  actions$
    .ofType(LOGIN_USER)
    .mergeMap(action =>
        Rx.Observable.fromPromise(api.login(action.payload.email, action.payload.password))
                .map(user => fetchUserSuccess(user))
                .catch(error => Observable.of(fetchUserFailed))
    );


export default combineEpics(
  fetchUser,
  signUpUser,
  loginUser
);
