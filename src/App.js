import React, { Component } from 'react';
import { Route } from 'react-router';
import styled from 'styled-components'

import Navigation from './components/Navigation/Navigation'
import HomePageView from './views/HomePageView';
import SavedStoryView from './views/SavedStoryView';
import LoginPageView from './views/LoginPageView';
import SignUpView from './views/SignUpView';
import StoryPageView from './views/StoryPageView'

import './App.css';

const PageContentContainer = styled.div`
  width: 1100px;
  margin: 15px auto;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation loggedIn={false}/>
        <PageContentContainer>
          <Route exact path='/' component={HomePageView}/>
          <Route path='/saved-stories' component={SavedStoryView}/>
          <Route path='/login' component={LoginPageView}/>
          <Route path='/sign-up' component={SignUpView}/>
          <Route path='/story/:id' component={StoryPageView}/>
        </PageContentContainer>
      </div>
    );
  }
}

export default App;
