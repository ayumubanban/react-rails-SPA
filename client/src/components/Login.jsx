import React, { Component } from 'react'
import { post } from 'axios';
import { connect } from "react-redux"
import { signIn } from "../actions/authActions"
import { Redirect } from "react-router-dom";

class Login extends Component {
    // constructor() {
    //     super()
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // state = {
    //     email: "",
    //     password: ""
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // this.setState({
        //     email: email,
        //     password: password
        // })
        // this.props.signIn(this.state)

        const request = { "email": email, "password": password };
        // console.log(request)
        post('/auth/sign_in', request)
            .then(response => {
                console.log(response)
                localStorage.setItem("access-token", response.headers["access-token"]);
                localStorage.setItem("client", response.headers.client);
                localStorage.setItem("uid", response.headers.uid);
                // console.log(response);
                // console.log(localStorage);
                // this.props.history.push("/");
                this.props.signIn();
            })
            .catch(error => console.log('error', error));
    }

    render() {
        const {authError, isSignedIn} = this.props
        if (isSignedIn) return <Redirect to="/" />;

        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input name="email" id="email" type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input name="password" id="password" type="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        isSignedIn: state.auth.isSignedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => dispatch(signIn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);