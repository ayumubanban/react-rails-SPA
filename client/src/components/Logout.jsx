import React from 'react';
import { Redirect } from 'react-router-dom'
import axios from "axios"
import { connect } from "react-redux";
import { signOut } from "../actions/authActions";

const Logout = (props) => {
    console.log(props)

    let accessToken = localStorage.getItem("access-token");
    let client = localStorage.getItem("client");
    let uid = localStorage.getItem("uid");

    // axios.delete("/auth/sign_out")
    axios({
      method: "delete",
      url: "/auth/sign_out",
      headers: { "access-token": accessToken, client: client, uid: uid }
    })
      .then(response => {
        // localStorage.setItem("access-token", response.headers["access-token"]);
        // localStorage.setItem("client", response.headers.client);
        // localStorage.setItem("uid", response.headers.uid);
        // console.log(response);
        // console.log(localStorage);

        localStorage.removeItem("access-token");
        localStorage.removeItem("client");
        localStorage.removeItem("uid");

        console.log(response);

        props.signOut()

        // props.history.push("/");
      })
      .catch(error => console.log("error", error));

    return <Redirect to='/' />
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);