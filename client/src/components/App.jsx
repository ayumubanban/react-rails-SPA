import React, { Component } from 'react';
import '../stylesheets/App.css';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import ArticleList from './ArticleList';
import ArticleInfo from './ArticleInfo';
import ArticleAdd from './ArticleAdd';
import ArticleEdit from './ArticleEdit';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Main />
        </div>
      </Router>
    );
  }
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/articles">Articles</NavLink></li>
      {
        localStorage.getItem("access-token") ?
          <li className="nav-item"><NavLink exact className="nav-link" to="/logout">Log Out</NavLink></li>
          :
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/login">Log In</NavLink></li>
      }
    </ul>
  </nav>
);
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/articles" component={ArticleList} />
    <Route exact path="/articles/new" component={ArticleAdd} />
    <Route exact path="/articles/:id" component={ArticleInfo} />
    <Route exact path="/articles/:id/edit" component={ArticleEdit} />
  </Switch>
);

export default App;