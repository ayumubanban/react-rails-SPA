import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import axios from 'axios';
import { connect } from "react-redux";

class Navigation extends Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         isLoggedIn : null
    //     }
    // }

    componentDidMount(){
        // let accessToken = localStorage.getItem("access-token");
        // let client = localStorage.getItem("client");
        // let uid = localStorage.getItem("uid");
        // axios({ method: 'get', url: '/api/articles/is_logged_in', headers: { 'access-token': accessToken, "client": client, "uid": uid } })
        //     .then(response => {
        //         this.setState({
        //             isLoggedIn: response.data["is_logged_in"]
        //     })
        //     console.log(response)
        //     })
        //     .catch(error => console.log('error', error));
        console.log("componentDidMounted")
    }

    // componentDidUpdate(){

    // }


    render(){
        const { isSignedIn } = this.props;
        console.log(isSignedIn)


        // let accessToken = localStorage.getItem("access-token");
        // let client = localStorage.getItem("client");
        // let uid = localStorage.getItem("uid");
        // axios({ method: 'get', url: '/api/articles/is_logged_in', headers: { 'access-token': accessToken, "client": client, "uid": uid } })
        //     .then(response => {
        //         this.setState({
        //             isLoggedIn: response.data["is_logged_in"]
        //         })
        //         // console.log(response)
        //     })
        //     .catch(error => console.log('error', error));

        // console.log("rendered")
        // let isLoggedIn = false;
        // if (this.props["access-token"]){
        //     // this.setState({
        //     //     isLoggedIn: true
        //     // })
        //     isLoggedIn = true
        // } else{
        //     // this.setState({
        //     //     isLoggedIn: false
        //     // })
        //     isLoggedIn = false;
        // }

        console.log("rendered")
        // console.log(isLoggedIn)

        // const links = this.props["access-token"] ?

        // let links = this.state.isLoggedIn ?
        let links = isSignedIn ?
            <li className="nav-item"><NavLink exact className="nav-link" to="/logout">Log Out</NavLink></li>
            : (
                <div>
                    <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/signup">Sign Up</NavLink></li>
                    <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/login">Log In</NavLink></li>
                </div>
            )

        return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/articles">Articles</NavLink></li>
                <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/users">Users</NavLink></li>
                { links }
            </ul>
        </nav>)
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

// export default withRouter(Navigation);
export default connect(mapStateToProps)(Navigation);