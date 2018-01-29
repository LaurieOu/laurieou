import { combineReducers } from "redux-immutable";
import Immutable from "immutable";
import {universityReducer} from '../university/Redux';

const initialState = {};

const innerReducer = combineReducers({
  university: universityReducer,
});

const reducer = (state = Immutable.fromJS({}), action) => {
  const outputState = innerReducer(state, action)
  return outputState
};

export default reducer;
