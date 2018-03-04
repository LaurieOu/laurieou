import React, {Component} from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Label } from 'recharts';


class SalaryChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'SalaryData': [],
    }
  }

  render() {
    return(
      <BarChart width={650} height={350} data={this.props.salaryInfoByMajor}>
        <XAxis dataKey="name" stroke="#8884d8" >
          <Label value="Year of Graduation (Undergrad)" offset={-10} position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'Average Salary', angle: -90, position: 'insideLeft', offset: -15 }} />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <Bar type="monotone" dataKey="value" fill="#8884d8" barSize={30} />
      </BarChart>
    )
  }
}

export default SalaryChart;
