import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

class UserInfo extends Component {
  state = {
    user: {},
    articles: []
  };

  componentDidMount() {
    let accessToken = localStorage.getItem("access-token");
    let client = localStorage.getItem("client");
    let uid = localStorage.getItem("uid");
    axios({
      method: "get",
      url: `/api/users/${this.props.match.params.id}.json`,
      headers: { "access-token": accessToken, client: client, uid: uid }
    })
      .then(response => {
        this.setState({
          user: response.data.user,
          articles: response.data.articles
        });
        console.log(response.data)
        console.log(this.state.user)
        console.log(this.state.articles)
      })
      .catch(error => console.log("error", error));
  }

  render() {
    return (
      <div>
        <h2>ユーザー名：{this.state.user.name}</h2>
        <div>
          {this.state.articles.map(article => {
            return (
              <div key={article.id}>
                <h2>
                  <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </h2>
                {article.content}
                <hr />
              </div>
            );
          })}
          {/* <Link to="/articles/new" className="btn btn-outline-primary">
            Create Article
          </Link> */}
        </div>
      </div>
    );
  }
}

export default UserInfo
