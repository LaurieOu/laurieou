import {createAction} from 'redux-actions';
import Immutable from 'immutable';

//const
export const SEARCH_SALARY_BY_MAJOR = 'salary/SEARCH_SALARY_BY_MAJOR';
export const SEARCH_SALARY_BY_MAJOR_SUCCESS = 'salary/SEARCH_SALARY_BY_MAJOR_SUCCESS'
export const SEARCH_SALARY_BY_MAJOR_FAILURE = 'salary/SEARCH_SALARY_BY_MAJOR_FAILURE'


//actions
export const searchSalaryByMajor = createAction(SEARCH_SALARY_BY_MAJOR);
export const searchSalaryByMajorSuccess = createAction(SEARCH_SALARY_BY_MAJOR_SUCCESS);
export const searchSalaryByMajorFailure = createAction(SEARCH_SALARY_BY_MAJOR_FAILURE);



//reducers
const initialState = Immutable.fromJS({salaryInfoByMajor: null})
export const salaryReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_SALARY_BY_MAJOR_SUCCESS:
      return state.set("salaryInfoByMajor", action.payload)
    case SEARCH_SALARY_BY_MAJOR_FAILURE:
      return state;
    default:
      return state;
  }
}
