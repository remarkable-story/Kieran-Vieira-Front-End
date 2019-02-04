import React, { Component } from 'react';
import { Route } from 'react-router'

import Navigation from './components/Navigation/Navigation'
import HomePageView from './views/HomePageView';
import SavedStoryView from './views/SavedStoryView';
import LoginPageView from './views/LoginPageView';
import SignUpView from './views/SignUpView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation loggedIn={false}/>
        <Route exact path='/' component={HomePageView}/>
        <Route path='/saved-storys' component={SavedStoryView}/>
        <Route path='/login' component={LoginPageView}/>
        <Route path='/sign-up' component={SignUpView}/>
      </div>
    );
  }
}

export default App;
