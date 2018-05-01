import React, {Component} from 'react';
import { PageHeader, ListGroup, FormGroup, FormControl, Button } from "react-bootstrap";
import {connect} from 'react-redux';
import {searchSalaryByMajor} from '../Redux';
import NewSalary from './NewSalary';
import SalaryChart from './SalaryChart';
import SalaryByOccupation from './SalaryByOccupation';


class SalaryTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Major: ''
    }
  }

  handleChange = event => {
    this.setState({
      Major: event.target.value
    });
  }


  searchSalaryByMajor = async event => {
    event.preventDefault();
    this.props.searchSalaryByMajor(this.state.Major);
  }

  render() {
    if(!(this.props.universityOverview)){
      return (<div>Loading...</div>)
    }

    let salaryChart = null;
    let occupationChart = null;
    if(this.props.salaryInfoByMajor) {
      salaryChart = <SalaryChart salaryInfoByMajor={this.props.salaryInfoByMajor} major={this.state.Major}/>;
      occupationChart = <SalaryByOccupation salaryInfoByMajor={this.props.salaryInfoByMajor} major={this.state.Major}/>
    } else {
      salaryChart = <div>Main chart TODO</div>;
      occupationChart = <div>Main Occupation Chart TODO</div>;
    }
    return(
      <div>
        <FormGroup controlId="Major">
          <FormControl
          type="text"
          placeholder="Search salaries by major"
          onChange={this.handleChange}
          />
          <button className="btn btn-link search-btn" onClick={this.searchSalaryByMajor}>
            <i className="glyphicon glyphicon-search"></i>
          </button>
        </FormGroup>
        <div id='MajorInfoBySalaryAndOccupation'>
          {salaryChart}
          {occupationChart}
        </div>
        <NewSalary universityName={this.props.universityOverview.Name}/>
      </div>
    )
  }
}


const mapDispatchToProps = {
  searchSalaryByMajor
};

const mapStateToProps = (state, ownProps) => {
  const salaryInfoByMajor = state.getIn(['salary', 'salaryInfoByMajor']);
  const universityOverview = state.getIn(["university", "universityOverview"]);
  return {
    salaryInfoByMajor,
    universityOverview
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SalaryTab);
