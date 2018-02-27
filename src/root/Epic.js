import { combineEpics } from 'redux-observable';
import UniversityEpic from '../university/Epic'
import SalaryEpic from '../salary/Epic'

const rootEpic = combineEpics(
  UniversityEpic,
  SalaryEpic
);

export default rootEpic;
