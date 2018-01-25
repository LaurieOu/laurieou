import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import LoaderButton from "../../components/LoaderButton";
import "./Login.css";
import {loginUser} from '../Actions';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
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
      await this.props.loginUser({"email": this.state.email, "password": this.state.password});
      this.props.userHasAuthenticated(true);
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div className="Login">
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
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          />
        </form>
      </div>
    );
  }
}


// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({loginUser}, dispatch);
// }

const mapDispatchToProps = {
  loginUser
};

//takes values from the global store and maps it to current component's props
const mapStateToProps = state => {
  console.log("state.getIn", state.getIn(["user", "userInfo"]));
  //state looks like {user: {userInfo: {stuff...}}} where user is the reducer and userInfo is the state of the userReducer
  const user = state.getIn(["user","userInfo"]);
  return {
    user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
