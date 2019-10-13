import React from 'react';
import { Redirect } from 'react-router-dom'
import axios from "axios"

const Logout = (props) => {
    console.log(props)
    localStorage.removeItem('access-token');
    localStorage.removeItem('client');
    localStorage.removeItem('uid');
    // axios.delete("/auth/sign_out")
    //   .then(response => {
    //     // localStorage.setItem("access-token", response.headers["access-token"]);
    //     // localStorage.setItem("client", response.headers.client);
    //     // localStorage.setItem("uid", response.headers.uid);
    //     // console.log(response);
    //     // console.log(localStorage);
    //     props.history.push("/");
    //   })
    //   .catch(error => console.log("error", error));
    return <Redirect to='/' />
}

export default Logout;