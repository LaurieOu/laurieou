import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';
import "./Home.css";
import { PageHeader, ListGroup } from "react-bootstrap";
// import { invokeApig } from '../../libs/awsLib';
import LoaderButton from "../../components/LoaderButton";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      calendar: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const results = await this.calendar();
      this.setState({ calendar: results });
    } catch (e) {
      console.log("home.js",e);
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  calendar() {
    // return invokeApig({ path: "/calendar" });
  }

  rendercalendarList(calendar) {
    return null;
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
      </div>
    );
  }

  rendercalendar() {
    return (
      <div className="calendar">
        <PageHeader>Your calendar</PageHeader>
        <LoaderButton
          block
          bsSize="large"
          type="submit"
          text="Add a University"
          loadingText="Signing up…"
        />
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.rendercalendar() : this.renderLander()}
      </div>
    );
  }
}
