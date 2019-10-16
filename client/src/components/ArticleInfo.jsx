import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ArticleInfo extends Component {
    constructor() {
        super();
        this.state = {
          article: {},
          favorites: [],
          current_user: {},
          isFavorited: 0
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        // let token = "Bearer " + localStorage.getItem("jwt");
        let accessToken = localStorage.getItem("access-token");
        let client = localStorage.getItem("client");
        let uid = localStorage.getItem("uid");
        axios({ method: 'get', url: `/api/articles/${this.props.match.params.id}.json`, headers: { 'access-token': accessToken, "client": client, "uid": uid } })
            .then((response) => {
              console.log(response)
              this.setState({
                article: response.data.article,
                favorites: response.data.favorites,
                current_user: response.data.current_user
              })
              console.log(this.state)
            })
            .catch(error => console.log('error', error));
    }

    handleDelete() {
        // let token = "Bearer " + localStorage.getItem("jwt");
        let accessToken = localStorage.getItem("access-token");
        let client = localStorage.getItem("client");
        let uid = localStorage.getItem("uid");
        axios({ method: 'delete', url: `/api/articles/${this.props.match.params.id}`, headers: { 'access-token': accessToken, "client": client, "uid": uid } })
            .then(() => {
                this.props.history.push("/articles")
            })
            .catch(error => console.log('error', error));
    }

    favoriteAdd = () => {
      let accessToken = localStorage.getItem("access-token");
      let client = localStorage.getItem("client");
      let uid = localStorage.getItem("uid");

      axios({
        method: "post",
        url: `/api/articles/${this.props.match.params.id}/favorites`,
        headers: { "access-token": accessToken, client: client, uid: uid },
        // * これ、this.props.match.params.idが整数なのか、ちゃんと渡せているのか、怪しい
        data: { article_id: this.props.match.params.id }
      })
        .then((response) => {
          console.log("post", response)
          // this.props.history.push(`/articles/${this.props.match.params.id}`);

          axios({
            method: "get",
            url: `/api/articles/${this.props.match.params.id}.json`,
            headers: { "access-token": accessToken, client: client, uid: uid }
          })
            .then(response => {
              console.log("get", response);
              this.setState({
                favorites: response.data.favorites
              });
            })
            .catch(error => console.log("error", error));

        })
        .catch(error => console.log("error", error));

      // axios({
      //   method: "get",
      //   url: `/api/articles/${this.props.match.params.id}.json`,
      //   headers: { "access-token": accessToken, client: client, uid: uid }
      // })
      //   .then(response => {
      //     console.log("get", response);
      //     this.setState({
      //       favorites: response.data.favorites
      //     });
      //   })
      //   .catch(error => console.log("error", error));
    }

    favoriteDelete = () => {
      let accessToken = localStorage.getItem("access-token");
      let client = localStorage.getItem("client");
      let uid = localStorage.getItem("uid");
      axios({
        method: "delete",
        url: `/api/articles/${this.props.match.params.id}/favorites`,
        headers: { "access-token": accessToken, client: client, uid: uid }
      })
        .then((response) => {
          console.log("delete" ,response)
          // this.props.history.push(`/articles/${this.props.match.params.id}`);
          axios({
            method: "get",
            url: `/api/articles/${this.props.match.params.id}.json`,
            headers: { "access-token": accessToken, client: client, uid: uid }
          })
            .then(response => {
              console.log("get", response);
              this.setState({
                favorites: response.data.favorites
              });
            })
            .catch(error => console.log("error", error));

        })
        .catch(error => console.log("error", error));

      // axios({
      //   method: "get",
      //   url: `/api/articles/${this.props.match.params.id}.json`,
      //   headers: { "access-token": accessToken, client: client, uid: uid }
      // })
      //   .then(response => {
      //     console.log(response);
      //     this.setState({
      //       favorites: response.data.favorites
      //     });
      //   })
      //   .catch(error => console.log("error", error));
    }

    render() {

      let isFavorited = this.state.favorites.filter(favorite => favorite.user_id === this.state.current_user.id).length
      console.log(isFavorited)
      let favorite_button = isFavorited ? (
        <button className="btn btn-warning" onClick={this.favoriteDelete}>
          お気に入り解除
        </button>
      ) : (
        <button className="btn btn-dark" onClick={this.favoriteAdd}>
          お気に入り登録
        </button>
      );

        return (
          <div>
            お気に入り数：{this.state.favorites.length}
            <br />
            <h2>
              {this.state.article.id}: {this.state.article.title}
            </h2>
            <p>{this.state.article.content}</p>
            ユーザー名：
            <Link to={`/users/${this.state.article.user_id}`}>
              {this.state.article.username}
            </Link>
            <p>
              <Link
                to={`/articles/${this.state.article.id}/edit`}
                className="btn btn-outline-dark"
              >
                Edit
              </Link>
              <button
                onClick={this.handleDelete}
                className="btn btn-outline-dark"
              >
                Delete
              </button>
              <Link to="/articles" className="btn btn-outline-dark">
                Close
              </Link>
            </p>
            <br/>
            {favorite_button}
            <hr />
          </div>
        );
    }
}

export default ArticleInfo;