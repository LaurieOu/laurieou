import Rx from 'rxjs/Rx';
import { combineEpics } from 'redux-observable';
import {SEARCH_SALARY_BY_MAJOR, searchSalaryByMajorSuccess, searchSalaryByMajorFailure} from './Redux';
import * as api from './Api';

export const searchSalaryByMajor = actions$ =>
  actions$
    .ofType(SEARCH_SALARY_BY_MAJOR)
    .mergeMap(action =>
      Rx.Observable.fromPromise(api.searchSalaryByMajor(action.payload))
        .map(result => searchSalaryByMajorSuccess(result))
        .catch(error => Rx.Observable.of(searchSalaryByMajorFailure(error)))
);

export default combineEpics(
  searchSalaryByMajor
)
