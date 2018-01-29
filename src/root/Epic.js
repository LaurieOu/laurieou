import { combineEpics } from 'redux-observable';
import UniversityEpic from '../university/Epic'

const rootEpic = combineEpics(
  UniversityEpic
);

export default rootEpic;
