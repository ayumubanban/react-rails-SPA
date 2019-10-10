import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

// const Navigation = (hoge) => (
class Navigation extends Component{
    constructor(props){
        super(props)
        this.state = {
            isSignedIn : null
        }
    }

    componentDidMount(){
        let isSignedIn = localStorage.getItem("access-token");
        this.setState({
            isSignedIn: isSignedIn
        });
    }

    render(){

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/articles">Articles</NavLink></li>
                    {
                        // console.log(hoge)
                    }
                    {
                        console.log(localStorage)
                    }
                    {
                        // localStorage.getItem("access-token") ?
                        this.state.isSignedIn ?
                            <li className="nav-item"><NavLink exact className="nav-link" to="/logout">Log Out</NavLink></li>
                            :
                            <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/login">Log In</NavLink></li>
                    }
                </ul>
            </nav>
        )
    }
}
// );

export default Navigation;