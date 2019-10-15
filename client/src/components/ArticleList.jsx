import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ArticleList extends Component {
    constructor() {
        super();
        this.state = { articles: [] };
    }

    componentDidMount() {
        // let token = "Bearer " + localStorage.getItem("jwt");
        let accessToken = localStorage.getItem("access-token");
        let client = localStorage.getItem("client");
        let uid = localStorage.getItem("uid");
        axios({ method: 'get', url: '/api/articles', headers: { 'access-token': accessToken, "client": client, "uid": uid, "Content-Type": "application/json" } })
            .then(response => {
                this.setState({ articles: response.data })
            })
            .catch(error => console.log('error', error));

    }

    render() {
        return (
            <div>
                {this.state.articles.map((article) => {
                    return (
                        <div key={article.id}>
                            <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
                            {article.content}
                            <br/>
                            ユーザー名：{article.username}
                            <hr />
                        </div>
                    )
                })}
                <Link to="/articles/new" className="btn btn-outline-primary">Create Article</Link>
            </div>
        )
    }
}

export default ArticleList;