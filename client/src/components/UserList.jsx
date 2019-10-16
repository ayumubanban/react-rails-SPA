import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

class UserList extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    // let token = "Bearer " + localStorage.getItem("jwt");
    let accessToken = localStorage.getItem("access-token");
    let client = localStorage.getItem("client");
    let uid = localStorage.getItem("uid");
    axios({
      method: "get",
      url: "/api/users",
      headers: {
        "access-token": accessToken,
        client: client,
        uid: uid
        // "Content-Type": "application/json"
      }
    })
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => console.log("error", error));
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => {
          return (
            <div key={user.id}>
              <h2>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </h2>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserList
