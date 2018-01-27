import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';
import "./Home.css";
import { PageHeader, ListGroup } from "react-bootstrap";
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

    this.setState({ isLoading: false });
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
        <PageHeader>Don't see your school?</PageHeader>
        <Link to='university/new'>
          <LoaderButton
            block
            bsSize="large"
            type="submit"
            text="Add a University"
            loadingText="Signing up…"
          />
        </Link>
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
