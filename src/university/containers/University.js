import React, {Component} from 'react';
import { invokeApig } from '../../libs/awsLib';
import { Tabs, Tab } from "react-bootstrap";
import {connect} from 'react-redux';
import UniversityOverview from './UniversityOverview';
import {searchUniversity} from '../Redux';


class University extends Component {
  constructor(props) {
    super(props);
    this.state = {
      university: null
    }
  }

  async componentDidMount() {
    this.props.searchUniversity({path: `/University/${this.props.match.params.universityName}`});
  }

  render() {
    console.log("universityOverview", this.props.universityOverview);
    return (
      <div>
        <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example"
        >
          <Tab eventKey={1} title="Overview">
            <UniversityOverview universityOverview={this.props.universityOverview}/>
          </Tab>
          <Tab eventKey={2} title="Salaries">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="Advice">
            Tab 3 content
          </Tab>
          <Tab eventKey={4} title="Photos">
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
