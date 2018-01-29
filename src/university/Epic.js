import Rx from 'rxjs/Rx';
import { combineEpics } from "redux-observable"
import {SEARCH_UNIVERSITY, searchUniversitySuccess, searchUniversityFailure} from './Redux';
import * as api from './Api';

export const searchUniversity = actions$ =>
  actions$
    .ofType(SEARCH_UNIVERSITY)
    .mergeMap(action =>
      Rx.Observable.fromPromise(api.searchUniversity(action.payload))
        .map(result => searchUniversitySuccess(result))
         .catch(error => Rx.Observable.of(searchUniversityFailure(error)))
);

export default combineEpics(
  searchUniversity,
)
