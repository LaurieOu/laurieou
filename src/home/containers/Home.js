import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';
import "./Home.css";
import { PageHeader, ListGroup, FormGroup, FormControl } from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      universityName: null
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    this.setState({ isLoading: false });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  searchUniversity = event => {
    this.props.history.push(`/university/${this.state.universityName}`);
  }

  rendercalendarList(calendar) {
    return null;
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>The best source of info for your education</p>
      </div>
    );
  }

  rendercalendar() {
    return (
      <div className="calendar">
      
        <FormGroup controlId="universityName">
          <FormControl
            type="text"
            placeholder="Search for your school"
            onChange={this.handleChange}
          />
          <button className="btn btn-link search-btn" onClick={this.searchUniversity}>
              <i className="glyphicon glyphicon-search"></i>
          </button>
        </FormGroup>


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
