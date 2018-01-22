import { combineEpics } from 'redux-observable';
import UserEpic from './user/Epic'

const rootEpic = combineEpics(
  UserEpic
);

export default rootEpic;
