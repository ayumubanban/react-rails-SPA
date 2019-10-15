import React, { Component } from "react";
import { post } from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../actions/authActions";

class SignUp extends Component {
  // constructor() {
  //   super();
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password_confirmation = document.getElementById(
      "password_confirmation"
    ).value;
    const request = { name: name, email: email, password: password, password_confirmation: password_confirmation };
    // console.log(request)
    post("/auth", request)
      .then(response => {
        localStorage.setItem("access-token", response.headers["access-token"]);
        localStorage.setItem("client", response.headers.client);
        localStorage.setItem("uid", response.headers.uid);

        // console.log(response);
        // console.log(localStorage)

        // this.props.history.push("/");
        this.props.signUp();
      })
      .catch(error => console.log("error", error));
  }

  render() {

    const { authError, isSignedIn } = this.props;
    if (isSignedIn) return <Redirect to="/" />;

    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              id="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              id="email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              id="password"
              type="password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password_confirmation">
              Password Confirmation:
            </label>
            <input
              name="password_confirmation"
              id="password_confirmation"
              type="password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    isSignedIn: state.auth.isSignedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: () => dispatch(signUp())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
