import React, {Component} from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Label } from 'recharts';


class SalaryChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'SalaryData': [],
    }
  }

  calculateSalaryByMajor(salaryInfoByMajor) {
    var data = {'1917-2007': {count: 0, salary: 0}}; //{  2015: {salary: '', count:  ''}, 2016: {salary: '', count:  ''} }
    for(var i=0; i < salaryInfoByMajor.length; i++){

      var currSalaryData = salaryInfoByMajor[i];
      var currGradYear = currSalaryData.GraduationYear;
      var currSalary = Number(currSalaryData.Salary);
      if (currGradYear <= 2007) {
        data['1917-2007'].salary += currSalary,
        data['1917-2007'].count += 1;
      } else if(data.currGradYear) {
        data.currGradYear.salary += currSalary,
        data.currGradYear.count += 1;
      } else {
        data[currGradYear] = { salary: currSalary, count: 1};
      }
    }

    var result = [];
    for(var salaryData in data) {
      var currResult = {};
      var averageSalary = (data[salaryData].salary / data[salaryData].count) || 0;
      result.push({name: salaryData, AverageSalary: averageSalary, count: data[salaryData].count })
    }
    return result;
  }

  render() {
    const calculatedData = this.calculateSalaryByMajor(this.props.salaryInfoByMajor);
    return(
      <div id="salaryChart">
        <h3 id="salaryTitle">Salary by Graduation Year (Major: {this.props.major || 'All'})</h3>
        <BarChart width={700} height={400} data={calculatedData}>
          <XAxis dataKey="name" stroke="#8884d8" >
            <Label value="Year of Graduation (Undergrad)" offset={-2} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: 'Salary', angle: -90, position: 'insideLeft' }} />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} payload={this.props.salaryInfoByMajor}/>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <Bar type="monotone" dataKey="AverageSalary" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    )
  }
}

export default SalaryChart;
