import Immutable from "immutable";
import { FETCH_USER, SIGN_UP_USER, SIGN_UP_USER_SUCCESS, LOGIN_USER, FETCH_USER_SUCCESS } from './Constants';


const InitialState = Immutable.fromJS({userInfo: null, newUser: null});
export const UserReducer = (state = InitialState , action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return state.set("userInfo", action.payload);
    case SIGN_UP_USER_SUCCESS:
      return state.set("newUser", action.payload);
    default:
      return state
  }
}
