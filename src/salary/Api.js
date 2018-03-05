import { invokeApig } from '../libs/awsLib';

export async function searchSalaryByMajor(major) {
  return invokeApig({
    path: `/Salary/UCLA/${major}`,
    method: "GET",
  });
}
