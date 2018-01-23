import Immutable from "immutable";
import { FETCH_USER, SIGN_UP_USER, LOGIN_USER, FETCH_USER_SUCCESS } from './Constants';


const InitialState = Immutable.fromJS({userInfo: null});
export const UserReducer = (state = InitialState , action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      console.log("state", state);
      console.log("action", action);
      return state.set("userInfo", action.payload);
    default:
      return state
  }
}
