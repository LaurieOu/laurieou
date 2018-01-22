import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, signUpUser } from '../Actions';
import {HelpBlock,FormGroup,FormControl,ControlLabel} from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  searchUser(event) {
    this.props.fetchUser(event.target.value);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    console.log("this.state.email", this.state.email);
    console.log("this.props.signUpUser", this.props.signUpUser);
    event.preventDefault();
    this.props.signUpUser({email: this.state.email, password: this.state.password});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>TEST</h2>
          <input name="email" placeholder='Email' onChange={this.handleChange} />
          <input name="password" placeholder='Password' onChange={this.handleChange} />
          <input name="confirmPassword" placeholder='Confirm Password' onChange={this.handleChange} />
          <LoaderButton
            block
            bsSize="large"
            type="submit"
            isLoading={this.state.isLoading}
            text="Signup"
            loadingText="Signing up…"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  fetchUser,
  signUpUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
