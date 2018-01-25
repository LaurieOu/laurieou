import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../Actions';
import {HelpBlock,FormGroup,FormControl,ControlLabel} from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    try {
      const newUser = await this.props.signUpUser({email: this.state.email, password: this.state.password});
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  // render() {
  //   return (
  //     <div>
  //       <form onSubmit={this.handleSubmit}>
  //         <h2>TEST</h2>
  //         <input name="email" placeholder='Email' onChange={this.handleChange} />
  //         <input name="password" placeholder='Password' onChange={this.handleChange} />
  //         <input name="confirmPassword" placeholder='Confirm Password' onChange={this.handleChange} />
  //         <LoaderButton
  //           block
  //           bsSize="large"
  //           type="submit"
  //           isLoading={this.state.isLoading}
  //           text="Signup"
  //           loadingText="Signing up…"
  //         />
  //       </form>
  //     </div>
  //   );
  // }

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            autoFocus
            type="tel"
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <HelpBlock>Please check your email for the code.</HelpBlock>
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateConfirmationForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Verify"
          loadingText="Verifying…"
        />
      </form>
    );
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Signup"
          loadingText="Signing up…"
        />
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.props.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const newUser = state.getIn(["user","newUser"]);
  return {
    newUser
  }
};

const mapDispatchToProps = {
  signUpUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
