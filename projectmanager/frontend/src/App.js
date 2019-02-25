import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <h1>IM HOME</h1>
        <HomePage/>
       <UserList/>
        
      </div>
    );
  }
}

export default App;
