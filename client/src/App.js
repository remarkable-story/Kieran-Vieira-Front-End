import React, { Component } from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';

import Navigation from './components/Navigation/Navigation'
import HomePageView from './views/HomePageView';
import MyStoryView from './views/MyStoryView';
import DonationsView from './views/DonationsView';
import AddDonationView from './views/AddDonationView';
import LoginPageView from './views/LoginPageView';
import SignUpView from './views/SignUpView';
import CreateStoryView from './views/CreateStoryView';
import StoryPageView from './views/StoryPageView';

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
          <Route path='/' component={Navigation}/>
          <Route exact path='/' component={HomePageView}/>
          <Route path='/my-stories' component={MyStoryView}/>
          <Route path='/donations' component={DonationsView}/>
          <Route path='/login' component={LoginPageView}/>
          <Route path='/sign-up' component={SignUpView}/>
          <Route path='/create-story' component={CreateStoryView}/>
          <Route path='/add-donation' component={AddDonationView}/>
          <Route path='/story/:id' component={StoryPageView}/>
        </PageContentContainer>
      </div>
    );
  }
}

export default App;
