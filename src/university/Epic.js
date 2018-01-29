import Rx from 'rxjs/Rx';
import { combineEpics } from "redux-observable"
import {SEARCH_UNIVERSITY, searchUniversitySuccess, searchUniversityFailure} from './Redux';
import * as api from './Api';

export const searchUniversity = actions$ => {
  return actions$
    .ofType(SEARCH_UNIVERSITY)
    .mergeMap(action => {
      Rx.Observable.fromPromise(api.searchUniversity(action.payload))
        .map(result => searchUniversitySuccess)
        .catch(error => searchUniversityFailure)
    })
}

export default combineEpics(
  searchUniversity,
)
