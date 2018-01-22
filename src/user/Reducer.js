import Immutable from "immutable";
import { FETCH_USER, SIGN_UP_USER, LOGIN_USER, FETCH_USER_SUCCESS } from './Constants';


export const UserReducer = (state = {} , action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      console.log("state", state);
      console.log("action", action);
      return state;
    default:
      return state
  }
}
