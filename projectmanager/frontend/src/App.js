import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import UserList from './components/UserList';
import SingleUserPage from './components/SingleUserPage';


class App extends Component {
  render() {
  
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/api/users" component={UserList} />
            <Route exact path="api/users/:userId" component={SingleUserPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
