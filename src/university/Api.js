import { invokeApig } from '../libs/awsLib';


export function searchUniversity(path) {
  return invokeApig(path);
}
