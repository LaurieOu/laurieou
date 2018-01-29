import {createAction} from 'redux-actions';
import Immutable from 'immutable';

//const
export const SEARCH_UNIVERSITY = 'university/SEARCH_UNIVERSITY';
export const SEARCH_UNIVERSITY_SUCCESS = 'university/SEARCH_UNIVERSITY_SUCCESS';
export const SEARCH_UNIVERSITY_FAILURE = 'university/SEARCH_UNIVERSITY_FAILURE';

//actions
export const searchUniversity = createAction(SEARCH_UNIVERSITY);
export const searchUniversitySuccess = createAction(SEARCH_UNIVERSITY_SUCCESS);
export const searchUniversityFailure = createAction(SEARCH_UNIVERSITY_FAILURE);


//reducer
const initialState = Immutable.fromJS({universityOverview: null,});
export const universityReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_UNIVERSITY_SUCCESS:
      console.log("action", action);
      return state.set("universityOverview": action.payload);
    case SEARCH_UNIVERSITY_FAILURE:
      return state;
    default:
      return state;
  }
}
