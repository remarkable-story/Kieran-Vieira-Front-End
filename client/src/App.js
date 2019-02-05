import React, { Component } from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';
import { connect } from 'react-redux'

import Navigation from './components/Navigation/Navigation'
import HomePageView from './views/HomePageView';
import SavedStoryView from './views/SavedStoryView';
import LoginPageView from './views/LoginPageView';
import SignUpView from './views/SignUpView';
import CreateStoryView from './views/CreateStoryView'
import StoryPageView from './views/StoryPageView'

import './App.css';

const PageContentContainer = styled.div`
  width: 85%;
  margin: 15px auto;
  text-align: center;
`;

class App extends Component {
  render() {
    console.log(this.props.token)
    return (
      <div className="App">
        <Navigation loggedIn={this.props.token.length > 0}/>
        <PageContentContainer>
          <Route exact path='/' component={HomePageView}/>
          <Route path='/saved-stories' component={SavedStoryView}/>
          <Route path='/login' component={LoginPageView}/>
          <Route path='/sign-up' component={SignUpView}/>
          <Route path='/create-story' component={CreateStoryView}/>
          <Route path='/story/:id' component={StoryPageView}/>
        </PageContentContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    token: state.authenticationReducer.token
  }
}

export default connect(
  mapStateToProps,
  null
)(App);
