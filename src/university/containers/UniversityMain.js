import React, {Component} from 'react';
import { invokeApig } from '../../libs/awsLib';
import { Tabs, Tab } from "react-bootstrap";
import {connect} from 'react-redux';
import UniversityOverview from './UniversityOverview';
import {searchUniversity} from '../Redux';
import UniversitySalary from '../../salary/containers/UniversitySalary';
import { Link } from "react-router-dom";



class University extends Component {
  constructor(props) {
    super(props);
    this.state = {
      university: null
    }

    // this.handleSelect = this.handleSelect.bind(this);
  }

  // handleSelect(key) {
  //   this.props.history.push(`/university/${this.props.match.params.universityName}/${key}`);
  // }

  // async componentDidMount() {
  //   this.props.searchUniversity({path: `/University/${this.props.match.params.universityName}`});
  // }

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example"
        >
          <Tab eventKey="Overview" title="Overview">
            <UniversityOverview universityOverview={this.props.universityOverview}/>
          </Tab>
          <Tab eventKey="salaries" title="Salaries">
            <UniversitySalary universityName={this.props.match.params.universityName}/>
          </Tab>
          <Tab eventKey="Advice" title="Advice">
            Tab 3 content
          </Tab>
          <Tab eventKey="Photos" title="Photos">
            Tab 4 content
          </Tab>
        </Tabs>
      </div>
    )
  }
}

const mapDispatchToProps = {
  searchUniversity
};

const mapStateToProps = (state, ownProps) => {
  const universityOverview = state.getIn(["university", "universityOverview"]);
  return {
    universityOverview,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(University);
