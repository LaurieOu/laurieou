import { invokeApig } from '../libs/awsLib';


export async function searchUniversity(path) {
  return invokeApig(path);
}
