import { combineReducers } from "redux-immutable";
import Immutable from "immutable";
import {universityReducer} from '../university/Redux';
import {salaryReducer} from '../salary/Redux'

const initialState = {};

const innerReducer = combineReducers({
  university: universityReducer,
  salary: salaryReducer,
});

const reducer = (state = Immutable.fromJS({}), action) => {
  const outputState = innerReducer(state, action)
  return outputState
};

export default reducer;
