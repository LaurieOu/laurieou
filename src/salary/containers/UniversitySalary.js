import React, {Component} from 'react';
import { PageHeader, ListGroup, FormGroup, FormControl, Button } from "react-bootstrap";
import {connect} from 'react-redux';
import {searchSalaryByMajor} from '../Redux';
import NewSalary from './NewSalary';


class UniversitySalary extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  searchSalaryByMajor = async event => {
    event.preventDefault();
    this.props.searchSalaryByMajor(this.state);
  }

  render() {
    if(!(this.props.universityOverview)){
      return (<div>Loading...</div>)
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
  console.log("salaryInfoByMajor", salaryInfoByMajor);
  console.log("universityOverview", universityOverview);
  return {
    salaryInfoByMajor,
    universityOverview
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UniversitySalary);
