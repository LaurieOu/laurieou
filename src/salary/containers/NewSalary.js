import React, {Component} from 'react';
import { invokeApig } from "../../libs/awsLib";
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col, Button } from "react-bootstrap";
import "./Salary.css";


class NewSalary extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      OccupationTitle: '',
      Salary: '',
      Major: '',
      GraduationYear: '',
      CompanyName: '',
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();


    try {
      const apiData = {
        OccupationTitle: this.state.OccupationTitle,
        Salary: this.state.Salary,
        Major: this.state.Major,
        GraduationYear: this.state.GraduationYear,
        CompanyName: this.state.CompanyName,
        UniversityName: this.props.universityName,
      }
      await this.createSalary(apiData);
    } catch (e) {
      console.log("NewSalary.js",e);
      alert(e);
    }
  }

  createSalary(data) {
    return invokeApig({
      path: "/Salary",
      method: "POST",
      body: data
    });
  }

  validateForm() {
    return (
      this.state.OccupationTitle.length > 0 &&
      this.state.Salary.length > 0 &&
      this.state.Major.length > 0 &&
      this.state.GraduationYear.length > 0 &&
      this.state.CompanyName.length > 0
    )
  }

  render() {
    return(

      <form id="NewSalaryForm" onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="OccupationTitle"
        >
          <ControlLabel>Occupation Title</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="ex: Software Engineer"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>


        <FormGroup
          controlId="Salary"
        >
          <ControlLabel>Salary</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="ex: ######"
            onChange={this.handleChange} />
        </FormGroup>

        <FormGroup
          controlId="CompanyName"
        >
          <ControlLabel>Current Company</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="ex: Ancestry"
            onChange={this.handleChange} />
        </FormGroup>

        <FormGroup
          controlId="Major"
        >
          <ControlLabel>Major</ControlLabel>
          <FormControl
            type="text"
            placeholder="ex: Math"
            onChange={this.handleChange} />
        </FormGroup>

        <FormGroup
          controlId="GraduationYear"
        >
          <ControlLabel>Graduation Year</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="ex: 2015"
            onChange={this.handleChange} />
        </FormGroup>


        <Button type="submit" disabled={!this.validateForm()} bsSize="large" bsStyle="success">Add a Salary</Button>

      </form>
    )
  }

}

export default NewSalary;
