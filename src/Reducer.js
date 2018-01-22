import { combineReducers } from "redux-immutable";
import Immutable from "immutable";
import {UserReducer} from './user/Reducer';

const initialState = {};

const innerReducer = combineReducers({
  UserReducer,
});

const reducer = (state = Immutable.fromJS({}), action) => {
  const outputState = innerReducer(state, action)
  return outputState
};

export default reducer;
