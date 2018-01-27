import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, HelpBlock, Grid, Row, Col, Thumbnail } from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton";
import config from "../../config";
import "./NewUniversity.css";
// import { invokeApig } from "../../libs/awsLib";


export default class NewUniversity extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      Name: '',
      Description: '',
      Attachment: 'https://www.door2door.co.in/upload/product_image/no-img.png',
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
      await this.createUniversity({
        content: this.state
      });
      this.props.history.push("/");
    } catch (e) {
      console.log("NewUniversity.js",e);
      alert(e);
    }
  }

  createUniversity(university) {
    // return invokeApig({
    //   path: "University",
    //   method: "POST",
    //   body: university
    // });
  }



  validateForm() {
    return (
      this.state.Name.length > 0 &&
      this.state.Description.length > 0 &&
      this.state.Attachment.length > 0
    );
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>


        <FormGroup
          controlId="Name"
        >
          <ControlLabel>University Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="ex: UCLA"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>


        <FormGroup
          controlId="Description"
        >
          <ControlLabel>Description</ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="Say something about this University"
            onChange={this.handleChange} />
        </FormGroup>

        <FormGroup
        controlId="Attachment"
        >
          <ControlLabel>Add an Image</ControlLabel>
          <FormControl
          componentClass="textarea"
          placeholder="Paste a url"
          onChange={this.handleChange} />
        </FormGroup>

        <Grid>
          <Row>
            <Col>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={this.state.Attachment} alt="242x200">
              </Thumbnail>
            </Col>
          </Row>
        </Grid>



        <LoaderButton
          block
          bsStyle="primary"
          bsSize="large"
          type="submit"
          disabled={!this.validateForm()}
          isLoading={this.state.isLoading}
          text="Create"
          loadingText="Creating…"
        />
      </form>
    );
  }
}
