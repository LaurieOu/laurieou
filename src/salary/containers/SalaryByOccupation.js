import React, {Component} from 'react';

export default class SalaryByOccupation extends Component {
  constructor(props) {
    super(props);
  }

  listOccupation(salaryByMajor){
    var result = {};
    for(let i=0; i < salaryByMajor.length; i++){
      var title = salaryByMajor[i].OccupationTitle;
      console.log("title", title);
      if(result[title]){
        result[title].count += 1;
      } else {
        result[title] = {count: 1};
      }
    }
    return result;
  }

  render() {
    const occupations = this.listOccupation(this.props.salaryInfoByMajor);
    const occupationsList = Object.keys(occupations).map(occupation =>
      <tr key={occupation}>
        <th>{occupation}</th>
        <th>{occupations[occupation].count}</th>
      </tr>
    );

    return(
      <div id="occupationsTableContainer">
        <h3>15 Most Common Jobs for a {this.props.major} Major</h3>
        <table id="salaryByOccupationTable">
          <tbody>
            <tr key="occupationCountTable">
              <th>Occupation</th>
              <th>Count</th>
            </tr>
            {occupationsList}
          </tbody>
        </table>
      </div>
    )
  }
};
