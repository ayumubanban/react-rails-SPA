import React, { Component } from 'react';
import '../stylesheets/App.css';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import ArticleList from './ArticleList';
import ArticleInfo from './ArticleInfo';
import ArticleAdd from './ArticleAdd';
import ArticleEdit from './ArticleEdit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from "./Navigation"
import SignUp from "./SignUp"
import UserList from "./UserList"
import UserInfo from "./UserInfo"

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


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/articles" component={ArticleList} />
    <Route exact path="/articles/new" component={ArticleAdd} />
    <Route exact path="/articles/:id" component={ArticleInfo} />
    <Route exact path="/articles/:id/edit" component={ArticleEdit} />
    <Route exact path="/users" component={UserList} />
    <Route exact path="/users/:id" component={UserInfo} />
  </Switch>
);

export default App;