import { invokeApig } from '../libs/awsLib';

export async function searchSalaryByMajor(body) {
  return invokeApig({
    path: "/Salary/UCLA/Math",
    method: "GET",
  });
}
