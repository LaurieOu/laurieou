import {createAction} from 'redux-actions';
import Immutable from 'immutable';

//const
export const SEARCH_SALARY_BY_MAJOR = 'salary/SEARCH_SALARY_BY_MAJOR';
export const SEARCH_SALARY_BY_MAJOR_SUCCESS = 'salary/SEARCH_SALARY_BY_MAJOR_SUCCESS'
export const SEARCH_SALARY_BY_MAJOR_FAILURE = 'salary/SEARCH_SALARY_BY_MAJOR_FAILURE'


//actions
export const searchSalaryByMajor = createAction(SEARCH_SALARY_BY_MAJOR);
export const searchSalaryByMajorSuccess = createAction(SEARCH_SALARY_BY_MAJOR_SUCCESS);
export const searchSalaryByMajorFailure = createAction(SEARCH_SALARY_BY_MAJOR_FAILURE);


//reducers
const initialState = Immutable.fromJS({salaryInfoByMajor: null})
export const salaryReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_SALARY_BY_MAJOR_SUCCESS:
      var calculatedSalaries = calculateSalaryByMajor(action.payload.Items);
      return state.set("salaryInfoByMajor", calculatedSalaries)
    case SEARCH_SALARY_BY_MAJOR_FAILURE:
      return state;
    default:
      return state;
  }
}


const calculateSalaryByMajor = (salaryInfoByMajor) => {
  var data = {}; //{  2015: {salary: '', count:  ''}, 2016: {salary: '', count:  ''} }
  for(var i=0; i < salaryInfoByMajor.length; i++){

    var currSalaryData = salaryInfoByMajor[i];
    var currGradYear = currSalaryData.GraduationYear;
    var currSalary = Number(currSalaryData.Salary);
    if(data[currGradYear]) {
      data[currGradYear].salary += currSalary,
      data[currGradYear].count += 1;
    } else {
      data[currGradYear] = { salary: currSalary, count: 1};
    }
  }

  var result = [];
  for(var salaryData in data) {
    var currResult = {};
    result.push({name: salaryData, value: data[salaryData].salary / data[salaryData].count, count: data[salaryData].count })
  }
  return result;
}
