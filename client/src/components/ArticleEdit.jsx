import React from 'react';
import axios from 'axios';

class ArticleEdit extends React.Component {
    constructor() {
        super();
        this.state = { title: '', content: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        let accessToken = localStorage.getItem("access-token");
        let client = localStorage.getItem("client");
        let uid = localStorage.getItem("uid");
        axios({ method: 'get', url: `/api/articles/${this.props.match.params.id}`, headers: { 'access-token': accessToken, "client": client, "uid": uid } })
            .then((response) => {
                this.setState(response.data)
            })
            .catch(error => console.log('error', error));
    }

    handleSubmit(event) {
        event.preventDefault();
        let accessToken = localStorage.getItem("access-token");
        let client = localStorage.getItem("client");
        let uid = localStorage.getItem("uid");
        axios({ method: 'patch', url: `/api/articles/${this.state.id}`, headers: { 'access-token': accessToken, "client": client, "uid": uid }, data: this.state })
            .then(() => {
                this.props.history.push(`/articles/${this.state.id}`);
            })
            .catch(error => console.log('error', error));
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleCancel() {
        this.props.history.push(`/articles/${this.state.id}`);
    }

    render() {
        return (
            <div>
                <h1>Edit {this.state.title}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea name="content" rows="5" value={this.state.content} onChange={this.handleChange} className="form-control" />
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-dark">Update</button>
                        <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ArticleEdit;