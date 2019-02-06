import React, { Component } from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';

import Navigation from './components/Navigation/Navigation'
import HomePageView from './views/HomePageView';
import MyStoryView from './views/MyStoryView';
import LoginPageView from './views/LoginPageView';
import SignUpView from './views/SignUpView';
import CreateStoryView from './views/CreateStoryView'
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
        <PageContentContainer>
          <Route path='/' render={props => <Navigation {...props} loggedIn={localStorage.getItem('loggedIn')}/>}/>
          <Route exact path='/' component={HomePageView}/>
          <Route path='/my-stories' component={MyStoryView}/>
          <Route path='/login' component={LoginPageView}/>
          <Route path='/sign-up' component={SignUpView}/>
          <Route path='/create-story' component={CreateStoryView}/>
          <Route path='/story/:id' component={StoryPageView}/>
        </PageContentContainer>
      </div>
    );
  }
}

export default App;
