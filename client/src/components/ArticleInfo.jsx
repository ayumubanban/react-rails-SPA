import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ArticleInfo extends Component {
    constructor() {
        super();
        this.state = { article: {} };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        // let token = "Bearer " + localStorage.getItem("jwt");
        let accessToken = localStorage.getItem("access-token");
        let client = localStorage.getItem("client");
        let uid = localStorage.getItem("uid");
        axios({ method: 'get', url: `/api/articles/${this.props.match.params.id}`, headers: { 'access-token': accessToken, "client": client, "uid": uid } })
            .then((response) => {
                this.setState({
                    article: response.data
                })
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

    render() {
        return (
            <div>
                <h2>{this.state.article.id}: {this.state.article.title}</h2>
                <p>{this.state.article.content}</p>
                ユーザー名：{this.state.article.username}
                <p>
                    <Link to={`/articles/${this.state.article.id}/edit`} className="btn btn-outline-dark">Edit</Link>
                    <button onClick={this.handleDelete} className="btn btn-outline-dark">Delete</button>
                    <Link to="/articles" className="btn btn-outline-dark">Close</Link>
                </p>
                <hr />
            </div>
        )
    }
}

export default ArticleInfo;