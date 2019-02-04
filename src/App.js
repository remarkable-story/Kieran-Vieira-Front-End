import React, { Component } from 'react';
import { Route } from 'react-router'

import HomePageView from './views/HomePageView';
import LoginPageView from './views/LoginPageView'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Router app!</h1>
        <Route exact path='/' component={HomePageView}/>
        <Route path='/login' component={LoginPageView}/>
      </div>
    );
  }
}

export default App;
